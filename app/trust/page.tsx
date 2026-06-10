import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VardentTrust() {
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
              Vardent Trust advocates, educates, and holds the sustainable commerce ecosystem accountable — so that sustainability means something for the people who produce it and the people who choose it.
            </p>
            <div className="flex gap-[14px] flex-wrap">
              <Link
                href="#community"
                className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium tracking-[0.01em] shadow-[0_4px_16px_rgba(15,94,61,0.28)] transition-all duration-200 hover:bg-vardent-g3 hover:-translate-y-0.5"
              >
                Join the Community
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)] transition-all duration-200 hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="section-pad bg-vardent-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-20 items-start">
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
                Sustainable producers across Africa pay enormous costs to certify their practices — certification fees, audits, compliance documentation, higher production standards. All absorbed before a single product reaches the shelf. Then that product competes with cheaper imported alternatives that absorbed none of those costs and carry claims nobody verified.
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
                Sustainable consumers deserve to know that the premium they pay reflects independently verifiable reality — not a story a brand tells about itself. Greenwashing is not just a regulatory problem. It is a theft of trust from every consumer who chose to pay more because they believed the claim was true.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
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
            {[
              {
                title: 'Producer Rights Advocacy',
                body: 'We document, publish, and advocate for the rights of genuine sustainable producers — ensuring their investment is independently recognised and their voice is central to the systems governing their supply chains.',
              },
              {
                title: 'Consumer Education and Protection',
                body: 'We build the domestic sustainable consumption market — educating communities about what sustainability claims mean, how to identify verified products, and why buying genuinely sustainable produce matters for the entire value chain.',
              },
              {
                title: 'Ecosystem Accountability',
                body: 'We hold every actor in the sustainable commerce chain accountable — brands, certification bodies, buyers, retailers, and governments — through independently verified data and publicly available research.',
              },
              {
                title: 'Community Building',
                body: 'We build the community of producers, consumers, advocates, and founders who believe sustainability should mean something — not as a communication exercise but as independently provable evidence.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
              >
                <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">
                  {card.title}
                </h3>
                <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTERS */}
        <section className="section-pad bg-vardent-bg">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">Our Chapters</p>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.025em] text-vardent-ink mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
            >
              Building Vardent Trust
              <br />
              <span className="text-vardent-g3">globally — one chapter at a time.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[900px] mx-auto">
            {[
              { chapter: 'Vardent Trust Ghana', status: 'Founding Chapter', active: true },
              { chapter: 'Vardent Trust UK', status: 'Coming 2026', active: false },
              { chapter: 'Vardent Trust Nigeria', status: 'Coming Soon', active: false },
              { chapter: 'Vardent Trust Kenya', status: 'Coming Soon', active: false },
            ].map((item) => (
              <div
                key={item.chapter}
                className={`reveal rounded-[20px] px-6 py-[24px] border ${item.active ? 'bg-vardent-tint border-vardent-g2' : 'bg-white border-[rgba(15,94,61,0.10)]'}`}
              >
                <p className={`font-mono text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 ${item.active ? 'text-vardent-g2' : 'text-vardent-ink3'}`}>
                  {item.status}
                </p>
                <h3 className="font-display text-[16px] font-bold text-vardent-ink leading-[1.3]">
                  {item.chapter}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNITY */}
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
            {[
              {
                label: 'For Producers',
                title: 'Register your business',
                body: 'Register your cooperative, farm, or sustainable business. Become part of a community that advocates for your rights and connects you to verified markets.',
                cta: 'Register as a Producer',
                href: 'mailto:deborahamobey@vardent.co?subject=Producer Registration',
              },
              {
                label: 'For Consumers',
                title: 'Join the movement',
                body: 'Join the community of conscious consumers who demand independently verified sustainability claims. Learn how to identify genuinely sustainable products.',
                cta: 'Join as a Consumer',
                href: 'mailto:deborahamobey@vardent.co?subject=Consumer Community',
              },
              {
                label: 'For Advocates',
                title: 'Build with us',
                body: 'Are you a sustainability professional, researcher, founder, or policymaker who shares our mission? Join the Vardent Trust network.',
                cta: 'Join as an Advocate',
                href: 'mailto:deborahamobey@vardent.co?subject=Advocate Network',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="reveal bg-vardent-bg border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]"
              >
                <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-3">
                  {item.label}
                </p>
                <h3 className="font-display text-[18px] font-bold text-vardent-ink mb-[10px] leading-[1.3]">
                  {item.title}
                </h3>
                <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] mb-6">
                  {item.body}
                </p>
                
                  href={item.href}
                  className="inline-flex items-center bg-vardent-g2 text-white no-underline px-6 py-[12px] rounded-[8px] font-body text-[14px] font-medium shadow-[0_4px_16px_rgba(15,94,61,0.28)] transition-all duration-200 hover:bg-vardent-g3 hover:-translate-y-0.5"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* THE VARDENT BRIEF */}
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
                Published weekly. Read by ESG professionals, sustainability practitioners, and supply chain leaders across Europe, Africa, and Asia.
              </p>
              
                href="https://vardentbrief.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-vardent-g2 text-white no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium tracking-[0.01em] shadow-[0_4px_16px_rgba(15,94,61,0.28)] transition-all duration-200 hover:bg-vardent-g3 hover:-translate-y-0.5"
              >
                Read The Vardent Brief →
              </a>
            </div>
            <div className="reveal bg-white border border-[rgba(15,94,61,0.10)] rounded-[20px] px-8 py-[30px]">
              <p className="font-mono text-[11px] font-semibold text-vardent-g2 tracking-[0.12em] uppercase mb-4">
                Latest from the Brief
              </p>
              <p className="font-body text-[17px] text-vardent-ink3 leading-[1.75] italic">
                &ldquo;Making sustainability mean something — not as a communication exercise, but as independently provable evidence.&rdquo;
              </p>
              <p className="font-body text-[14px] text-vardent-g2 font-medium mt-4">
                — Debora Anyawenna Amobey, Founder
              </p>
            </div>
          </div>
        </section>

        {/* LINK TO VARDENT LTD */}
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
              Vardent Trust is the civil and social organisation behind Vardent — the product-level sustainability verification platform. The Trust builds the community. The platform verifies the claims.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center bg-transparent text-vardent-ink2 no-underline px-8 py-[15px] rounded-[8px] font-body text-[15px] font-medium border border-[rgba(15,94,61,0.10)] transition-all duration-200 hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint"
            >
              Visit Vardent Ltd →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
