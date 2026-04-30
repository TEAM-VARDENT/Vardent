import { site } from '@/content/site';

export default function StatsBand() {
  return (
    <div
      className="bg-vardent-g2 grid grid-cols-1 md:grid-cols-3"
      style={{ padding: '52px max(28px, calc((100vw - 1240px) / 2))' }}
    >
      {site.stats.map((stat, i) => (
        <div
          key={stat.number}
          className={[
            'reveal px-0 md:px-[52px]',
            'border-b md:border-b-0 border-r-0 md:border-r border-white/[0.14]',
            'pb-7 mb-7 md:pb-0 md:mb-0',
            i === 0 ? 'md:pl-0' : '',
            i === site.stats.length - 1 ? 'md:border-r-0 border-b-0 mb-0 pb-0' : '',
          ].join(' ')}
        >
          <div className="font-display text-[46px] font-extrabold text-white leading-none mb-3">
            {stat.number}
          </div>
          <div className="font-body text-[15px] font-medium text-white/80 leading-[1.55] max-w-[200px] mb-2">
            {stat.label}
          </div>
          <div className="font-mono text-[10px] text-white/55 tracking-[0.06em] uppercase">
            {stat.source}
          </div>
        </div>
      ))}
    </div>
  );
}
