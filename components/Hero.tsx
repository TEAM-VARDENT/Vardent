'use client';

export default function Hero() {
  const whatWeDo = [
    {
      title: 'Verification',
      description: 'We help organisations establish credible evidence for sustainability practices, claims, and supply chain performance.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Data',
      description: 'We transform agricultural information into actionable intelligence that supports better decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Technology',
      description: 'We develop digital systems that improve traceability, visibility, and supply chain management.',
      // High-end digital smart-agriculture monitoring & ag-tech systems image
      image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Knowledge',
      description: 'We strengthen understanding through research, capacity building, and ecosystem engagement.',
      // Authentic communal agricultural workshop, capacity building, and farmer empowerment image
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const principles = [
    { title: 'Evidence over assumptions', text: 'Sustainability must be supported by reliable information.' },
    { title: 'Transparency builds trust', text: 'Open and credible systems create stronger markets.' },
    { title: 'Technology should empower people', text: 'Innovation must serve producers, communities, and ecosystems.' },
    { title: 'Sustainability must create shared value', text: 'A better future requires inclusion across the supply chain.' }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#0A1F16] min-h-screen font-sans">
      
      {/* 1. CINEMATIC HALF-HEIGHT BANNER */}
      <section className="relative min-h-[55vh] pt-32 pb-16 md:py-0 w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-100"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=2560&q=95')` 
          }} 
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-10 max-w-5xl">
            Building trusted agricultural commodity supply chains through verification, data, technology, and collective action.
          </h1>
          <a
            href="#contact"
            className="px-10 py-4 bg-[#2B5C43] hover:bg-[#1E402B] text-white text-base font-semibold rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* 2. WHAT WE DO BLOCK WITH TARGETED THEMATIC IMAGES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0A1F16] mb-16 capitalize">
          What we do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatWeDo.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[380px]"
            >
              {/* Card Feature Image */}
              <div className="h-44 w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Card Content Matrix */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1F16] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE STRATEGIC PRINCIPLES ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0A1F16] mb-16">
          Our principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-[#C29B74] font-serif text-2xl font-bold mt-0.5">✺</span>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#0A1F16] mb-2">
                  {principle.title}
                </h4>
                <p className="text-stone-600 text-base md:text-lg font-normal leading-relaxed">
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