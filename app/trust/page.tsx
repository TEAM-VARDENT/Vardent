import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VardentTrust() {
  return (
    <>
      <Nav />
      <main>

        <section
          className="relative min-h-[70vh] flex flex-col justify-center bg-white overflow-hidden"
          style={{ padding: '156px max(28px, calc((100vw - 1240px) / 2)) 80px' }}
        >
          <div className="hero-orb-1" aria-hidden />
          <div className="hero-orb-2" aria-hidden />
          <div className="relative z-[1] max-w-[680px]">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">
              Civil and Social Organisation
            </p>
            <h1
              className="font-display font-extrabold leading-[1.06] tracking-[-0.03em] text-vardent-ink mb-7"
              style={{ fontSize: 'clamp(44px, 5.5vw, 66px)' }}
            >
              Protecting the rights of
              <br />
              <span className="text-vardent-g3">producers and consumers</span>
              <br />
              in sustainable commerce.
            </h1>
            <p className="font-body text-[18px] leading-[1.75] text-vardent-ink3 max-w-[520px] mb-12">
              Vardent Trust advocates, educates, and holds the sustainable commerce ecosystem accountable.
            </p>
            <div className="flex gap-[14px] flex-wrap">
              <Link
                href="#community"
                className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium"
              >
                Join the Community
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <section className="section-pad bg-vardent-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div className="reveal">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Producer</p>
              <h2
                className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
              >
                Doing everything right.
                <br />
                <span className="text-vardent-g3">Losing the market for it.</span>
              </h2>
              <p className="font-body text-[18px] leading-[1.8] text-vardent-ink3">
                Sustainable producers across Africa pay enormous costs to certify their practices. All absorbed before a single product reaches the shelf. Then that product competes with cheaper imported alternatives that carry claims nobody verified.
              </p>
            </div>
            <div className="reveal">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Consumer</p>
              <h2
                className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
              >
                Choosing to pay more.
                <br />
                <span className="text-vardent-g3">Deserving to know why.</span>
              </h2>
              <p className="font-body text-[18px] leading-[1.8] text-vardent-ink3">
                Sustainable consumers deserve to know that the premium they pay reflects independently verifiable reality. Greenwashing is a theft of trust from every consumer who chose to pay more because they believed the claim was true.
              </p>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="section-pad bg-white">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">What We Do</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Four pillars of
              <br />
              <span className="text-vardent-g3">sustainable accountability.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Producer Rights Advocacy</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">We document, publish, and advocate for the rights of genuine sustainable producers across African supply chains.</p>
            </div>
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Consumer Education and Protection</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">We build the domestic sustainable consumption market and educate communities about what sustainability claims mean.</p>
            </div>
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Ecosystem Accountability</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">We hold every actor in the sustainable commerce chain accountable through independently verified data and public research.</p>
            </div>
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Community Building</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">We build the community of producers, consumers, advocates, and founders who believe sustainability should mean something.</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-vardent-bg">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">Our Chapters</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Building Vardent Trust
              <br />
              <span className="text-vardent-g3">globally.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[900px] mx-auto">
            <div className="reveal rounded-[20px] px-6 py-[24px] border bg-vardent-tint border-vardent-g2">
              <p className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 text-vardent-g2">Founding Chapter</p>
              <h3 className="font-display text-[16px] font-bold text-vardent-ink leading-[1.3]">Vardent Trust Ghana</h3>
            </div>
            <div className="reveal rounded-[20px] px-6 py-[24px] border bg-white border-[rgba(15,94,61,0.10)]">
              <p className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 text-vardent-ink3">Coming 2026</p>
              <h3 className="font-display text-[16px] font-bold text-vardent-ink leading-[1.3]">Vardent Trust UK</h3>
            </div>
            <div className="reveal rounded-[20px] px-6 py-[24px] border bg-white border-[rgba(15,94,61,0.10)]">
              <p className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 text-vardent-ink3">Coming Soon</p>
              <h3 className="font-display text-[16px] font-bold text-vardent-ink leading-[1.3]">Vardent Trust Nigeria</h3>
            </div>
            <div className="reveal rounded-[20px] px-6 py-[24px] border bg-white border-[rgba(15,94,61,0.10)]">
              <p className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 text-vardent-ink3">Coming Soon</p>
              <h3 className="font-display text-[16px] font-bold text-vardent-ink leading-[1.3]">Vardent Trust Kenya</h3>
            </div>
          </div>
        </section>

        <section id="community" className="section-pad bg-white">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">Join the Community</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Three ways to
              <br />
              <span className="text-vardent-g3">get involved.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">For Producers</p>
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Register your business</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-6">Register your cooperative, farm, or sustainable business. Become part of a community that advocates for your rights.</p>
              <a href="mailto:deborahamobey@vardent.co?subject=Producer Registration" className="inline-flex items-center bg-vardent-g2 text-white no-underline px-6 py-[12px] rounded-[8px] font-body text-[14px] font-medium">
                Register as a Producer
              </a>
            </div>
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">For Consumers</p>
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Join the movement</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-6">Join the community of conscious consumers who demand independently verified sustainability claims.</p>
              <a href="mailto:deborahamobey@vardent.co?subject=Consumer Community" className="inline-flex items-center bg-vardent-g2 text-white no-underline px-6 py-[12px] rounded-[8px] font-body text-[14px] font-medium">
                Join as a Consumer
              </a>
            </div>
            <div className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">For Advocates</p>
              <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">Build with us</h3>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-6">Are you a sustainability professional, researcher, founder, or policymaker who shares our mission?</p>
              <a href="mailto:deborahamobey@vardent.co?subject=Advocate Network" className="inline-flex items-center bg-vardent-g2 text-white no-underline px-6 py-[12px] rounded-[8px] font-body text-[14px] font-medium">
                Join as an Advocate
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad bg-vardent-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
            <div className="reveal">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Vardent Brief</p>
              <h2
                className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
              >
                Weekly analysis on
                <br />
                <span className="text-vardent-g3">sustainable commerce accountability.</span>
              </h2>
              <p className="font-body text-[18px] leading-[1.8] text-vardent-ink3 mb-8">
                Published weekly. Read by ESG professionals across Europe, Africa, and Asia.
              </p>
              <a
                href="https://deboraanyawennaamobey.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium"
              >
                Read The Vardent Brief
              </a>
            </div>
            <div className="reveal bg-white border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">From the Brief</p>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] italic">
                Making sustainability mean something. Not as a communication exercise. As independently provable evidence.
              </p>
              <p className="font-body text-[14px] text-vardent-g2 font-medium mt-4">

              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white text-center">
          <div className="reveal max-w-[600px] mx-auto">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">The Platform</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
            >
              Trust is built here.
              <br />
              <span className="text-vardent-g3">Verified on the platform.</span>
            </h2>
            <p className="font-body text-[18px] leading-[1.75] text-vardent-ink3 mb-8">
              Vardent Trust is the civil and social organisation behind Vardent. The Trust builds the community. The platform verifies the claims.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)]"
            >
              Visit Vardent Ltd
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
