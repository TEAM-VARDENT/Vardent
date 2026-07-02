'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#05140E] text-white flex flex-col justify-between overflow-hidden">
      
      {/* 1. IMMERSIVE BACKGROUND: Full-Width Geospatial Overlay Canvas */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity transform scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80')` 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05140E]/90 via-[#05140E]/80 to-[#05140E]" />
        
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:6rem_6rem]" />
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-ping [animation-duration:4s]" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping [animation-duration:6s]" />
        </div>
      </div>

      {/* 2. THE OVERLAY MASTER HEADING */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 text-center flex-1 flex flex-col justify-center items-center">
        
        {/* ESCAPED QUOTES HERE FOR THE LINTER */}
        <div className="inline-block px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full mb-8 backdrop-blur-md">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#C29B74]">
            &ldquo;From Farm to Market, Trust Must Travel With the Product&rdquo;
          </span>
        </div>

        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white max-w-5xl leading-[1.12] mb-6">
          Building trusted agricultural commodity supply chains through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-300">
            verification, data, technology,
          </span>{' '}
          and collective action.
        </h1>
        
        <p className="font-sans text-stone-400 text-base sm:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
          VARDENT Global Framework Architecture
        </p>
      </div>

      {/* 3. FIXED BOTTOM BALANCED SPLIT */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#040F0B]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          <div className="md:col-span-5 relative min-h-[220px] overflow-hidden group border-b md:border-b-0 md:border-r border-white/10">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1592997572594-34be01bc36c7?auto=format&fit=crop&w=800&q=80')` 
              }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040F0B] via-transparent to-black/20" />
            <div className="absolute bottom-4 left-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block mb-0.5">Primary Tier</span>
              <h4 className="text-sm font-semibold tracking-wide text-white">Local Producer Cooperatives</h4>
            </div>
          </div>

          <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                  Traceability & Visibility Matrix
                </h3>
              </div>
              <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                We secure institutional data pipelines to yield unmatched producer visibility. 
                By mapping spatial footprints and verifying micro-transactions, VARDENT ensures 
                indisputable asset verification and compliance metrics directly from the source landscape.
              </p>
              
              <div className="flex gap-8 text-left border-t border-white/5 pt-4">
                <div>
                  <div className="text-xl font-bold text-white font-sans">100%</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Verified Origin</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-sans">Real-Time</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Geospatial Mapping</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}