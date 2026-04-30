import { NextRequest, NextResponse } from 'next/server';
import { esc, isValidEmail, brandEmailHtml } from '@/lib/email';

interface BrandPayload {
  company:  string;
  name:     string;
  email:    string;
  category: string;
  country:  string;
}

const MAX = { company: 200, name: 100, email: 254, category: 100, country: 100 };

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
      await base(atTable).create([{
        fields: {
          Company:        company,
          Name:           name,
          Email:          email,
          Category:       category ?? '',
          Country:        country,
          'Submitted At': submittedAt,
        },
      }]);
    } catch (err) {
      console.error('[submit-brand] Airtable error:', err);
    }
  }

  // ── Email notification ───────────────────────────────────────
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const to     = process.env.NOTIFICATION_EMAIL ?? 'amobeydeborah2000@gmail.com';

      await resend.emails.send({
        from:    'VARDENT <onboarding@resend.dev>',
        to,
        subject: `New Brand Registration — ${esc(company)} · VARDENT`,
        html:    brandEmailHtml({ company, name, email, category: category ?? '', country, submittedAt }),
      });
    } catch (err) {
      console.error('[submit-brand] Resend error:', err);
    }
  }

  return NextResponse.json({ success: true });
}
