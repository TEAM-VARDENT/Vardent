'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#071912] overflow-hidden pt-20">
      
      {/* Premium Ambient Grid & Animated Layers */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Subtle Data-Point Animations (Simulating geospatial layers) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping [animation-duration:3s]" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-ping [animation-duration:4s]" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 sm:py-32 flex flex-col items-center text-center">
        
        {/* Institutional Microbadge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-950/60 border border-emerald-800/40 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-emerald-300 uppercase">
            Global Infrastructure Active
          </span>
        </div>

        {/* The Core Institutional Value Proposition Statement */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.1] mb-8">
          Building trusted agricultural commodity supply chains through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            verification, data, technology,
          </span>{' '}
          and collective action.
        </h1>

        {/* Clean Editorial Subtext */}
        <p className="font-body text-emerald-100/70 text-lg sm:text-xl max-w-3xl leading-relaxed mb-12">
          VARDENT bridges macro ecological requirements with micro supply network clarity, 
          deploying real-time tracking architecture onto international market pipelines.
        </p>

        {/* Premium Action Gateways */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-all shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:translate-y-[-1px]"
          >
            Explore Ecosystem Solutions
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-950/40 hover:bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-medium rounded-xl transition-all backdrop-blur-sm"
          >
            Review Institutional Framework
          </a>
        </div>

        {/* Mini Institutional Metadata Row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-emerald-900/40 pt-8 w-full max-w-4xl text-left">
          <div>
            <div className="text-xs font-mono uppercase text-emerald-500/70 tracking-wider mb-1">Framework</div>
            <div className="text-sm font-medium text-emerald-100">WEF / ESG Compliant</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-emerald-500/70 tracking-wider mb-1">Verification Method</div>
            <div className="text-sm font-medium text-emerald-100">Cryptographic Proof</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-emerald-500/70 tracking-wider mb-1">Data Model</div>
            <div className="text-sm font-medium text-emerald-100">Geospatial Mapping</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-emerald-500/70 tracking-wider mb-1">Target Assets</div>
            <div className="text-sm font-medium text-emerald-100">Global Commodities</div>
          </div>
        </div>

      </div>

    </section>
  );
}