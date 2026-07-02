'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030D0A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Institutional Logo Area */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-sans font-bold tracking-wider text-white text-lg">
            VARDENT <span className="text-[#C29B74] font-light">GLOBAL</span>
          </span>
        </Link>

        {/* Global Nav Hub */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/solutions" className="text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/insights" className="text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-white transition-colors">
            Insights
          </Link>
        </nav>

        {/* Strategic Gateway Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="/partner" 
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
          >
            Partner With Us
          </Link>
        </div>

      </div>
    </header>
  );
}