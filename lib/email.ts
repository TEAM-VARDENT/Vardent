export function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface Field {
  label: string;
  value: string;
  link?:  string;
}

function fieldRow(f: Field): string {
  const val = f.link
    ? `<a href="${f.link}" style="color:#0F5E3D;text-decoration:none;font-weight:600;font-size:16px;">${esc(f.value)}</a>`
    : `<span style="color:#0C1117;font-weight:600;font-size:16px;">${esc(f.value)}</span>`;

  return `
    <tr>
      <td style="padding:16px 0;border-bottom:1px solid #F0EFE9;">
        <p style="margin:0 0 3px 0;font-size:11px;color:#8D96A3;text-transform:uppercase;letter-spacing:1.2px;font-family:Arial,Helvetica,sans-serif;">${f.label}</p>
        ${val}
      </td>
    </tr>`;
}

export function brandEmailHtml(data: {
  company:     string;
  name:        string;
  email:       string;
  category:    string;
  country:     string;
  submittedAt: string;
}): string {
  const date = new Date(data.submittedAt).toLocaleString('en-GB', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const fields: Field[] = [
    { label: 'Company',          value: data.company                },
    { label: 'Contact Name',     value: data.name                   },
    { label: 'Email Address',    value: data.email, link: `mailto:${data.email}` },
    { label: 'Product Category', value: data.category || '—'        },
    { label: 'Country',          value: data.country                },
    { label: 'Submitted',        value: date                        },
  ];

  return emailShell({
    badgeText:  'New Brand Registration',
    intro:      `A brand has registered interest on <strong style="color:#ffffff;">vardent.co</strong> and is waiting to hear from you.`,
    fields,
    footerNote: 'Brand Interest',
  });
}

export function consumerEmailHtml(data: {
  name:        string;
  email:       string;
  country:     string;
  submittedAt: string;
}): string {
  const date = new Date(data.submittedAt).toLocaleString('en-GB', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const fields: Field[] = [
    { label: 'Name',          value: data.name                   },
    { label: 'Email Address', value: data.email, link: `mailto:${data.email}` },
    { label: 'Country',       value: data.country                },
    { label: 'Submitted',     value: date                        },
  ];

  return emailShell({
    badgeText:  'New Waitlist Signup',
    intro:      `Someone has joined the Vardent waitlist on <strong style="color:#ffffff;">vardent.co</strong>.`,
    fields,
    footerNote: 'Consumer Waitlist',
  });
}

function emailShell(opts: {
  badgeText:  string;
  intro:      string;
  fields:     Field[];
  footerNote: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${opts.badgeText} — VARDENT</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F3EE;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F3EE;">
    <tr>
      <td align="center" style="padding:48px 20px;">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#ffffff;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td bgcolor="#0A4A30" style="padding:36px 44px 32px;">
              <p style="margin:0 0 12px 0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:3px;font-family:Arial,Helvetica,sans-serif;">
                VARD<span style="color:#1FAD72;">E</span>NT
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="#168A5A" style="padding:6px 14px;border-radius:100px;">
                    <p style="margin:0;font-size:11px;color:#ffffff;letter-spacing:1.4px;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-weight:600;">${opts.badgeText}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro band -->
          <tr>
            <td bgcolor="#0F5E3D" style="padding:16px 44px;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.80);line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
                ${opts.intro}
              </p>
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:8px 44px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${opts.fields.map(fieldRow).join('')}
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 44px 40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="#0F5E3D" style="border-radius:8px;">
                    <a href="https://airtable.com" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;letter-spacing:0.3px;">
                      View in Airtable
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#F4F3EE" style="padding:24px 44px;border-top:1px solid #E8E7E2;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#8D96A3;font-family:Arial,Helvetica,sans-serif;">
                      VARDENT · ${opts.footerNote} Notification
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:12px;color:#8D96A3;font-family:Arial,Helvetica,sans-serif;">
                      © Vardent 2026
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
</body>
</html>`;
}
