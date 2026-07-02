'use client';

export default function AboutPage() {
  const sectors = [
    { 
      title: 'Smallholder Farmers', 
      desc: 'Optimizing value chains, ensuring fair producer inclusion, and mapping structural asset models across African farming networks.',
      // Updated to an excited cocoa farmer holding fresh pods
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSA2sBSEfM3A_Hr6yHTwTF-BHF3pJ3yGSBeLGthFZHJ17rmwbstN3m0E4wJy-pVn-fah24VecGZogPkHWU'
    },
    { 
      title: 'Global Commodity Markets', 
      desc: 'Bringing enterprise-grade traceability, climate compliance data, and verification infrastructure to global buyers.',
      // Updated to international export crops (coffee, cocoa, grains)
      image: 'https://cdn.shortpixel.ai/spai/q_glossy+w_903+to_webp+ret_img/www.solidaridadnetwork.org/wp-content/uploads/2021/01/Pickers_Colombia_Coffee_Solidaridad-2048x1365.jpg'
    },
    { 
      title: 'Geospatial Intelligence', 
      desc: 'Leveraging telemetry, satellite mapping, and high-performance field data to turn landscapes into actionable insight.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
    },
    { 
      title: 'Digital Public Goods', 
      desc: 'Building open-access framework elements, ecosystem capacity, and digital tools for sustainable governance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const differentiators = [
    { title: 'The Vardent Way', desc: 'We do not rely on assumptions. Every sustainability metric we evaluate is rooted in independently verified, unalterable field-level proof.' },
    { title: 'Localized Technology Hardware', desc: 'We match cloud-based geospatial ecosystems with rugged handheld physical tracking hardware designed specifically for complex field environments.' },
    { title: 'Grassroots Ecosystem Integration', desc: 'From training cocoa youth networks in digital literacy to advising enterprise management, we operate at every tier of the commerce chain.' }
  ];

  const dataStatistics = [
    { metric: '70%', label: 'Of global cocoa supply chains rely on fragmented data structures prone to market verification gaps.' },
    { metric: 'EUDR', label: 'Regulations demanding total geolocated plot proof for imports, making legacy compliance systems obsolete.' },
    { metric: '$2.1B', label: 'In institutional capital locked away annually from producers due to unmapped land tenure and missing farm plans.' },
    { metric: '10x', label: 'More efficient data scaling achieved when community-led spatial literacy models are actively deployed.' }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#0A1F16] min-h-screen font-sans flex flex-col justify-between">
      
      <main className="flex-grow">
        {/* 1. HERO BANNER WITH AGRICULTURAL TERRACE BACKGROUND */}
        <section className="relative min-h-[55vh] pt-32 pb-16 md:py-0 w-full flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS54U9MY3yFNOXeRxD7_aVhneF9BzjY_Gr_JHAlOxEahDvWoxtvPZ0rWTogF3VGH2VaRF8r4BhJHFHbUpw')" 
            }} 
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
              About Vardent
            </h1>
            <p className="text-stone-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              An independent data infrastructure, technology architecture, and research entity dedicated to building complete integrity and shared value across agricultural commodity systems.
            </p>
          </div>
        </section>

        {/* 2. MISSION & VISION MATRIX */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-4">
            <div className="text-2xl font-serif font-bold text-[#C29B74]">Our Mission</div>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-normal">
              To advance research, advocacy, producer inclusion, capacity building, and uncompromised accountability within agricultural commodity systems, empowering the people and communities that anchor global trade.
            </p>
          </div>
          <div className="p-8 bg-[#0A1F16] text-[#FAF9F5] rounded-2xl shadow-sm space-y-4">
            <div className="text-2xl font-serif font-bold text-[#C29B74]">Our Vision</div>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed font-normal">
              To establish a transparent global marketplace where sustainability is supported by verified evidence, smallholders are fairly rewarded, and communities possess the spatial data capital required to thrive.
            </p>
          </div>
        </section>

        {/* 3. OUR KEY SECTORS */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A1F16] mb-16">
            Our Key Sectors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[420px]"
              >
                <div className="h-44 w-full overflow-hidden relative bg-stone-100">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1F16] mb-3 leading-tight">
                      {sector.title}
                    </h3>
                    <p className="text-stone-600 text-base leading-relaxed font-normal">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. WHAT MAKES US DIFFERENT */}
        <section className="bg-[#0A1F16] text-[#FAF9F5] py-24 my-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-16">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="border-t border-white/10 pt-8 space-y-4">
                  <h3 className="text-xl font-bold text-[#C29B74]">{diff.title}</h3>
                  <p className="text-stone-400 text-base leading-relaxed font-normal">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GLOBE DATA METRICS GRID */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A1F16] mb-6">
                Global Supply Chain Realities
              </h2>
              <p className="text-stone-600 text-base md:text-lg leading-relaxed font-normal mb-6">
                Our work target addresses systemic informational data problems on a macro global scale. Without clear data metrics, supply risks compound daily.
              </p>
              <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100 group">
                <img 
                  src="https://satpalda.com/wp-content/uploads/elementor/thumbs/farm-satellite-imagery-red1m47yxl0r8yjbsjoxm4rzq7r936qgj30x298x5q.png" 
                  alt="Vardent GIS Farm Satellite Mapping Dashboard" 
                  className="w-full h-full object-cover brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold bg-[#2B5C43] px-2 py-1 rounded">
                    Telemetry Active
                  </span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {dataStatistics.map((stat, idx) => (
                <div key={idx} className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-[#2B5C43] mb-2">{stat.metric}</div>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed font-normal">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR COLLABORATION MODEL */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A1F16] mb-12">
            Our Collaboration Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-stone-200 rounded-xl bg-white space-y-3">
              <h4 className="font-bold text-lg text-[#0A1F16]">1. Assess & Diagnose</h4>
              <p className="text-stone-600 text-sm md:text-base font-normal leading-relaxed">We audit current supply chain tracking models to pinpoint regulatory gaps and structural land assessment needs.</p>
            </div>
            <div className="p-6 border border-stone-200 rounded-xl bg-white space-y-3">
              <h4 className="font-bold text-lg text-[#0A1F16]">2. Deploy Architecture</h4>
              <p className="text-stone-600 text-sm md:text-base font-normal leading-relaxed">We ship specialized handheld tracking GPS devices, build dedicated geospatial layouts, and structure research frameworks.</p>
            </div>
            <div className="p-6 border border-stone-200 rounded-xl bg-white space-y-3">
              <h4 className="font-bold text-lg text-[#0A1F16]">3. Verify & Scale</h4>
              <p className="text-stone-600 text-sm md:text-base font-normal leading-relaxed">We run independent analytics, train local communities, and deliver trusted commercial evidence to global markets.</p>
            </div>
          </div>
        </section>

        {/* 7. FOREST GREEN CALL TO ACTION CARD */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-stone-200">
          <div className="bg-[#0A1F16] text-[#FAF9F5] rounded-3xl p-12 space-y-6 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              What is your key challenge?
            </h3>
            <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Speak to our team to find out how Vardent can help you with your data and technology needs.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-[#2B5C43] hover:bg-[#1E402B] text-white text-base font-semibold rounded-full transition-all duration-200 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. MATCHING INSTITUTIONAL FOOTER */}
      <footer className="bg-[#0A1F16] text-[#FAF9F5] border-t border-[#1E402B] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            
            <div className="sm:col-span-2 space-y-4">
              <span className="text-2xl font-black tracking-wider text-white block">VARDENT</span>
              <p className="text-stone-400 text-base max-w-sm leading-relaxed">
                Building integrity, visibility, and shared value across global agricultural commodity markets through data and technology.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#C29B74] mb-4">About Us</h4>
              <ul className="space-y-3 text-base text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Mission & Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#C29B74] mb-4">Careers</h4>
              <ul className="space-y-3 text-base text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join our Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#C29B74] mb-4">Connect</h4>
              <ul className="space-y-3 text-base text-stone-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/106148574/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    LinkedIn
                    <span className="text-xs text-[#C29B74]">↗</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-[#1E402B] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Vardent. All rights reserved.</p>
            <p className="tracking-wider text-xs"> THE VARDENT WAY</p>
          </div>
        </div>
      </footer>

    </div>
  );
}