import { site } from '@/content/site';

const { footer } = site;

const navIcons: Record<string, JSX.Element> = {
  Privacy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Contact: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  'Vardent Trust': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  'Vardent Ltd': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer
      className="bg-vardent-ink"
      style={{ padding: '64px max(28px, calc((100vw - 1240px) / 2))' }}
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-12 mb-9 border-b border-white/[0.12]">
        <div>
          <div className="font-display text-[22px] font-extrabold text-white tracking-[0.06em] mb-3">
            {footer.wordmark.prefix}
            <span className="text-vardent-g4">{footer.wordmark.highlight}</span>
            {footer.wordmark.suffix}
          </div>
          <div className="font-mono text-[11px] text-white/50 tracking-[0.12em] uppercase">
            {footer.tagline}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
            {footer.nav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-[6px] font-body text-[14px] font-medium text-white/70 no-underline transition-colors duration-200 hover:text-white"
                >
                  {navIcons[link.label]}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <p className="font-body text-[13px] text-white/50">{footer.copyright}</p>
        <p className="font-body text-[13px] text-white/55 italic">{footer.mission}</p>
      </div>
    </footer>
  );
}
