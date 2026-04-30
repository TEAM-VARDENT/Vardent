import { NextRequest, NextResponse } from 'next/server';

interface BrandPayload {
  company:  string;
  name:     string;
  email:    string;
  category: string;
  country:  string;
}

const MAX = { company: 200, name: 100, email: 254, category: 100, country: 100 };

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<BrandPayload> = {};

  try {
    body = (await request.json()) as Partial<BrandPayload>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { company, name, email, country, category } = body;

  if (!company || !name || !email || !country) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // Length limits — reject oversized payloads
  if (
    company.length  > MAX.company  ||
    name.length     > MAX.name     ||
    email.length    > MAX.email    ||
    country.length  > MAX.country  ||
    (category && category.length > MAX.category)
  ) {
    return NextResponse.json({ error: 'Input too long.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();

  // ── Airtable ────────────────────────────────────────────────
  const atKey   = process.env.AIRTABLE_API_KEY;
  const atBase  = process.env.AIRTABLE_BASE_ID;
  const atTable = process.env.AIRTABLE_BRANDS_TABLE;

  if (atKey && atBase && atTable) {
    try {
      const Airtable = (await import('airtable')).default;
      const airtable = new Airtable({ apiKey: atKey });
      const base     = airtable.base(atBase);
      await base(atTable).create([
        {
          fields: {
            Company:        company,
            Name:           name,
            Email:          email,
            Category:       category ?? '',
            Country:        country,
            'Submitted At': submittedAt,
          },
        },
      ]);
    } catch (err) {
      console.error('[submit-brand] Airtable error:', err);
    }
  }

  // ── Email notification (all user values HTML-escaped) ────────
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const to     = process.env.NOTIFICATION_EMAIL ?? 'amobeydeborah2000@gmail.com';

      await resend.emails.send({
        from:    'VARDENT <onboarding@resend.dev>',
        to,
        subject: `New Brand Registration — VARDENT`,
        html: `
          <div style="font-family:sans-serif;max-width:520px">
            <h2 style="color:#0F5E3D">New Brand Interest Registered</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#5A6474;width:140px">Company</td><td style="padding:8px 0;font-weight:600">${esc(company)}</td></tr>
              <tr><td style="padding:8px 0;color:#5A6474">Name</td><td style="padding:8px 0">${esc(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#5A6474">Email</td><td style="padding:8px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#5A6474">Category</td><td style="padding:8px 0">${esc(category ?? '—')}</td></tr>
              <tr><td style="padding:8px 0;color:#5A6474">Country</td><td style="padding:8px 0">${esc(country)}</td></tr>
              <tr><td style="padding:8px 0;color:#5A6474">Submitted</td><td style="padding:8px 0">${new Date(submittedAt).toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' })}</td></tr>
            </table>
          </div>
        `,
      });
    } catch (err) {
      console.error('[submit-brand] Resend error:', err);
    }
  }

  return NextResponse.json({ success: true });
}
