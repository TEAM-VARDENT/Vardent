import Eyebrow from './ui/Eyebrow';
import { site } from '@/content/site';

const { why } = site;

export default function WhyItExists() {
  return (
    <section id="why" className="section-pad bg-white">
      {/* Header */}
      <div className="text-center mb-[72px]">
        <div className="reveal">
          <Eyebrow center>{why.eyebrow}</Eyebrow>
        </div>
        <h2
          className="reveal font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mx-auto mb-5"
          style={{ fontSize: 'clamp(40px, 5vw, 58px)' }}
        >
          {why.headlineLine1}
          <br />
          <span className="text-vardent-g3">{why.headlineLine2}</span>
        </h2>
        <p className="reveal font-body text-[20px] leading-[1.7] text-vardent-ink3 mx-auto text-center max-w-[580px]">
          {why.lead}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {why.cards.map((card) => (
          <div
            key={card.number}
            className="reveal ycard-accent relative bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[28px] px-8 py-10 overflow-hidden transition-all duration-[250ms] hover:-translate-y-[5px] hover:shadow-vardent-lg hover:bg-white"
          >
            <div className="font-mono text-[11px] text-vardent-g3 tracking-[0.10em] mb-6 opacity-80">
              {card.number}
            </div>
            <h3 className="font-display text-[20px] font-bold text-vardent-ink mb-[14px] leading-[1.3]">
              {card.title}
            </h3>
            <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
