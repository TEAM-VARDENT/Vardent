import { site } from '@/content/site';

const { footer } = site;

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
          <ul className="flex flex-wrap gap-8 list-none m-0 p-0">
            {footer.nav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="font-body text-[14px] font-medium text-white/70 no-underline transition-colors duration-200 hover:text-white"
                >
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
