import Eyebrow from './ui/Eyebrow';
import { site } from '@/content/site';

const { what } = site;

const icons = {
  star: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 2L12.5 7.5L18 8.25L14 12L15 17.5L10 14.75L5 17.5L6 12L2 8.25L7.5 7.5L10 2Z"
        stroke="#0F5E3D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7" stroke="#0F5E3D" strokeWidth="1.5" />
      <path d="M7 10l2 2 4-4" stroke="#0F5E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  plus: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="3" width="14" height="14" rx="3" stroke="#0F5E3D" strokeWidth="1.5" />
      <path d="M7 10h6M10 7v6" stroke="#0F5E3D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function WhatVardent() {
  return (
    <section id="what" className="section-pad bg-vardent-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-20 items-start">
        {/* Left — prose */}
        <div className="reveal">
          <Eyebrow>{what.eyebrow}</Eyebrow>
          <h2
            className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
            style={{ fontSize: 'clamp(40px, 5vw, 58px)' }}
          >
            {what.headlineLine1}
            <br />
            <span className="text-vardent-g3">{what.headlineLine2}</span>
          </h2>
          <div>
            {what.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-[19px] leading-[1.8] text-vardent-ink3 mb-[18px] last:mb-0 [&_strong]:text-vardent-ink [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>

        {/* Right — feature cards */}
        <div className="flex flex-col gap-4">
          {what.cards.map((card) => (
            <div
              key={card.title}
              className="reveal bg-white border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
            >
              <div className="w-11 h-11 bg-vardent-tint rounded-[12px] flex items-center justify-center mb-[18px]">
                {icons[card.icon]}
              </div>
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">
                {card.title}
              </h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
