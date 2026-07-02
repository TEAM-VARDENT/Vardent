'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const googleFormUrl = "https://forms.gle/FyQLRnY3ehNpYYvf6";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030D0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Institutional Logo Area */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <span className="font-sans font-bold tracking-wider text-white text-lg">
            VARDENT <span className="text-[#C29B74] font-light">GLOBAL</span>
          </span>
        </Link>

        {/* Desktop Navigation (Hidden on Mobile Phones) */}
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

        {/* Right Action Block */}
        <div className="flex items-center gap-4">
          {/* Desktop "Get in Touch" Button linking to Google Forms */}
          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase tracking-wider rounded transition-colors text-center"
          >
            Get in Touch
          </a>

          {/* Interactive Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Pops into view when you tap the icon above) */}
      {isOpen && (
        <div className="md:hidden bg-[#030D0A] w-full border-t border-white/5 px-6 py-6 space-y-4 absolute top-20 left-0 right-0 flex flex-col z-50 shadow-2xl">
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-stone-200 py-2 border-b border-white/5"
          >
            About
          </Link>
          <Link 
            href="/solutions" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-stone-200 py-2 border-b border-white/5"
          >
            Solutions
          </Link>
          <Link 
            href="/insights" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-stone-200 py-2 border-b border-white/5"
          >
            Insights
          </Link>
          {/* Mobile "Get in Touch" Button linking to Google Forms */}
          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-center px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase tracking-wider rounded w-full block mt-4 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}