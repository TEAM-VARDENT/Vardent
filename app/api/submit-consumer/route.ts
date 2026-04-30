import { NextRequest, NextResponse } from 'next/server';
import { isValidEmail, consumerEmailHtml } from '@/lib/email';

interface ConsumerPayload {
  name:    string;
  email:   string;
  country: string;
}

const MAX = { name: 100, email: 254, country: 100 };

export async function POST(request: NextRequest) {
  let body: Partial<ConsumerPayload> = {};

  try {
    body = (await request.json()) as Partial<ConsumerPayload>;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, country } = body;

  if (!name || !email || !country) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (
    name.length    > MAX.name    ||
    email.length   > MAX.email   ||
    country.length > MAX.country
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
  const atTable = process.env.AIRTABLE_CONSUMERS_TABLE;

  if (atKey && atBase && atTable) {
    try {
      const Airtable = (await import('airtable')).default;
      const airtable = new Airtable({ apiKey: atKey });
      const base     = airtable.base(atBase);
      await base(atTable).create([{
        fields: {
          Name:           name,
          Email:          email,
          Country:        country,
          'Submitted At': submittedAt,
        },
      }]);
    } catch (err) {
      console.error('[submit-consumer] Airtable error:', err);
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
        subject: `New Waitlist Signup — VARDENT`,
        html:    consumerEmailHtml({ name, email, country, submittedAt }),
      });
    } catch (err) {
      console.error('[submit-consumer] Resend error:', err);
    }
  }

  return NextResponse.json({ success: true });
}
