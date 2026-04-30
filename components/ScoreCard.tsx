import { site } from '@/content/site';

const { scoreCard: sc } = site;

export default function ScoreCard() {
  return (
    <div className="bg-white border border-[rgba(15,94,61,0.10)] rounded-[28px] px-9 py-8 shadow-vardent-lg">
      {/* Top row */}
      <div className="flex justify-between items-start mb-7">
        <div>
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-vardent-ink4 mb-2">
            {sc.scoreLabel}
          </div>
          <div className="font-display text-[54px] font-extrabold text-vardent-ink leading-none">
            {sc.score}
            <sup className="text-[20px] text-vardent-ink4 font-medium align-super">
              /{sc.scoreMax}
            </sup>
          </div>
        </div>
        <span className="inline-flex items-center gap-[7px] bg-vardent-tint text-vardent-g2 px-4 py-[7px] rounded-full font-body text-[12px] font-semibold tracking-[0.02em] border border-[rgba(15,94,61,0.15)]">
          <span className="w-[7px] h-[7px] rounded-full bg-vardent-g3 shadow-[0_0_0_3px_rgba(22,138,90,0.2)]" aria-hidden />
          {sc.badge}
        </span>
      </div>

      {/* Dimensions */}
      <div className="flex flex-col gap-3">
        {sc.dimensions.map((dim) => (
          <div key={dim.name} className="flex items-center justify-between gap-4">
            <span className="font-body text-[13px] text-vardent-ink3 flex-1">{dim.name}</span>
            <div className="w-[88px] h-[3px] bg-vardent-tint rounded-full overflow-hidden flex-shrink-0">
              <div className="dim-fill h-full" style={{ width: `${dim.score}%` }} />
            </div>
            <span className="font-mono text-[12px] text-vardent-g2 font-medium min-w-[24px] text-right">
              {dim.score}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-[rgba(15,94,61,0.06)] flex justify-between items-center">
        <div>
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-vardent-ink4 mb-2">
            {sc.transparencyIdLabel}
          </div>
          <div className="font-mono text-[11px] text-vardent-g3">{sc.transparencyId}</div>
        </div>
        <div className="font-mono text-[10px] text-vardent-ink4 tracking-[0.06em] uppercase">
          {sc.status}
        </div>
      </div>
    </div>
  );
}
