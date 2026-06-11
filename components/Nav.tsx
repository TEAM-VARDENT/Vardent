'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-[200]',
        'h-[80px] flex items-center justify-between',
        'container-pad',
        'bg-white/[0.94] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]',
        'border-b border-[rgba(15,94,61,0.06)]',
        'transition-shadow duration-300',
        scrolled ? 'nav-scrolled' : '',
      ].join(' ')}
      aria-label="Main navigation"
    >
      {/* Logo — larger on desktop, still prominent on mobile */}
      <Link href="/" className="flex items-center no-underline flex-shrink-0" aria-label="Vardent home">
        <Image
          src="/logo.png"
          alt="Vardent"
          height={96}
          width={300}
          className="h-[70px] w-auto sm:h-[80px] md:h-[96px]"
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0" role="list">
        {site.nav.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-body text-[14px] font-medium text-vardent-ink3 no-underline tracking-[0.01em] transition-colors duration-200 hover:text-vardent-g2"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={site.nav.cta.href}
            className={[
              'font-body text-[14px] font-medium text-white no-underline',
              'bg-vardent-g2 px-6 py-[10px] rounded-[8px]',
              'shadow-[0_2px_8px_rgba(15,94,61,0.28)]',
              'transition-all duration-200',
              'hover:bg-vardent-g3 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(15,94,61,0.36)]',
            ].join(' ')}
          >
            {site.nav.cta.label}
          </a>
        </li>
      </ul>

      {/* Mobile: CTA pill + hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <a
          href={site.nav.cta.href}
          onClick={() => setMenuOpen(false)}
          className="font-body text-[13px] font-semibold text-white no-underline bg-vardent-g2 px-4 py-2 rounded-[8px]"
        >
          {site.nav.cta.label}
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-[22px] h-0.5 bg-vardent-ink2 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-vardent-ink2 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-vardent-ink2 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white/[0.98] backdrop-blur-[20px] border-b border-[rgba(15,94,61,0.08)] shadow-vardent-sm px-6 py-5 flex flex-col gap-4">
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-[16px] font-medium text-vardent-ink3 no-underline hover:text-vardent-g2 transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
