import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VardentPlatform() {
  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section
          className="relative min-h-[70vh] flex flex-col justify-center bg-white overflow-hidden"
          style={{ padding: '156px max(28px, calc((100vw - 1240px) / 2)) 80px' }}
        >
          <div className="hero-orb-1" aria-hidden />
          <div className="hero-orb-2" aria-hidden />
          <div className="relative z-[1] max-w-[680px]">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">
              Verification Platform
            </p>
            <h1
              className="font-display font-extrabold leading-[1.06] tracking-[-0.03em] text-vardent-ink mb-7"
              style={{ fontSize: 'clamp(44px, 5.5vw, 66px)' }}
            >
              Every product.
              <br />
              <span className="text-vardent-g3">Independently verified.</span>
              <br />
              Permanently anchored.
            </h1>
            <p className="font-body text-[18px] leading-[1.75] text-vardent-ink3 max-w-[480px] mb-12">
              Vardent independently audits sustainability claims at product level. Scored across five dimensions. Anchored permanently on blockchain. Nothing self-reported.
            </p>
            <div className="flex gap-[14px] flex-wrap">
              <Link
                href="/services"
                className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium tracking-[0.01em] shadow-[0_4px_16px_rgba(15,94,61,0.28)] transition-all duration-200 hover:bg-vardent-g3 hover:-translate-y-0.5"
              >
                View Services
              </Link>
              <a
                href="https://calendly.com/amobeydeborah2000/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)] transition-all duration-200 hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint"
              >
                Book a free call
              </a>
            </div>
          </div>
        </section>

        {/* PROBLEM AND SOLUTION */}
        <section className="section-pad bg-vardent-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-20 items-start">
            <div className="reveal">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Problem</p>
              <h2
                className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
              >
                The claim is made.
                <br />
                <span className="text-vardent-g3">Nobody checks it.</span>
              </h2>
              <p className="font-body text-[18px] leading-[1.8] text-vardent-ink3">
                42% of online green claims are false or misleading. The brand writes the claim, pays for the certification, and controls what gets disclosed. That is not verification. That is a story a brand tells about itself.
              </p>
            </div>
            <div className="reveal">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Solution</p>
              <h2
                className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
              >
                Independent verification.
                <br />
                <span className="text-vardent-g3">Permanent record.</span>
              </h2>
              <p className="font-body text-[18px] leading-[1.8] text-vardent-ink3">
                Every Vardent product is independently audited by Bureau Veritas, SGS, or Intertek. Scored across five dimensions. Results anchored permanently on blockchain. Nobody can revise a record when it becomes inconvenient.
              </p>
            </div>
          </div>
        </section>

        {/* FIVE DIMENSIONS */}
        <section className="section-pad bg-white">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Framework</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Five dimensions.
              <br />
              <span className="text-vardent-g3">One verified score.</span>
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-vardent-ink3 max-w-[480px] mx-auto">
              Pass all five or none. You cannot score perfectly on four and fail on one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Carbon Footprint', body: 'Independently verified Scope 3 primary data — from farm to shelf.' },
              { num: '02', title: 'Ethical Labour', body: 'Independently audited labour practices at Tier 2 and Tier 3 supply chain level.' },
              { num: '03', title: 'Materials Sourcing', body: 'Traceable to origin. Deforestation-free. Plot-level evidence required.' },
              { num: '04', title: 'Packaging Impact', body: 'Independently verified — not self-declared. Recyclable means recyclable.' },
              { num: '05', title: 'End-of-Life Design', body: 'Designed to be recycled, composted, or taken back. Evidence required.' },
              { num: '', title: 'Pass all five or none.', body: 'A product that fails one dimension does not receive the Vardent badge. The standard is complete or it is nothing.' },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`reveal rounded-[20px] px-8 py-[30px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md ${i === 5 ? 'bg-vardent-tint border border-vardent-g2' : 'bg-vardent-bg border border-[rgba(15,94,61,0.10)] hover:border-[rgba(15,94,61,0.2)]'}`}
              >
                {card.num && <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">Dimension {card.num}</p>}
                <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">{card.title}</h3>
                <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-pad bg-vardent-bg">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">How It Works</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Seven steps to
              <br />
              <span className="text-vardent-g3">a verified product.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[860px] mx-auto">
            {[
              { step: '01', title: 'Brand applies', body: 'A brand applies with a specific sustainability claim.' },
              { step: '02', title: 'Pre-screening', body: 'Vardent assesses evidence readiness before the audit begins.' },
              { step: '03', title: 'Independent audit', body: 'An accredited auditor independently verifies the supply chain.' },
              { step: '04', title: 'Five dimension scoring', body: 'The product is scored. Every dimension must pass.' },
              { step: '05', title: 'Claim assessment', body: 'Vardent confirms whether the claim is supported by the evidence.' },
              { step: '06', title: 'Blockchain anchoring', body: 'The result is permanently anchored. Publicly visible. Irrevocable.' },
              { step: '07', title: 'Listed or rejected', body: 'Verified products list on the marketplace. Rejected ones go public.' },
            ].map((item) => (
              <div
                key={item.step}
                className="reveal bg-white border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[20px] flex gap-6 items-start"
              >
                <p className="font-mono text-[20px] font-bold text-vardent-g2 flex-shrink-0">{item.step}</p>
                <div>
                  <h3 className="font-display text-[16px] font-bold text-vardent-ink mb-[4px] leading-[1.3]">{item.title}</h3>
                  <p className="font-body text-[15px] text-vardent-ink3 leading-[1.7]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-pad bg-white">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">Pre-Launch Services</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Available now.
              <br />
              <span className="text-vardent-g3">Before the platform launches.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sustainability Claim Assessment',
                body: 'Independent assessment of one product against the Vardent framework. What evidence exists, what is missing, and whether your claim survives scrutiny.',
                audience: 'For brands preparing for EU Green Claims Directive compliance.',
              },
              {
                title: 'CSRD Supply Chain Readiness',
                body: 'Gap assessment of your African supplier data readiness against ESRS requirements. Structured report with a clear remediation plan.',
                audience: 'For EU buyers sourcing from African supply chains.',
              },
              {
                title: 'EUDR Compliance Gap Report',
                body: 'Assessment of origin evidence against EUDR requirements. Plot-level geolocation, chain of custody, deforestation-free status.',
                audience: 'For Ghanaian exporters and EU buyers sourcing from Ghana.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
              >
                <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">{card.title}</h3>
                <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-4">{card.body}</p>
                <p className="font-mono text-[12px] font-semibold text-vardent-g2 tracking-[0.08em]">{card.audience}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link
              href="/services"
              className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium tracking-[0.01em] shadow-[0_4px_16px_rgba(15,94,61,0.28)] transition-all duration-200 hover:bg-vardent-g3 hover:-translate-y-0.5"
            >
              View all services
            </Link>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="section-pad bg-vardent-bg">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">Who We Serve</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Three types of
              <br />
              <span className="text-vardent-g3">organisations.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Sustainable Brands',
                title: 'Verify your claims.',
                body: 'Brands in Ghana, Nigeria, Kenya, and South Africa. Get independently verified. Get the badge. Get market access.',
              },
              {
                label: 'EU Buyers',
                title: 'Verify your supply chain.',
                body: 'European companies sourcing from Africa. Verified Scope 3 data for CSRD. Deforestation-free evidence for EUDR.',
              },
              {
                label: 'Sustainability Consultants',
                title: 'Verify for your clients.',
                body: 'ESG consultants who need independent third-party verification to complete their service offering.',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="reveal bg-white border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
              >
                <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">{card.label}</p>
                <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">{card.title}</h3>
                <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-white text-center">
          <div className="reveal max-w-[600px] mx-auto">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">Get Started</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
            >
              Ready to verify
              <br />
              <span className="text-vardent-g3">your sustainability claims?</span>
            </h2>
            <p className="font-body text-[18px] leading-[1.75] text-vardent-ink3 mb-8">
              Book a free 20-minute conversation and we will work out which service fits your situation.
            </p>
            <div className="flex gap-[14px] flex-wrap justify-center mb-10">
              <a
                href="https://calendly.com/amobeydeborah2000/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium tracking-[0.01em] shadow-[0_4px_16px_rgba(15,94,61,0.28)] transition-all duration-200 hover:bg-vardent-g3 hover:-translate-y-0.5"
              >
                Book a free call
              </a>
              <a
                href="https://tally.so/r/5BMNdM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)] transition-all duration-200 hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint"
              >
                Tell us about your claim
              </a>
            </div>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="https://www.linkedin.com/company/vardent/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[14px] font-medium text-vardent-g2 no-underline hover:text-vardent-g3 transition-colors duration-200"
              >
                Follow Vardent on LinkedIn →
              </a>
              <a
                href="https://www.linkedin.com/in/deborah-anyawenna-amobey-vardent"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[14px] font-medium text-vardent-g2 no-underline hover:text-vardent-g3 transition-colors duration-200"
              >
                Founder on LinkedIn →
              </a>
            </div>
          </div>
        </section>

        {/* LINK TO VARDENT TRUST */}
        <section className="section-pad bg-vardent-bg text-center">
          <div className="reveal max-w-[560px] mx-auto">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Mission</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
            >
              Verification is the tool.
              <br />
              <span className="text-vardent-g3">Trust is the mission.</span>
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-vardent-ink3 mb-8">
              Vardent Trust is the civil and social organisation behind Vardent — advocating for producer rights and consumer protection across Africa and beyond.
            </p>
            <Link
              href="/trust"
              className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)] transition-all duration-200 hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint"
            >
              Visit Vardent Trust
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
