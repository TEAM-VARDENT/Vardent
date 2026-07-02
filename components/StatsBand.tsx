'use client';

import { site } from '@/content/site';

interface StatItem {
  number: string;
  label: string;
}

export default function StatsBand() {
  // Safe defensive fallback array matching your map iteration requirements
  const statsList: StatItem[] = (site as any).stats || [
    { number: "98%", label: "Supply Chain Accuracy" },
    { number: "24/7", label: "Verification Ledger Audits" },
    { number: "05+", label: "Global Trading Hubs" }
  ];

  return (
    <section 
      className="w-full bg-vardent-g1 text-white grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 text-center"
      style={{ padding: '52px max(28px, calc((100vw - 1240px) / 2))' }}
    >
      {statsList.map((stat: StatItem, i: number) => (
        <div
          key={stat.number || i}
          className={[
            'reveal',
            i < statsList.length - 1 ? 'sm:border-r border-white/10' : ''
          ].join(' ')}
        >
          <div className="font-display text-[44px] font-extrabold leading-none tracking-[-0.02em] text-vardent-g4 mb-1">
            {stat.number}
          </div>
          <div className="font-body text-[14px] font-medium tracking-[0.03em] uppercase text-white/60">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}