'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#030D0A] text-white flex items-center justify-center overflow-hidden">
      
      {/* 1. CINEMATIC FULL-WIDTH VISUAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-100 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80')` 
          }} 
        />
        {/* Deep, gradient overlay mimicking high-end climate report styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030D0A] via-[#030D0A]/60 to-[#030D0A]/90" />
        
        {/* Subtle, moving data network overlay lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10" />
      </div>

      {/* 2. PREMIUM EDITORIAL CONTENT CORES */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center flex flex-col items-center py-32">
        
        {/* Minimalist Operational Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-800/40 rounded mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-medium">
            Institutional Verification Architecture
          </span>
        </div>

        {/* The Master Heading (Using clean, authoritative tracking) */}
        <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.15] max-w-5xl mb-8">
          Building trusted agricultural commodity supply chains through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
            verification, data, technology,
          </span>{' '}
          and collective action.
        </h1>

        {/* Clean, authoritative subtitle row */}
        <p className="font-sans text-stone-400 text-lg sm:text-xl font-light max-w-2xl leading-relaxed mb-12">
          Strengthening global commerce pipelines with absolute traceability from source landscape to international markets.
        </p>

        {/* Primary Call to Action Gates */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#framework"
            className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded transition-all shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
          >
            Explore the Platform
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-white/5 text-stone-300 border border-stone-700 hover:border-stone-500 text-sm font-medium rounded transition-all"
          >
            Read the Briefing
          </a>
        </div>

      </div>

      {/* Subtle indicator showing there is deeper structural content below */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-30 animate-bounce">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}