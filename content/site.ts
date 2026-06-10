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
    title:         'VARDENT — Proof Over Promises',
    description:   'VARDENT is a verified sustainable commerce platform being built to make sustainability claims credible, transparent, and independently verifiable.',
    ogTitle:       'VARDENT — Proof Over Promises',
    ogDescription: 'VARDENT is a verified sustainable commerce platform being built to make sustainability claims credible, transparent, and independently verifiable.',
    ogUrl:         'https://vardent.co',
    ogImage:       '/og-image.png',
  },

  // ─── NAVIGATION ────────────────────────────────────────────
  nav: {
    links: [
  { href: '/trust', label: 'Vardent Trust' },
  { href: '/platform', label: 'Vardent Ltd' },
  { href: '#faq', label: 'FAQ' },
],
    
    cta: { label: 'Join Us', href: 'https://forms.gle/a8LmyUx6r9ytFCNw9' },
  },

  // ─── HERO ──────────────────────────────────────────────────
  hero: {
    kicker:          'Proof Over Promises',
    headlineLine1:   'Sustainability.',
    headlineLine2:   'Verified.',
    headlineLine3:   'Not just claimed.',
    headlineItalicLine: 'Verified.',
    description:     'VARDENT is a verified sustainable commerce platform being built to create greater trust in sustainability claims. Claims need evidence. We are building the infrastructure to provide it.',
    primaryButton:   { label: 'Join the Waitlist', href: '#access' },
    secondaryButton: { label: 'Learn More',        href: '#what'   },
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
    eyebrow:          'What Vardent Is',
    headlineLine1:    'Not a label.',
    headlineLine2:    'Infrastructure.',
    headlineItalicLine: 'Infrastructure.',
    paragraphs: [
      'VARDENT is not an eco-shop. It is not a badge.',
      'It is a new trust layer for sustainable commerce, built to help consumers make <strong>more confident choices</strong> and help honest brands stand out.',
      'When sustainability claims are difficult to verify, everyone loses. Except the brands making empty promises. VARDENT exists to change that.',
    ],
    cards: [
      {
        title: 'Independent Standards',
        body:  'Every claim assessed against a defined standard. Not self-reported, not approximate. Evidence is the only currency.',
        icon:  'star' as const,
      },
      {
        title: 'Transparent Trust',
        body:  'Results that are readable, open to scrutiny, and accessible. Credibility requires visibility. Nothing is hidden.',
        icon:  'check' as const,
      },
      {
        title: 'Meaningful Recognition',
        body:  'Brands doing the real work deserve a market that can tell the difference. VARDENT makes that distinction clear.',
        icon:  'plus' as const,
      },
    ],
  },

  // ─── WHY IT EXISTS ─────────────────────────────────────────
  why: {
    eyebrow:           'Why It Exists',
    headlineLine1:     'Trust in sustainability needs',
    headlineLine2:     'a better standard.',
    headlineItalicLine: 'better standard.',
    lead: 'When claims are difficult to verify, consumers lose confidence, honest brands lose visibility, and markets become noisy. VARDENT exists to help solve that problem.',
    cards: [
      {
        number: '01',
        title:  'Consumers Need Confidence',
        body:   'Purchasing decisions based on sustainability claims require trust. Without verification, that trust has no foundation. We are building the foundation.',
      },
      {
        number: '02',
        title:  'Honest Brands Need Recognition',
        body:   'Brands investing in real sustainability are competing against claims they cannot distinguish themselves from. That is a market failure. VARDENT fixes the signal.',
      },
      {
        number: '03',
        title:  'Markets Need Better Signals',
        body:   'Regulators, investors, and consumers are demanding greater accountability. The infrastructure to deliver it has not existed. Until now.',
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
      subtitle: 'Join the waitlist for launch updates and early access.',
      fields: {
        name:    { label: 'Your Name',     placeholder: 'Full name'      },
        email:   { label: 'Email Address', placeholder: 'you@email.com'  },
        country: { label: 'Country',       placeholder: 'Country'        },
      },
      submitLabel:    'Join the Waitlist',
      successTitle:   'You are on the list.',
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
        question: 'What is VARDENT?',
        answer:   'VARDENT is a platform being built to increase trust in sustainability claims. We are creating infrastructure that helps consumers make confident choices and helps brands that invest in real sustainability to be clearly recognised for it.',
      },
      {
        question: 'Is VARDENT live yet?',
        answer:   'Not yet. We are currently in development and preparing for launch. Joining the waitlist ensures you will hear from us first when we are ready.',
      },
      {
        question: 'Who is VARDENT for?',
        answer:   'VARDENT is designed for consumers seeking confidence in their purchasing decisions, and for brands genuinely committed to credible sustainability. If you value evidence over assertion, VARDENT is built for you.',
      },
      {
        question: 'Can brands register interest now?',
        answer:   'Yes. Brands can register their interest today using the form on this page. We will reach out to brand partners ahead of our public launch.',
      },
      {
        question: 'Does VARDENT sell products?',
        answer:   'No. VARDENT is not a retail platform. Our focus is the trust infrastructure: the layer that makes sustainability claims credible and verifiable. We are not a marketplace; we are what makes marketplaces trustworthy.',
      },
      {
        question: 'How is VARDENT different?',
        answer:   "Our focus is on bringing greater trust, clarity, and transparency to sustainability claims. We are building infrastructure designed for the rigour and accountability that today’s market and today’s regulations demand.",
      },
      {
        question: 'When will VARDENT launch?',
        answer:   'Launch updates will be shared first with early supporters and waitlist members. Join the list to be among the first to know.',
      },
      {
        question: 'Where will VARDENT be available?',
        answer:   'We are building with broad accessibility in mind. The problem of greenwashing is global, and our ambition reflects that. More details will be shared closer to launch.',
      },
      {
        question: 'How can I stay updated?',
        answer:   'Join the waitlist using the form above, or follow VARDENT updates on LinkedIn. Waitlist members are always the first to receive news and early access opportunities.',
      },
      {
        question: 'Is VARDENT only for large brands?',
        answer:   'No. VARDENT is designed for brands of genuine commitment, not just brands of a certain size. If your sustainability effort is real, VARDENT is being built to reflect that, regardless of scale.',
      },
    ],
  },

  // ─── FOOTER ────────────────────────────────────────────────
  footer: {
    wordmark:  { prefix: 'VARD', highlight: 'E', suffix: 'NT' },
    tagline:   'Proof Over Promises',
    nav: [
      { label: 'Privacy',  href: '#',                                      external: false },
      { label: 'Contact',  href: 'mailto:amobeydeborah2000@gmail.com',     external: false },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/vardent',   external: true  },
    ],
    copyright: '© Vardent 2026. All rights reserved.',
    mission:   'Building the future of trusted sustainable commerce.',
  },
};
