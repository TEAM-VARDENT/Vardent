import Link from 'next/link'
import Eyebrow from './ui/Eyebrow'

export default function Gateway() {
  return (
    <section className="section-pad bg-white border-b border-[rgba(15,94,61,0.06)]">
      <div className="text-center mb-16 reveal">
        <Eyebrow>Two entities. One mission.</Eyebrow>
        <h2
          className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
          style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
        >
          Making sustainability
          <br />
          <span className="text-vardent-g3">mean something.</span>
        </h2>
        <p className="font-body text-[18px] leading-[1.75] text-vardent-ink3 max-w-[520px] mx-auto">
          For the producers who grow it. For the consumers who choose it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">

        {/* Vardent Trust */}
        <Link
          href="/trust"
          className="reveal group bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[36px] no-underline transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
        >
          <div className="w-11 h-11 bg-vardent-tint rounded-[12px] flex items-center justify-center mb-[18px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M10 2L12.5 7.5L18 8.25L14 12L15 17.5L10 14.75L5 17.5L6 12L2 8.25L7.5 7.5L10 2Z"
                stroke="#0F5E3D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">
            Civil and Social Organisation
          </p>
          <h3 className="font-display text-[22px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">
            Vardent Trust
          </h3>
          <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-6">
            Advocating for the rights of sustainable producers and consumers. Building the community and trust infrastructure that sustainable commerce requires.
          </p>
          <span className="font-body text-[15px] font-medium text-vardent-g2 group-hover:text-vardent-g3 transition-colors duration-200">
            Learn more →
          </span>
        </Link>

        {/* Vardent Ltd */}
        <Link
          href="/platform"
          className="reveal group bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[36px] no-underline transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
        >
          <div className="w-11 h-11 bg-vardent-tint rounded-[12px] flex items-center justify-center mb-[18px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <circle cx="10" cy="10" r="7" stroke="#0F5E3D" strokeWidth="1.5" />
              <path d="M7 10l2 2 4-4" stroke="#0F5E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">
            Verification Platform
          </p>
          <h3 className="font-display text-[22px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">
            Vardent Ltd
          </h3>
          <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-6">
            Independent product-level sustainability verification. Every claim audited by an accredited third party. Every result anchored permanently on blockchain.
          </p>
          <span className="font-body text-[15px] font-medium text-vardent-g2 group-hover:text-vardent-g3 transition-colors duration-200">
            Learn more →
          </span>
        </Link>

      </div>
    </section>
  )
}
