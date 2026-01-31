// Offer Configuration for all 6 landing pages
// Each offer has identical UI structure, only copy/links/price differ

export interface OfferConfig {
  letter: string
  route: string
  stripeLink: string
  price: string
  priceValue: number

  // Hero
  badge: string
  headline: string
  headlineHighlight: string
  subheadline: string
  heroCta: string

  // Problem Section
  problemTitle: string
  problemTitleHighlight: string
  problemIntro: string[]
  problemPoints: string[]
  problemData: { label: string; value: string }[]
  problemConclusion: string

  // Mechanism Section
  mechanismTitle: string
  mechanismTitleHighlight: string
  mechanismIntro: string
  mechanismSteps: { title: string; description: string }[]
  mechanismConclusion: string

  // What You Get
  benefits: string[]

  // Social Proof
  testimonial: {
    quote: string
    name: string
    role: string
  }

  // FAQ
  faqs: { question: string; answer: string }[]

  // Final CTA
  finalCtaTitle: string
  finalCtaTitleHighlight: string
  finalCtaSubtitle: string
  finalCtaButton: string
}

export const offers: Record<string, OfferConfig> = {
  p: {
    letter: 'P',
    route: '/p',
    stripeLink: 'https://book.stripe.com/4gMfZg9fJ89d2k9etEgA81w',
    price: '$1',
    priceValue: 1,

    badge: '$120K+ Design Engineer Roles',
    headline: 'Design Engineers Earn 15-25% More.',
    headlineHighlight: "Your Portfolio Proves You're \"Just a Designer.\"",
    subheadline: 'Add one hybrid case study showing design + implementation. Qualify for $120K+ Design Engineer roles instead of $95K designer positions.',
    heroCta: 'Add the Hybrid Case Study ($1)',

    problemTitle: 'You Have Both Skills.',
    problemTitleHighlight: 'Your Portfolio Only Shows One.',
    problemIntro: [
      'You design AND code. You bridge the gap every day.',
      'But your portfolio stops at Figma mockups.',
      'Hiring managers see "designer" — not "Design Engineer."',
      "You're competing for $95K roles when $120K roles exist for your exact skill set."
    ],
    problemPoints: [
      'Case studies end at static mockups — no implementation visible',
      'Zero code artifacts, components, or system architecture',
      'No evidence you understand constraints, performance, or production',
      'Recruiters filter you into "designer" pile before the interview'
    ],
    problemData: [
      { label: 'Average Designer Salary', value: '$95K' },
      { label: 'Average Design Engineer Salary', value: '$120K' },
      { label: 'Premium for Hybrid Skills', value: '15-25%' },
      { label: 'Case Studies Needed to Signal', value: '1' }
    ],
    problemConclusion: '"Design Engineer" is one of the fastest-growing role titles. Companies want fewer handoffs and faster iteration. You already have the skills — your portfolio just hides them.',

    mechanismTitle: 'One Hybrid Case Study Changes',
    mechanismTitleHighlight: 'How Recruiters Categorize You',
    mechanismIntro: 'Design Engineer portfolios prove the bridge between design and code. Here\'s the 4-part structure:',
    mechanismSteps: [
      { title: 'Show Design + Implementation Side-by-Side', description: '"I designed this system. Then I built it." Include before/after of concept to production.' },
      { title: 'Add Code as a Deliverable', description: 'Code snippets, component documentation, and system architecture prove you ship, not just mockup.' },
      { title: 'Connect Constraints to Solutions', description: 'Show how technical limitations shaped design decisions. This is what separates Design Engineers from designers.' },
      { title: 'Document the System', description: 'Design systems, component libraries, and scalable architecture prove you think in systems, not screens.' }
    ],
    mechanismConclusion: 'One case study. Both sides of the bridge visible. That\'s the signal that moves you from $95K designer roles to $120K+ Design Engineer positions.',

    benefits: [
      'Hybrid Case Study Template — Design decision + implementation in one project',
      'Code Artifact Framework — Present code without looking like a "dev portfolio"',
      'Bridge Narrative Scripts — Language connecting design thinking to implementation reality',
      'Design Engineer Job Post Decoder — What companies actually mean',
      'Interview Proof Points — Talking points that demonstrate hybrid capability',
      'Portfolio Retrofit Guide — Add implementation layer to existing case studies'
    ],

    testimonial: {
      quote: 'Senior designer with coding skills. Portfolio was 100% Figma mockups. Added one hybrid case study — design decisions with the React implementation. Got recruited for a Design Engineer role 6 weeks later. $30K more than my designer salary.',
      name: 'Alex R.',
      role: 'Design Engineer'
    },

    faqs: [
      { question: 'I code, but not at a senior engineer level. Does this still work?', answer: 'Yes. Design Engineer portfolios show implementation thinking, not production-grade code. You need to prove you understand constraints and can ship.' },
      { question: 'Can I retrofit my existing case studies?', answer: 'That\'s exactly what the course teaches. You don\'t need new projects. You need to add the implementation layer to work you\'ve already done.' },
      { question: 'What\'s the difference between a Design Engineer and a dev portfolio?', answer: 'Design Engineer portfolios lead with design thinking, then prove implementation. Dev portfolios do the opposite. Framing determines the recruiter\'s pile.' },
      { question: 'How long until I see results?', answer: 'One hybrid case study takes most people 1-2 weeks to add. Timeline depends on job market and your existing network.' }
    ],

    finalCtaTitle: 'Same Skills. $25K+ Salary Difference.',
    finalCtaTitleHighlight: 'The Only Variable Is Your Portfolio.',
    finalCtaSubtitle: 'Design Engineers earn 15-25% more. You already design and code. Add one hybrid case study and stop competing for the wrong roles.',
    finalCtaButton: 'Add the Hybrid Case Study ($1)'
  },

  b: {
    letter: 'B',
    route: '/b',
    stripeLink: 'https://book.stripe.com/28E14m1Nh0GL7EtclwgA81x',
    price: '$1',
    priceValue: 1,

    badge: 'From 5% to 50% Callback Rate',
    headline: '85% of Portfolios Bury Metrics Below the Fold.',
    headlineHighlight: 'Yours Probably Does Too.',
    subheadline: 'Restructure your portfolio in 1 day. Go from 80 applications with zero callbacks to 6 interviews in 2 weeks.',
    heroCta: 'Fix Your Portfolio Architecture ($1)',

    problemTitle: '80 Applications. Zero Callbacks.',
    problemTitleHighlight: "It's Not Your Skills.",
    problemIntro: [
      "You've sent 80 applications. Maybe 100.",
      "You've heard nothing. Or worse: automated rejections.",
      "You're starting to wonder if you're good enough for this industry."
    ],
    problemPoints: [
      'Your portfolio is designed for designers who read case studies, not hiring managers who scan for 3 seconds',
      'You lead with "Research, Wireframes, Final Design" instead of business outcomes',
      '85% of portfolios have no visible metrics in the first scroll. Hiring managers close the tab before seeing your results.',
      'Your impact is buried at the bottom of a 5-minute case study nobody reads'
    ],
    problemData: [
      { label: 'Initial scan time', value: '0-3 seconds' },
      { label: 'Looking for ONE thing', value: 'Metrics' },
      { label: 'Generic callback rate', value: '5-10%' },
      { label: 'Metrics-first callback rate', value: '50-60%' }
    ],
    problemConclusion: "You don't need better design skills. You need better portfolio architecture.",

    mechanismTitle: 'How Hiring Managers',
    mechanismTitleHighlight: 'Actually Read Your Portfolio',
    mechanismIntro: "Your portfolio gets 3 seconds. Here's exactly what happens in each one:",
    mechanismSteps: [
      { title: 'Second 0-1: The Thumbnail Test', description: 'They glance at your project thumbnail. One question: "Does this look professional enough to click?" No metrics visible = no click.' },
      { title: 'Second 1-2: The Impact Hunt', description: 'They scan your title and hero. Looking for ONE number. "Reduced cart abandonment 23%" beats "Redesigned checkout flow" every time.' },
      { title: 'Second 2-3: Stay or Go', description: 'They see clear impact OR vague process language. Clear impact = "Worth 2 more minutes." Vague process = "Next candidate."' },
      { title: 'The Fix', description: 'Headline = Business outcome, not project name. First visual = Result, not wireframe. Above-the-fold = Impact, not methodology.' }
    ],
    mechanismConclusion: 'Process doesn\'t prove you can do the job. Metrics do. Lead with proof.',

    benefits: [
      '0-3 second scan optimization checklist',
      'Metrics-first case study framework',
      'The Headline Formula That Works: "[Outcome]: [What You Did] = [Result]"',
      'Above-the-fold blueprint (what belongs in first scroll)',
      'Before/after portfolio rewrites (real examples)',
      'AI metrics extraction tool for quantifiable outcomes'
    ],

    testimonial: {
      quote: 'Same portfolio. Same projects. I just moved metrics to the top and rewrote my headlines. Went from 2 callbacks in 3 months to 6 callbacks in 2 weeks.',
      name: 'Jordan M.',
      role: 'Product Designer (now employed)'
    },

    faqs: [
      { question: 'What if my projects don\'t have hard metrics?', answer: 'Every project has quantifiable outcomes. We show you how to extract metrics from "soft" projects: user feedback scores, task completion rates, time saved, error reduction.' },
      { question: 'How long does the restructure take?', answer: 'Most designers restructure their portfolio in 1-2 days. Students typically see callback improvements within 2 weeks of applying with their updated portfolio.' },
      { question: 'Will this work for entry-level designers?', answer: 'This framework is built for 0-2 year designers. It works especially well for bootcamp grads and career changers who have projects but struggle to present impact.' },
      { question: 'Do I need coding skills?', answer: 'No. This is about restructuring your story and headlines, not rebuilding your site. The AI tool handles any technical extraction.' }
    ],

    finalCtaTitle: 'Stop Getting Filtered Out in 3 Seconds.',
    finalCtaTitleHighlight: 'Get 6 Callbacks in 2 Weeks.',
    finalCtaSubtitle: 'Same projects. Same skills. Different architecture. That\'s the only change between 5% and 50% callback rates.',
    finalCtaButton: 'Restructure Your Portfolio ($1)'
  },

  l: {
    letter: 'L',
    route: '/l',
    stripeLink: 'https://book.stripe.com/4gM7sKbnR9dhaQFetEgA81y',
    price: '$1',
    priceValue: 1,

    badge: '200 Portfolios. 3 Seconds.',
    headline: '147 Apps, 2 Callbacks.',
    headlineHighlight: 'Then I Changed My Thumbnails.',
    subheadline: 'Hiring managers scan for 3 seconds. Win those 3 seconds and watch your callback rate jump from 2% to 27%.',
    heroCta: 'Fix Your 3-Second Problem ($1)',

    problemTitle: "You're Getting Rejected Before",
    problemTitleHighlight: 'They See Your Work',
    problemIntro: [
      '147 applications sent. 2 callbacks received.',
      'Your design skills aren\'t the problem.',
      'You\'re dying in the first 3 seconds before anyone sees your actual work.'
    ],
    problemPoints: [
      '200 portfolios compete for every open role',
      'Hiring managers spend 6 seconds max per portfolio',
      '95% of portfolios use identical structure and headlines',
      'Your "Checkout Redesign" title looks like 47 other "Checkout Redesign" titles'
    ],
    problemData: [
      { label: 'Portfolios per role', value: '200' },
      { label: 'Seconds per scan', value: '3' },
      { label: 'Identical structure', value: '95%' },
      { label: 'Current callback rate', value: '~2%' }
    ],
    problemConclusion: 'They\'re not rejecting your design. They\'re scrolling past your thumbnail without ever clicking.',

    mechanismTitle: 'Win the 3-Second Scan',
    mechanismTitleHighlight: '(Not Just Survive It)',
    mechanismIntro: 'Why 95% of portfolios fail before they\'re opened:',
    mechanismSteps: [
      { title: '"Checkout Redesign" vs "Reduced Cart Abandonment 23%"', description: 'Process titles blend in. Metric titles stop the scroll.' },
      { title: 'Same thumbnail pattern as 199 others', description: 'Your minimal portfolio grid looks like every other minimal portfolio grid.' },
      { title: 'Business impact buried on page 3', description: 'By then, they\'ve already scrolled to the next candidate.' },
      { title: 'Generic case study structure', description: '"Problem > Process > Solution" is invisible. "23% Revenue Increase: How I Fixed a $2M Checkout Bug" gets clicked.' }
    ],
    mechanismConclusion: 'Shift from "Here\'s my process" to "Here\'s the 34% retention increase I created."',

    benefits: [
      'The 3-Second Audit Framework — Diagnose where your portfolio loses attention',
      'Headline Rewrites That Stop Scrolling — Turn "App Redesign" into "Cut Support Tickets 67%"',
      'Pattern-Break Thumbnail Templates — Stand out from the 199 identical portfolios',
      'Case Study Restructure for Scanners — Lead with metrics, not methodology',
      'LinkedIn Portfolio Section Overhaul — The same principles applied to your profile',
      'Before/After Examples — See what "invisible" vs "unmissable" actually looks like'
    ],

    testimonial: {
      quote: "147 applications, 3 callbacks over 4 months. Did the 'stop the scroll' audit. Changed headlines from 'E-commerce Redesign' to 'Reduced Abandonment 23%'. Added metrics to thumbnails. Next 30 applications: 8 callbacks. Same portfolio. Same case studies. Different architecture.",
      name: 'Sam K.',
      role: 'UX Designer (callback rate: 2% to 27%)'
    },

    faqs: [
      { question: 'My portfolio is already well-designed. Will this help?', answer: 'Design quality isn\'t the issue. We\'re fixing visibility. Your beautiful work means nothing if hiring managers scroll past in 3 seconds. This is about winning the scan, not redesigning your projects.' },
      { question: 'What exactly is a "pattern break"?', answer: '12 specific techniques that make your thumbnail visually different from the standard portfolio grid. Think: unconventional layouts, metric-forward visuals, contrast choices that catch scanning eyes.' },
      { question: 'Do I need to rebuild my portfolio from scratch?', answer: 'No. This is headline-level and thumbnail-level restructuring. Your case studies stay the same. We\'re changing how they\'re presented in the first 3 seconds.' },
      { question: 'How quickly will I see more callbacks?', answer: 'The audit and implementation takes 1 day. Most students report improved callback rates within 2-3 weeks of applying with the updated portfolio.' }
    ],

    finalCtaTitle: '2% Callback Rate to 27%.',
    finalCtaTitleHighlight: 'Same Portfolio. Different Architecture.',
    finalCtaSubtitle: 'You\'ve sent 100+ applications. You\'ve gotten 2-3 callbacks. The fix takes 1 day.',
    finalCtaButton: 'Win the 3-Second Scan ($1)'
  },

  a: {
    letter: 'A',
    route: '/a',
    stripeLink: 'https://book.stripe.com/8x24gycrV6152k9adogA81z',
    price: '$1',
    priceValue: 1,

    badge: 'Zero Callbacks? Fix It.',
    headline: '10,000 Bootcamp Grads Have Your Exact Portfolio.',
    headlineHighlight: "Here's How to Not Look Like Them.",
    subheadline: 'Go from 5% callback rate to 50%+ by changing HOW you present your projects — not the projects themselves. Works in 1 day.',
    heroCta: 'Get the Anti-Template Framework ($1)',

    problemTitle: 'Why 47 Applications',
    problemTitleHighlight: 'Got You Zero Callbacks',
    problemIntro: [
      'You followed the formula: Research. Personas. Wireframes. Final design.',
      'Your bootcamp said this structure gets jobs.',
      'They forgot to mention: 10,000 other grads got the exact same template.'
    ],
    problemPoints: [
      'Hiring managers see your portfolio thumbnail 47 times a day — different colors, identical structure',
      'They spend 3 seconds scanning before hitting "reject"',
      'Your design skills never get evaluated because you look like everyone else',
      '90% of bootcamp portfolios get auto-rejected for "cookie-cutter narrative"'
    ],
    problemData: [
      { label: 'Portfolios using identical template', value: '95%' },
      { label: 'Rejected for looking like clones', value: '90%' },
      { label: 'Generic portfolio callback rate', value: '5-10%' },
      { label: 'Differentiated portfolio callback rate', value: '50-60%' }
    ],
    problemConclusion: "The 10x gap in callbacks isn't design skill. It's narrative architecture.",

    mechanismTitle: 'The 3-Part',
    mechanismTitleHighlight: 'Anti-Template Framework',
    mechanismIntro: "This isn't another template to follow. Templates ARE the problem. Here's the reframe:",
    mechanismSteps: [
      { title: 'Kill "Research > Personas > Wireframes"', description: 'That linear process story signals "I followed bootcamp instructions." Every grad says "I interviewed 5 users and created personas." It makes you invisible.' },
      { title: 'Lead with the pivot, not the process', description: 'Start with what went WRONG. The constraint. The failed assumption. The hard decision. This signals "I can think under pressure" — what hiring managers actually screen for.' },
      { title: 'Put business impact in your first 3 seconds', description: 'Not "Redesigned checkout flow." Instead: "Reduced cart abandonment 23%." Your title, first visual, and opening line should answer "So what?" immediately.' }
    ],
    mechanismConclusion: "Same bootcamp projects. Different narrative structure. That's the difference between 5% and 50% callbacks.",

    benefits: [
      '1-Day Portfolio Rewrite System — Restructure your entire portfolio in one focused day (not weeks)',
      'Case Study Narrative Templates — Turn "Research > Wireframes > Final" into "Problem > Decision > Impact"',
      '3-Second Scan Checklist — 12 elements hiring managers check before reading a single word',
      '5 Real Failed Portfolio Teardowns — See exactly why these got rejected (and how to avoid the same mistakes)',
      'AI Narrative Reframing Agent — Paste your existing case study, get a differentiated version back',
      'Business Impact Headline Formula — Turn "I redesigned X" into metrics that make them click'
    ],

    testimonial: {
      quote: "Same projects I'd been applying with for 2 months. Rewrote the narratives using this framework. Got 3 callbacks in my first week. The projects didn't change — just how I positioned them.",
      name: 'Taylor J.',
      role: 'Junior Designer (hired 3 weeks later)'
    },

    faqs: [
      { question: 'Do I need to rebuild my portfolio from scratch?', answer: 'No. You keep your existing projects. This is about reframing HOW you present them — different narrative structure, same work.' },
      { question: 'What if I only have bootcamp projects?', answer: "Perfect. That's exactly who this is for. We specialize in making bootcamp projects stand out from the 10,000 identical ones." },
      { question: 'How is this different from other portfolio courses?', answer: 'Other courses give you another template to follow. We give you a framework to NOT look like a template — that\'s the whole point.' },
      { question: 'Why does narrative matter more than design skill?', answer: "Hiring managers spend 3 seconds on initial scan. They're not evaluating your design — they're filtering out cookie-cutter portfolios. You need to pass the filter before your skills matter." }
    ],

    finalCtaTitle: '47 Applications, Zero Callbacks?',
    finalCtaTitleHighlight: 'Your Portfolio Is the Problem.',
    finalCtaSubtitle: 'Same projects. Different narrative. Go from invisible to interview-ready in 1 day.',
    finalCtaButton: 'Get the Anti-Template Framework ($1)'
  },

  j: {
    letter: 'J',
    route: '/j',
    stripeLink: 'https://buy.stripe.com/5kQbJ03Vp89de2RetEgA81u',
    price: '$1',
    priceValue: 1,

    badge: 'Interview-Ready in 2 Weeks',
    headline: 'Laid Off? Your Best Work Is Fading From Memory.',
    headlineHighlight: 'Document It This Weekend.',
    subheadline: 'In 4 weeks, project details get fuzzy. In 8 weeks, you\'re guessing at metrics. Capture your senior-level impact NOW and be interviewing by Week 3.',
    heroCta: 'Document Your Work Before You Forget ($1)',

    problemTitle: 'Your Portfolio Is 3 Years Old.',
    problemTitleHighlight: 'Your Memory Has 4 Weeks.',
    problemIntro: [
      "You led teams, shipped products, made strategic decisions.",
      "Now you're laid off—and your portfolio is frozen at 2021.",
      "The work that proves your current abilities? Undocumented."
    ],
    problemPoints: [
      'Week 1 post-layoff: Project details crystal clear',
      'Week 4: Getting fuzzy on specifics',
      'Week 8: Guessing at impact metrics',
      'Week 12: "I think I increased conversion by... some amount?"'
    ],
    problemData: [
      { label: 'When employed', value: 'No time for portfolio' },
      { label: 'When laid off', value: 'Desperate need for portfolio' },
      { label: 'Your 2021 work', value: 'Won\'t get 2025 interviews' }
    ],
    problemConclusion: 'Every day you wait, your case studies get weaker. Document now or rebuild from guesswork later.',

    mechanismTitle: '2 Weeks to Interview-Ready.',
    mechanismTitleHighlight: 'Senior Positioning, Not Junior Scramble.',
    mechanismIntro: 'This isn\'t generic portfolio advice. This is a rapid rebuild framework built for senior designers with NDA work, fading memories, and no time to waste.',
    mechanismSteps: [
      { title: 'Week 1: Documentation Sprint', description: 'Capture every project detail while your memory is fresh. Decisions, metrics, leadership moments—all documented before they fade.' },
      { title: 'Showcase NDA Work Legally', description: 'Yes, you can show confidential projects. We teach you exactly how to present them without violating agreements.' },
      { title: 'Position for Staff/Lead Roles', description: 'Leadership narrative. Strategic impact. Systems thinking. Not "I made wireframes"—prove you drove business outcomes.' },
      { title: 'Signal 2025 Hiring Priorities', description: 'AI fluency. Cross-functional leadership. The specific capabilities hiring managers are screening for right now.' }
    ],
    mechanismConclusion: 'Week 1: Document everything. Week 2: Assemble portfolio with senior positioning. Week 3: Start interviewing with proof of recent impact.',

    benefits: [
      'Memory Capture Templates — Structured prompts to extract project details and metrics',
      'NDA-Safe Case Study Framework — Show confidential work without legal risk',
      'Senior Positioning Scripts — Transform "I designed screens" into strategy narratives',
      '2025 Signal Checklist — AI integration, systems thinking, cross-functional leadership',
      '2-Week Interview-Ready Timeline — Day-by-day plan from layoff to active interviewing',
      '"Why I Left" Interview Prep — Frame the layoff narrative confidently'
    ],

    testimonial: {
      quote: 'Laid off from Meta after 4 years. Portfolio was ancient. Spent first weekend documenting everything—I was already forgetting impact metrics by day 3. Week 2, portfolio rebuilt with senior positioning. Week 3, interviewing. Offer by week 6.',
      name: 'Chris L.',
      role: 'Senior Product Designer (Meta to Stripe, 6 weeks)'
    },

    faqs: [
      { question: 'I have mostly NDA projects. Can I even show my recent work?', answer: 'Yes. We teach you exactly how to showcase confidential work legally—describing process, decisions, and sanitized outcomes.' },
      { question: 'How is this different from a regular portfolio course?', answer: 'Regular courses teach juniors. This is for seniors who need to reconstruct years of undocumented work from memory—fast, before details fade.' },
      { question: 'Can I really rebuild a portfolio in 2 weeks?', answer: 'Yes, if you start while your memory is fresh. The framework is designed for speed: Week 1 captures everything, Week 2 assembles it.' },
      { question: 'What makes this "senior positioning" specifically?', answer: 'Instead of showcasing deliverables, you\'ll position leadership decisions, strategic impact, and business outcomes for Staff and Lead roles.' }
    ],

    finalCtaTitle: 'Week 1: Document Everything.',
    finalCtaTitleHighlight: 'Week 3: Start Interviewing.',
    finalCtaSubtitle: 'Your project details are crystal clear right now. In 4 weeks, they won\'t be. Capture your senior-level impact before it fades.',
    finalCtaButton: 'Start Documenting This Weekend ($1)'
  },

  i: {
    letter: 'I',
    route: '/i',
    stripeLink: 'https://buy.stripe.com/6oU00igIbdtx8Ix5X8gA81v',
    price: '$1',
    priceValue: 1,

    badge: 'For Designers With 0-3 Months Runway',
    headline: 'Every Week Without a Portfolio Costs You $2,000.',
    headlineHighlight: 'Ship Yours Tomorrow.',
    subheadline: 'Portfolio done Saturday. 40 applications by Wednesday. 3 interviews by week 2. Stop bleeding $2K/week while "perfecting."',
    heroCta: 'Ship Tomorrow for $1',

    problemTitle: "You're Losing $2,000 Every Week",
    problemTitleHighlight: "You Don't Apply",
    problemIntro: [
      "Unemployed 3 weeks? That's $6,000 you didn't earn.",
      "Still \"working on your portfolio\"? That's another $2,000 gone next week.",
      "At 4-8 weeks to \"perfect,\" you'll burn $8K-$16K before sending a single application."
    ],
    problemPoints: [
      'Designer salary: $100K/year = $2,000/week you\'re NOT earning',
      'Typical portfolio build time: 4-8 weeks = $8K-$16K lost income',
      'Your runway: 0-3 months = You run out of money before you finish',
      'The math doesn\'t work: 8 weeks of savings vs. 8 weeks to "perfect"'
    ],
    problemData: [
      { label: 'Every week without apps', value: '$2,000 lost' },
      { label: '4-8 weeks "perfecting"', value: '$8K-$16K burned' },
      { label: 'Running out of savings', value: 'Happens before "ready"' }
    ],
    problemConclusion: 'Most designers spend 8 weeks perfecting, then get rejected anyway. The fix: Ship in 1 day, apply immediately, iterate based on real feedback.',

    mechanismTitle: '1-Day Sprint: Portfolio Live by Tonight,',
    mechanismTitleHighlight: 'Applications Out Tomorrow',
    mechanismIntro: 'Hiring managers don\'t need perfect. They need signal: "Can this person ship?" A shipped portfolio proves you can ship. "Still working on it" proves nothing.',
    mechanismSteps: [
      { title: 'Saturday Morning', description: 'Download the framework, select your 3 strongest projects (2 hours)' },
      { title: 'Saturday Afternoon', description: 'Rewrite case studies metrics-first, not process-first (4 hours)' },
      { title: 'Saturday Evening', description: 'Portfolio deployed, LinkedIn updated, ready to apply (2 hours)' },
      { title: 'Sunday-Monday', description: 'Send first 10 applications using the rapid application system' },
      { title: 'Week 1', description: '30-50 applications out, collecting feedback, making quick tweaks' },
      { title: 'Week 2', description: 'First interviews scheduled based on what\'s actually working' }
    ],
    mechanismConclusion: 'Rejections are data. Each one tells you what to fix. That\'s why we ship fast: real feedback beats endless tweaking.',

    benefits: [
      '1-Day Sprint Framework — Exact hour-by-hour schedule to go from nothing to deployed',
      '3-Second Scan Case Study Template — Metrics-first format that passes the recruiter scroll test',
      '"Good Enough" Checklist — Know exactly when to stop tweaking and start applying',
      '10-Applications-Per-Day System — Sustainable pace that gets 30-50 apps out in week 1',
      '7-14 Day Interview Timeline — Realistic schedule from portfolio live to first callbacks',
      'Survival Mode Mindset Guide — Stop perfecting, start shipping, get hired faster'
    ],

    testimonial: {
      quote: "Laid off with 6 weeks runway. Was spending all my time 'perfecting' portfolio. Did the 1-day sprint on Saturday. Applied to 40 jobs by Wednesday. Had 3 interviews by week 2. Offer by week 4.",
      name: 'Morgan P.',
      role: 'Product Designer'
    },

    faqs: [
      { question: 'Won\'t a rushed portfolio hurt my chances?', answer: 'A "good enough" portfolio that\'s live gets callbacks. A perfect portfolio still in your head gets zero. Every week you delay costs you $2,000 in lost salary.' },
      { question: 'What if I get rejected?', answer: 'That\'s the point. Rejections after 50 applications tell you exactly what to fix. Rejections after 5 applications from an 8-week portfolio tell you nothing and you\'re broke.' },
      { question: 'How do I know when it\'s "good enough"?', answer: 'You get a specific checklist with exact criteria. When you check every box, you ship. No second-guessing.' },
      { question: 'Do I need to know how to code?', answer: 'No. AI writes the code. You focus on case studies and applications. Portfolio is deployed same day.' },
      { question: 'What if I only have 2-3 projects to show?', answer: 'That\'s enough. We show you how to present 2-3 projects with metrics-first case studies that pass the 3-second scan.' }
    ],

    finalCtaTitle: 'Portfolio Done Saturday. 40 Applications by Wednesday.',
    finalCtaTitleHighlight: '3 Interviews by Week 2.',
    finalCtaSubtitle: 'You\'ve already lost $2,000 for every week you\'ve been "perfecting." Stop the bleeding. Ship tomorrow.',
    finalCtaButton: 'Ship Tomorrow for $1'
  }
}
