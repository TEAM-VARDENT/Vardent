'use client';

import { site } from '@/content/site';

interface ValuePillar {
  title: string;
  desc: string;
}

export default function WhyItExists() {
  // Safe defensive layout fallback mapping your structure requirements
  const whyData = (site as any).why || {
    title: "Why Vardent Exists",
    subtitle: "Bridging the gap between ecological intent and verifiable commercial impact.",
    pillars: [
      {
        title: "The Greenwashing Crisis",
        desc: "Consumers and regulatory frameworks are rejecting unbacked claims. Trust requires visible, data-driven tracking architecture."
      },
      {
        title: "Automated Evidence",
        desc: "We clear administrative logjams by converting standard supply ledger activities into auditable digital credentials instantly."
      }
    ]
  };

  const pillarsList = whyData.pillars || [];

  return (
    <section id="why" className="py-24 bg-vardent-bg/20 border-t border-b border-[rgba(15,94,61,0.06)]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-vardent-ink tracking-tight mb-4">
            {whyData.title}
          </h2>
          <p className="font-body text-base text-vardent-ink3 leading-relaxed">
            {whyData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pillarsList.map((pillar: ValuePillar, idx: number) => (
            <div key={idx} className="bg-white border border-[rgba(15,94,61,0.08)] rounded-2xl p-8 shadow-vardent-xs">
              <h3 className="font-display text-xl font-bold text-vardent-ink mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-[15px] text-vardent-ink3 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}