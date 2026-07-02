'use client';

export default function Hero() {
  const whatWeDo = [
    {
      title: 'Verification',
      description: 'We help organisations establish credible evidence for sustainability practices, claims, and supply chain performance.',
      icon: (
        <svg className="w-6 h-6 text-[#2B5C43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Data',
      description: 'We transform agricultural information into actionable intelligence that supports better decisions.',
      icon: (
        <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Technology',
      description: 'We develop digital systems that improve traceability, visibility, and supply chain management.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      )
    },
    {
      title: 'Knowledge',
      description: 'We strengthen understanding through research, capacity building, and ecosystem engagement.',
      icon: (
        <svg className="w-6 h-6 text-[#C29B74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const principles = [
    { title: 'Evidence over assumptions', text: 'Sustainability must be supported by reliable information.' },
    { title: 'Transparency builds trust', text: 'Open and credible systems create stronger markets.' },
    { title: 'Technology should empower people', text: 'Innovation must serve producers, communities, and ecosystems.' },
    { title: 'Sustainability must create shared value', text: 'A better future requires inclusion across the supply chain.' }
  ];

  return (
    <div className="bg-[#FBFBFA] text-[#0A1F16] min-h-screen font-sans">
      
      {/* SECTION 1: HALF-HEIGHT HD HERO BANNER */}
      <section className="relative h-[60vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2560&q=95')` 
          }} 
        />
        {/* Balanced Green Overlay Mask matching layout layout design */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020A07]/80 via-[#020A07]/75 to-[#020A07]/90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.08]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-8 max-w-4xl">
            Building trusted agricultural commodity supply chains through verification, data, technology, and collective action.
          </h1>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#2B5C43] hover:bg-[#1E402B] text-white text-sm font-medium rounded-full transition-colors shadow-sm"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-stone-200">
        <div className="mb-4 text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
          Section 3 — What We Do
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A1F16] mb-12">
          Building the foundation for trusted agriculture
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDo.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="mb-4 p-2.5 bg-stone-50 rounded-lg inline-block border border-stone-100">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A1F16] mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: VARDENT PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-4 text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
          VARDENT Principles
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A1F16] mb-12">
          Our principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-[#C29B74] font-serif text-lg mt-0.5">✺</span>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0A1F16] mb-1">
                  {principle.title}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  {principle.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}