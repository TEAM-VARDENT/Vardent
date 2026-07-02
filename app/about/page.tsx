'use client';

export default function AboutPage() {
  const sectors = [
    { title: 'Smallholder Agriculture', desc: 'Optimizing value chains, ensuring fair producer inclusion, and mapping structural asset models across African farming networks.' },
    { title: 'Global Commodity Markets', desc: 'Bringing enterprise-grade traceability, climate compliance data, and verification infrastructure to global buyers.' },
    { title: 'Geospatial Intelligence', desc: 'Leveraging telemetry, satellite mapping, and high-performance field data to turn landscapes into actionable insight.' },
    { title: 'Digital Public Goods', desc: 'Building open-access framework elements, ecosystem capacity, and digital tools for sustainable governance.' }
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
    <div className="bg-[#FAF9F5] text-[#0A1F16] min-h-screen font-sans pt-24">
      
      {/* 1. HERO HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="text-[#C29B74] font-mono text-xs uppercase tracking-widest font-bold block mb-4">Institutional Profile</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0A1F16] mb-8">
          About Vardent
        </h1>
        <p className="text-stone-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          Vardent is an independent data infrastructure, technology architecture, and research entity dedicated to building complete integrity and shared value across agricultural commodity systems.
        </p>
      </section>

      {/* 2. MISSION & VISION MATRIX */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-200">
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

      {/* 3. KEY SECTORS WE WORK IN */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A1F16] mb-12">
          Key Sectors We Work In
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-stone-400 font-mono text-sm">0{idx + 1} //</div>
              <h3 className="text-xl font-bold text-[#0A1F16]">{sector.title}</h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-normal">{sector.desc}</p>
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
            {/* Visual Abstract Map Reference */}
            <div className="h-48 rounded-xl bg-[#2B5C43]/5 border border-[#2B5C43]/10 flex flex-col items-center justify-center text-center p-4">
              <span className="text-3xl mb-2">🌍</span>
              <span className="text-xs font-mono tracking-widest text-[#2B5C43] uppercase font-bold">Vardent Telemetry Mapping Map Active</span>
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

      {/* 7. DYNAMIC CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-stone-200">
        <div className="bg-[#FAF9F5] border-2 border-[#2B5C43]/20 rounded-3xl p-12 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F16]">
            What is your key challenge?
          </h3>
          <p className="text-stone-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
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

    </div>
  );
}