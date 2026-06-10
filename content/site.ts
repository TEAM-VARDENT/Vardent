/**
 * VARDENT — Content file
 *
 * This is the only file a non-technical editor needs to touch.
 * Change any text here, save the file, push to Git, and the
 * site updates automatically via Netlify.
 *
 * Do NOT edit indentation, colons, commas, or quotes — only
 * change the text values inside the quote marks.
 */
export const site = {
  // ─── SEO ──────────────────────────────────────────────────
  seo: {
    title:         'VARDENT — Verified Sustainable Commerce',
    description:   'Vardent independently verifies product-level sustainability claims — protecting producers who do the work and consumers who choose to pay for it.',
    ogTitle:       'VARDENT — Verified Sustainable Commerce',
    ogDescription: 'Vardent independently verifies product-level sustainability claims — protecting producers who do the work and consumers who choose to pay for it.',
    ogUrl:         'https://vardent.co',
    ogImage:       '/og-image.png',
  },
  // ─── NAVIGATION ────────────────────────────────────────────
  nav: {
    links: [
      { href: '/trust',    label: 'Vardent Trust' },
      { href: '/platform', label: 'Vardent Ltd'   },
      { href: '#faq',      label: 'FAQ'           },
    ],
    cta: { label: 'Join Us', href: 'https://forms.gle/a8LmyUx6r9ytFCNw9' },
  },
  // ─── HERO ──────────────────────────────────────────────────
  hero: {
    kicker:             'Verified Sustainable Commerce',
    headlineLine1:      'Greenwashing is',
    headlineLine2:      'structural.',
    headlineLine3:      'So is our solution.',
    headlineItalicLine: 'structural.',
    description:        'Most sustainability claims have never been independently verified. Sustainable producers pay the cost of doing things right — and lose their own market to cheaper unverified alternatives. Vardent is building the infrastructure to change that.',
    primaryButton:      { label: 'Vardent Trust', href: '/trust'    },
    secondaryButton:    { label: 'Vardent Ltd',   href: '/platform' },
  },
  // ─── SCORE CARD (hero right panel) ─────────────────────────
  scoreCard: {
    scoreLabel:   'Sustainability Score',
    score:        94,
    scoreMax:     100,
    badge:        'Verified',
    dimensions: [
      { name: 'Carbon Footprint',   score: 92 },
      { name: 'Ethical Labour',     score: 96 },
      { name: 'Materials Sourcing', score: 89 },
      { name: 'Packaging Impact',   score: 97 },
      { name: 'End-of-Life Design', score: 91 },
    ],
    transparencyIdLabel: 'Transparency ID',
    transparencyId:      '0xAB3F…7D2C',
    status:              'On-chain · Verified',
  },
  // ─── STATS BAND ────────────────────────────────────────────
  stats: [
    {
      number: '42%',
      label:  'of green claims are false or misleading',
      source: 'EU Commission, 2021',
    },
    {
      number: '$150B+',
      label:  'global sustainable retail market',
      source: 'Market analysis, 2024',
    },
    {
      number: '2024',
      label:  'stronger claim regulations emerging globally',
      source: 'EU Green Claims Directive',
    },
  ],
  // ─── WHAT VARDENT IS ───────────────────────────────────────
  what: {
    eyebrow:            'Our Mission',
    headlineLine1:      'Making sustainability',
    headlineLine2:      'mean something.',
    headlineItalicLine: 'mean something.',
    paragraphs: [
      'Greenwashing is not just a marketing problem. It is a structural failure. The brand writes the claim. The brand pays for the certification. The brand controls what gets disclosed. At every step the organisation with the most commercial interest in a positive result controls the process.',
      'Meanwhile sustainable producers across Africa pay enormous costs to certify their practices — and then compete on local shelves against cheaper imported alternatives that carried none of those costs and verified none of those claims. The producer who did everything right loses the sale. The consumer who wants to choose better has no reliable signal to act on.',
      'Vardent exists to break that structure. Independent verification at product level. Producer rights protected at origin. Consumer trust built on evidence — not promises.',
    ],
    cards: [
      {
        title: 'Independent Verification',
        body:  'Every claim assessed by an accredited third party. Not self-reported. Not approximate. Evidence is the only currency.',
        icon:  'star' as const,
      },
      {
        title: 'Producer Rights',
        body:  'Sustainable producers deserve a market that independently confirms their investment is real — and rewards them for it.',
        icon:  'check' as const,
      },
      {
        title: 'Consumer Protection',
        body:  'Every consumer who pays a sustainability premium deserves independently verifiable proof that the claim is true.',
        icon:  'plus' as const,
      },
    ],
  },
  // ─── WHY IT EXISTS ─────────────────────────────────────────
  why: {
    eyebrow:            'Why It Exists',
    headlineLine1:      'Two problems.',
    headlineLine2:      'One solution.',
    headlineItalicLine: 'One solution.',
    lead: 'The producer pays the cost. The consumer pays the premium. Neither gets what they deserve. Vardent is the infrastructure that changes that.',
    cards: [
      {
        number: '01',
        title:  'Producers Lose Their Market',
        body:   'Sustainable producers pay certification costs, meet higher standards, and price accordingly. Then they compete on local shelves against cheaper unverified alternatives. The market punishes them for doing things right.',
      },
      {
        number: '02',
        title:  'Consumers Cannot Tell the Difference',
        body:   'A consumer choosing a sustainable product has no reliable way to know if the claim is true. Without independently verifiable evidence, trust has no foundation.',
      },
      {
        number: '03',
        title:  'Markets Need Better Infrastructure',
        body:   'Regulators, investors, and buyers are demanding verified sustainability data. The infrastructure to deliver it at origin level in African supply chains has not existed. Until now.',
      },
    ],
  },
  // ─── EARLY ACCESS ──────────────────────────────────────────
  earlyAccess: {
    eyebrow:       'Early Access',
    headlineLine1: 'Vardent is coming.',
    headlineLine2: 'Be first.',
    lead:          'A serious platform is being built. Join early and be among the first to know when we launch.',
    brandForm: {
      title:    'For Brands & Businesses',
      subtitle: 'Register early interest for brand verification.',
      fields: {
        company:  { label: 'Brand / Company Name', placeholder: 'Your company name' },
        name:     { label: 'Your Name',            placeholder: 'Full name'         },
        email:    { label: 'Email Address',        placeholder: 'you@company.com'   },
        category: { label: 'Product Category'                                        },
        country:  { label: 'Country',              placeholder: 'Country'           },
      },
      categoryOptions: [
        'Food & Beverage',
        'Fashion & Apparel',
        'Beauty & Personal Care',
        'Home & Living',
        'Electronics',
        'Agriculture',
        'Other',
      ],
      submitLabel:    'Register Brand Interest',
      successTitle:   'Interest Registered',
      successMessage: 'We will be in touch when we are ready for brands.',
    },
    consumerForm: {
      title:    'For Consumers',
      subtitle: 'Join the community for launch updates and early access.',
      fields: {
        name:    { label: 'Your Name',     placeholder: 'Full name'      },
        email:   { label: 'Email Address', placeholder: 'you@email.com'  },
        country: { label: 'Country',       placeholder: 'Country'        },
      },
      submitLabel:    'Join the Community',
      successTitle:   'Welcome to Vardent.',
      successMessage: 'We will notify you first when we launch.',
    },
  },
  // ─── FAQ ───────────────────────────────────────────────────
  faq: {
    eyebrow:  'FAQ',
    headline: 'What people ask most',
    subtext:  '',
    items: [
      {
        question: 'What is Vardent?',
        answer:   'Vardent is a verified sustainable commerce platform being built in Accra, Ghana. It independently audits sustainability claims at product level and advocates for the rights of producers and consumers across Africa and beyond.',
      },
      {
        question: 'What is the difference between Vardent Trust and Vardent Ltd?',
        answer:   'Vardent Trust is our civil and social organisation — advocating for producer rights, consumer protection, and sustainable consumption across Africa. Vardent Ltd is our commercial verification platform — independently auditing sustainability claims at product level and anchoring results permanently on blockchain.',
      },
      {
        question: 'Is Vardent live yet?',
        answer:   'Our pre-launch verification services are available now at vardent.co/services. The full platform is in development. Join the community to be first to know when we launch.',
      },
      {
        question: 'Who is Vardent for?',
        answer:   'Vardent serves sustainable brands seeking independent verification, EU buyers needing verified African supply chain data for CSRD and EUDR compliance, and sustainability consultants who need independent third-party verification for their clients.',
      },
      {
        question: 'Can brands register interest now?',
        answer:   'Yes. Brands can register early interest using the form on this page. Pre-launch verification services are also available now — visit vardent.co/platform to learn more.',
      },
      {
        question: 'How is Vardent different from B Corp or Fair Trade?',
        answer:   'B Corp and Fair Trade certify organisations. Vardent verifies individual products at SKU level. Every Vardent verification is conducted by an independent accredited auditor — not by Vardent and not by the brand — and anchored permanently on blockchain.',
      },
      {
        question: 'Why is Vardent built from Ghana?',
        answer:   'Most verification infrastructure operating in African supply chains was designed outside Africa. Vardent is embedded at origin — verifying where the evidence needs to be generated, not approximating it from the reporting layer downstream.',
      },
      {
        question: 'When will Vardent launch?',
        answer:   'Launch updates will be shared first with community members and waitlist registrants. Join us to be among the first to know.',
      },
      {
        question: 'Where will Vardent be available?',
        answer:   'Vardent is being built for African supply chains supplying global markets — beginning with Ghana and expanding across West Africa and beyond. Pre-launch services are available globally now.',
      },
      {
        question: 'Is Vardent only for large brands?',
        answer:   'No. Vardent is designed for brands of genuine commitment — not brands of a certain size. If your sustainability effort is real, Vardent is built to independently confirm it.',
      },
    ],
  },
  // ─── FOOTER ────────────────────────────────────────────────
  footer: {
    wordmark:  { prefix: 'VARD', highlight: 'E', suffix: 'NT' },
    tagline:   'Verified Sustainable Commerce',
    nav: [
      { label: 'Privacy',       href: '#',                                                      external: false },
      { label: 'Contact',       href: 'mailto:deborahamobey@vardent.co',                        external: false },
      { label: 'LinkedIn',      href: 'https://www.linkedin.com/company/vardent/?viewAsMember=true', external: true },
      { label: 'Vardent Trust', href: '/trust',                                                 external: false },
      { label: 'Vardent Ltd',   href: '/platform',                                              external: false },
    ],
    copyright: '© Vardent 2026. All rights reserved.',
    mission:   'Making sustainability mean something — for producers and consumers.',
  },
};
