import Link from 'next/link';
import ScoreCard from './ScoreCard';
import Eyebrow from './ui/Eyebrow';
import { site } from '@/content/site';

const { hero } = site;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
      style={{ padding: '156px max(28px, calc((100vw - 1240px) / 2)) 80px' }}
    >
      <div className="hero-orb-1" aria-hidden />
      <div className="hero-orb-2" aria-hidden />

      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-20 items-center">
        {/* Left — copy */}
        <div>
          <div className="anim-slide-up-1">
            <Eyebrow>{hero.kicker}</Eyebrow>
          </div>

          <h1
            className="anim-slide-up-2 font-display font-extrabold leading-[1.06] tracking-[-0.03em] text-vardent-ink mb-7"
            style={{ fontSize: 'clamp(44px, 5.5vw, 66px)' }}
          >
            {hero.headlineLine1}
            <br />
            <span className="text-vardent-g3">{hero.headlineLine2}</span>
            <br />
            {hero.headlineLine3}
          </h1>

          <p className="anim-slide-up-3 font-body text-[18px] leading-[1.75] text-vardent-ink3 max-w-[480px] mb-12">
            {hero.description}
          </p>

          <div className="anim-slide-up-4 flex gap-[14px] flex-wrap">
            <Link
              href={hero.primaryButton.href}
              className={[
                'inline-flex items-center',
                'bg-vardent-g2 text-white no-underline',
                'px-8 py-[15px] rounded-[8px]',
                'font-body text-[15px] font-medium tracking-[0.01em]',
                'shadow-[0_4px_16px_rgba(15,94,61,0.28)]',
                'transition-all duration-200',
                'hover:bg-vardent-g3 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,94,61,0.36)]',
              ].join(' ')}
            >
              {hero.primaryButton.label}
            </Link>
            <Link
              href={hero.secondaryButton.href}
              className={[
                'inline-flex items-center',
                'bg-transparent text-vardent-ink2 no-underline',
                'px-8 py-[15px] rounded-[8px]',
                'font-body text-[15px] font-medium',
                'border border-[rgba(15,94,61,0.10)]',
                'transition-all duration-200',
                'hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint',
              ].join(' ')}
            >
              {hero.secondaryButton.label}
            </Link>
          </div>
        </div>

        {/* Right — score card (hidden on mobile) */}
        <div className="hidden lg:block anim-slide-left">
          <ScoreCard />
        </div>
      </div>
    </section>
  );
}
