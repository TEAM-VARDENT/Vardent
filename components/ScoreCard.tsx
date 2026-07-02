'use client';

import { site } from '@/content/site';

interface ScoreMetric {
  label: string;
  value: string;
  description: string;
}

export default function ScoreCard() {
  // Safe climate-smart fallback metrics structure
  const sc = (site as any).scoreCard || {
    title: "Sustainability Metrics",
    subtitle: "Real-time, verifiable data tracking.",
    metrics: [
      { label: "Carbon Offset", value: "94%", description: "Verified reduction in supply chain footprints." },
      { label: "Traceability", value: "100%", description: "Products anchored onto transparent ledger tracking." },
      { label: "Audit Rating", value: "A+", description: "Independent third-party verification score." }
    ]
  };

  const metricsList = sc.metrics || [];

  return (
    <section id="metrics" className="py-20 bg-vardent-bg/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-vardent-ink mb-3">
            {sc.title}
          </h2>
          <p className="font-body text-vardent-ink3 max-w-md mx-auto">
            {sc.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metricsList.map((metric: ScoreMetric, idx: number) => (
            <div 
              key={idx} 
              className="bg-white border border-[rgba(15,94,61,0.1)] rounded-2xl p-8 shadow-vardent-xs hover:shadow-md transition-shadow duration-200"
            >
              <span className="font-display text-xs font-bold uppercase tracking-wider text-vardent-g3 block mb-1">
                {metric.label}
              </span>
              <div className="font-display text-4xl font-extrabold text-vardent-ink mb-3">
                {metric.value}
              </div>
              <p className="font-body text-sm text-vardent-ink4 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}