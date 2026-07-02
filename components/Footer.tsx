'use client';

import Link from 'next/link';
import { site } from '@/content/site';

interface NavItem {
  label: string;
  href: string;
}

export default function Footer() {
  // Safe fallback matching your structural expectations
  const footerData = (site as any).footer || {
    tagline: "Verifiable sustainability for modern commerce.",
    copyright: "© 2026 Vardent. All rights reserved.",
    nav: [
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
      { label: "Early Access", href: "#access" }
    ]
  };

  // Safe fallback for the wordmark specifically
  const wordmark = footerData.wordmark || {
    prefix: "VARD",
    highlight: "ENT",
    suffix: ""
  };

  const navLinks = footerData.nav || [];

  return (
    <footer className="bg-vardent-g1 text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Branding Column */}
        <div>
          <div className="font-display text-[22px] font-extrabold text-white tracking-[0.06em] mb-3">
            {wordmark.prefix}
            <span className="text-vardent-g4">{wordmark.highlight}</span>
            {wordmark.suffix}
          </div>
          <p className="font-body text-white/70 text-sm leading-relaxed max-w-xs">
            {footerData.tagline}
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link: NavItem, idx: number) => (
              <li key={idx}>
                <Link 
                  href={link.href} 
                  className="font-body text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / Copyright Column */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Platform Status
            </h4>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-body text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </div>
          </div>
          <p className="font-body text-xs text-white/40 mt-8 md:mt-0">
            {footerData.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}