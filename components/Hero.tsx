'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020A07] text-white flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. HIGH-DEFINITION PREMIUM CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.24] scale-100"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2560&q=95')` 
          }} 
        />
        {/* Layered corporate gradient masks for maximum text legibility and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020A07]/95 via-[#020A07]/50 to-[#020A07]" />
        <div className="absolute inset-0 bg-[#020A07]/20 backdrop-blur-[0.5px]" />
        
        {/* Fine-line structural geospatial matrix network overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.05]" />
      </div>

      {/* 2. MAIN HUB CANVAS */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center py-28 flex flex-col items-center">
        
        {/* Core Architectural Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-950/40 border border-emerald-800/30 rounded mb-10 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C29B74]" />
          <span className="text-[10px] font-mono tracking-widest text-[#C29B74] uppercase font-semibold">
            &ldquo;From Farm to Market, Trust Must Travel With the Product&rdquo;
          </span>
        </div>

        {/* Master Framework Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-5xl mb-10">
          Building trusted agricultural commodity supply chains through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
            verification, data, technology,
          </span>{' '}
          and collective action.
        </h1>

        {/* Thick Institutional Divider */}
        <div className="w-12 h-[2px] bg-[#C29B74]/60 mb-10" />

        {/* Official Unedited Mission Statement Container */}
        <div className="max-w-4xl bg-white/[0.01] border border-white/5 p-8 rounded-lg backdrop-blur-sm mb-12">
          <p className="text-stone-300 text-base sm:text-lg md:text-xl font-light leading-relaxed text-center tracking-wide">
            <span className="font-semibold text-white">VARDENT Global</span> is an organisation strengthening agricultural commodity supply chains by delivering trusted verification, data-driven technologies, and knowledge systems that enable transparency, resilience, and equitable participation for producers, businesses, and consumers.
          </p>
        </div>

        {/* Primary Operational Action Blocks */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#framework"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-mono uppercase tracking-wider rounded font-medium transition-all shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
          >
            Access Data Systems
          </a>
          <a
            href="/insights"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-stone-300 border border-stone-800 hover:border-stone-600 text-xs font-mono uppercase tracking-wider rounded font-medium transition-all"
          >
            Review Trust Research
          </a>
        </div>

      </div>

    </section>
  );
}