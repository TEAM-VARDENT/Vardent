import Eyebrow from './ui/Eyebrow';
import Accordion from './ui/Accordion';
import { site } from '@/content/site';

const { faq } = site;

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-[100px] md:gap-[100px] items-start">
        {/* Left — label */}
        <div className="reveal">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2
            className="font-display font-bold text-vardent-ink mb-[18px] leading-[1.1] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(36px, 4.2vw, 50px)' }}
          >
            {faq.headline}
          </h2>
          {faq.subtext && (
            <p className="font-body text-[18px] text-vardent-ink3 leading-[1.7]">{faq.subtext}</p>
          )}
        </div>

        {/* Right — accordion */}
        <div className="reveal">
          <Accordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
