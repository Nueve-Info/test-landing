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

    badge: 'Design Engineer Premium',
    headline: 'You Design AND Code.',
    headlineHighlight: 'Your Portfolio Only Shows Design.',
    subheadline: 'Design Engineer signal portfolio → 15-25% salary premium.',
    heroCta: 'Signal Design Engineer',

    problemTitle: 'The',
    problemTitleHighlight: 'Hidden Skill Problem',
    problemIntro: [
      "You're not just a designer.",
      "You understand code. You can implement. You bridge the gap.",
      "But your portfolio doesn't show it."
    ],
    problemPoints: [
      'Case studies stop at mockups',
      'No code implementation visible',
      'No bridge between design and dev',
      'Hiring managers see "designer"'
    ],
    problemData: [
      { label: 'Design Engineer Premium', value: '15-25% higher salary' },
      { label: 'Your Skills', value: 'Design + Code' },
      { label: 'Your Portfolio', value: 'Design only' }
    ],
    problemConclusion: 'You have the skills. Your portfolio hides them.',

    mechanismTitle: 'The',
    mechanismTitleHighlight: 'Design Engineer Signal',
    mechanismIntro: 'Show both sides of the bridge with one hybrid case study:',
    mechanismSteps: [
      { title: 'Hybrid case study', description: 'Show design decision AND implementation. "I designed this. Then I built it."' },
      { title: 'Code as artifact', description: 'Include code snippets, component documentation, system architecture.' },
      { title: 'Bridge narrative', description: 'Connect design thinking to implementation reality explicitly.' },
      { title: 'Systems evidence', description: 'Show design systems, component libraries, scalable thinking.' }
    ],
    mechanismConclusion: 'One project where you show both sides. That\'s the Design Engineer signal.',

    benefits: [
      'Design Engineer portfolio positioning framework',
      'Hybrid case study template (design + implementation)',
      'How to show code without being a "dev portfolio"',
      'Systems thinking documentation approach',
      'Role positioning for Design Engineer job posts',
      'Interview prep: proving the hybrid skill set'
    ],

    testimonial: {
      quote: 'Senior designer who codes. Portfolio was all Figma mockups. Added one hybrid case study showing design → implementation. Got recruited for Design Engineer role. $30K more than my designer salary.',
      name: 'Alex R.',
      role: 'Design Engineer'
    },

    faqs: [
      { question: 'Do I need to know how to code?', answer: 'You should have some coding ability already. This course helps you SHOW that skill in your portfolio, not teach coding from scratch.' },
      { question: 'What if my code isn\'t production-quality?', answer: 'Design Engineer portfolios show the bridge between design and code. Showing implementation thinking matters more than perfect code.' },
      { question: 'Will this work for my current projects?', answer: 'Yes. We show you how to add the "implementation layer" to existing case studies without rebuilding from scratch.' },
      { question: 'How is this different from a dev portfolio?', answer: 'Design Engineer portfolios lead with design thinking, then show implementation. Dev portfolios do the opposite. The positioning matters.' }
    ],

    finalCtaTitle: 'Unlock the Hybrid Premium.',
    finalCtaTitleHighlight: 'Show Both Sides.',
    finalCtaSubtitle: 'Design Engineer roles pay 15-25% more. Make your portfolio prove you qualify.',
    finalCtaButton: 'Signal Design Engineer'
  },

  b: {
    letter: 'B',
    route: '/b',
    stripeLink: 'https://book.stripe.com/28E14m1Nh0GL7EtclwgA81x',
    price: '$1',
    priceValue: 1,

    badge: 'Win the 3-Second Scan',
    headline: 'Hiring Managers Spend 3 Seconds.',
    headlineHighlight: 'Make Them Count.',
    subheadline: 'The metrics-first framework that turns 5% callback rates into 50%.',
    heroCta: 'Win the 3-Second Scan',

    problemTitle: 'The',
    problemTitleHighlight: '3-Second Death',
    problemIntro: [
      "You've sent 80 applications. Maybe 100.",
      "You've heard nothing. Or worse: automated rejections.",
      "You start to think: 'Maybe I'm not good enough.'"
    ],
    problemPoints: [
      'Portfolio designed for designers, not hiring managers',
      'Process-first: "Research → Wireframes → Final"',
      'No visible metrics in first scroll',
      'By the time they see results, they\'ve moved on'
    ],
    problemData: [
      { label: 'Initial scan time', value: '0-3 seconds' },
      { label: 'Generic callback rate', value: '5-10%' },
      { label: 'Metrics-first rate', value: '50-60%' }
    ],
    problemConclusion: 'The fix isn\'t better design. It\'s better architecture.',

    mechanismTitle: 'The',
    mechanismTitleHighlight: '0-3 Second Framework',
    mechanismIntro: 'Win in the scan window:',
    mechanismSteps: [
      { title: 'Second 0-1: Visual Scan', description: 'Thumbnail judgment: "Does this look professional?"' },
      { title: 'Second 1-2: Impact Search', description: 'Looking for ONE number or outcome. "Did this person ship something real?"' },
      { title: 'Second 2-3: Decision Point', description: 'Clear role + impact OR ambiguous process story. Worth 2 more minutes?' },
      { title: 'Above the fold', description: 'Headline = Business outcome. First visual = Result. Impact before process.' }
    ],
    mechanismConclusion: 'Everything else comes after you\'ve earned their attention.',

    benefits: [
      '0-3 second scan optimization checklist',
      'Metrics-first case study framework',
      'Title formula: "[Outcome]: [What You Did] = [Result]"',
      'Portfolio architecture blueprint (what goes above fold)',
      'Before/after portfolio rewrites (real examples)',
      'AI agent to extract metrics from your existing projects'
    ],

    testimonial: {
      quote: 'Same portfolio, restructured. Moved metrics to the top, changed my headlines. Went from 2 callbacks in 3 months to 6 in 2 weeks.',
      name: 'Jordan M.',
      role: 'Product Designer'
    },

    faqs: [
      { question: 'Do I need to know how to code?', answer: 'No, AI writes the code for you. Focus on restructuring your story for maximum impact.' },
      { question: 'What if I don\'t have metrics?', answer: 'We teach you how to extract and frame metrics from any project. Even "soft" outcomes can be quantified.' },
      { question: 'Will this work for bootcamp projects?', answer: 'Yes. The framework works for any project type. It\'s about how you present, not what you present.' },
      { question: 'How fast will I see results?', answer: 'Most students restructure in 1-2 days. Callback improvements typically show within 2 weeks of applying.' }
    ],

    finalCtaTitle: 'Stop Getting Filtered.',
    finalCtaTitleHighlight: 'Start Getting Calls.',
    finalCtaSubtitle: 'You\'ve been applying for months. Fix the root cause in 1 day.',
    finalCtaButton: 'Win the 3-Second Scan'
  },

  l: {
    letter: 'L',
    route: '/l',
    stripeLink: 'https://book.stripe.com/4gM7sKbnR9dhaQFetEgA81y',
    price: '$1',
    priceValue: 1,

    badge: 'Break Through the Wall',
    headline: '100+ Applications.',
    headlineHighlight: 'Zero Callbacks. Here\'s Why.',
    subheadline: 'Your portfolio doesn\'t stop the scroll. Fix it in 1 day.',
    heroCta: 'Stop the Scroll',

    problemTitle: 'The',
    problemTitleHighlight: 'Invisible Designer',
    problemIntro: [
      "You've sent 100+ applications. Maybe 150.",
      "You've gotten... 2 callbacks? Maybe 3?",
      "Your portfolio looks good. You've put in the work."
    ],
    problemPoints: [
      '200 portfolios scanned per open role',
      '95% look identical (same structure)',
      'No pattern break in your thumbnail',
      'Scroll... scroll... scroll... skip.'
    ],
    problemData: [
      { label: 'Portfolios per role', value: '200+' },
      { label: 'Identical structure', value: '95%' },
      { label: 'Seconds per scan', value: '0-3' }
    ],
    problemConclusion: 'Good design doesn\'t matter if they never see it.',

    mechanismTitle: 'The',
    mechanismTitleHighlight: '"Stop the Scroll" Framework',
    mechanismIntro: 'What STOPS the scroll:',
    mechanismSteps: [
      { title: 'Pattern break thumbnail', description: 'Visually different from the sea of sameness.' },
      { title: 'Metrics in title', description: '"Increased retention 34%" catches eye immediately.' },
      { title: 'Intrigue hook', description: '"What I learned from a failed launch" > "App Redesign"' },
      { title: 'Clear business impact', description: 'Visible in first 3 seconds, not buried in process.' }
    ],
    mechanismConclusion: 'From "Here\'s my process" to "Here\'s my impact".',

    benefits: [
      '"Stop the scroll" portfolio audit framework',
      'Headline rewrites (process → impact)',
      'Thumbnail optimization (pattern break)',
      'Case study restructure (3-second scan optimized)',
      'LinkedIn portfolio section overhaul',
      'Before/after examples (invisible → visible)'
    ],

    testimonial: {
      quote: '147 applications, 3 callbacks over 4 months. Did the "stop the scroll" audit. Changed headlines, added metrics to thumbnails. Next 30 applications: 8 callbacks. Same portfolio, different architecture.',
      name: 'Sam K.',
      role: 'UX Designer'
    },

    faqs: [
      { question: 'Do I need to know how to code?', answer: 'No, AI writes the code for you. Focus on making your portfolio impossible to scroll past.' },
      { question: 'What makes a "pattern break"?', answer: 'We show you 12 specific techniques that visually differentiate your portfolio from the standard template look.' },
      { question: 'Can I fix my existing portfolio?', answer: 'Yes. This is about restructuring what you have, not starting over. Most changes are headline/thumbnail level.' },
      { question: 'How long until I see results?', answer: 'The audit takes 1 day. Most students see improved callback rates within 2-3 weeks of applying.' }
    ],

    finalCtaTitle: 'From Invisible to',
    finalCtaTitleHighlight: 'Unmissable.',
    finalCtaSubtitle: 'You\'ve been invisible long enough. Stop the scroll in 1 day.',
    finalCtaButton: 'Stop the Scroll'
  },

  a: {
    letter: 'A',
    route: '/a',
    stripeLink: 'https://book.stripe.com/8x24gycrV6152k9adogA81z',
    price: '$1',
    priceValue: 1,

    badge: 'Break Free From Templates',
    headline: 'Your Bootcamp Gave You Skills.',
    headlineHighlight: 'It Also Made You Invisible.',
    subheadline: 'Hiring managers recognize the template in 3 seconds. Break free in 1 day.',
    heroCta: 'Escape the Template Trap',

    problemTitle: 'The',
    problemTitleHighlight: 'Template Trap',
    problemIntro: [
      "You followed the formula. Research. Personas. Wireframes. Final design.",
      "Your bootcamp told you this was the right structure.",
      "What they didn't tell you: so did every other bootcamp."
    ],
    problemPoints: [
      'Same structure as 10,000 other grads',
      'Hiring managers recognize it instantly',
      'Rejected before they read a word',
      'Your design skills never get seen'
    ],
    problemData: [
      { label: 'Identical template', value: '95% of portfolios' },
      { label: 'Cookie-cutter rejection', value: '90%' },
      { label: 'Differentiated callback', value: '50-60%' }
    ],
    problemConclusion: 'The gap isn\'t design skill. It\'s narrative architecture.',

    mechanismTitle: 'The',
    mechanismTitleHighlight: 'Anti-Template Framework',
    mechanismIntro: 'This isn\'t another template. Templates ARE the problem:',
    mechanismSteps: [
      { title: 'Kill the linear process story', description: 'Stop saying "I interviewed 5 users." Every bootcamp grad says this.' },
      { title: 'Lead with the messy truth', description: 'Start with what went WRONG. The constraint. The pivot. The real decision.' },
      { title: 'Make impact visible in 3 seconds', description: 'Not "Redesigned checkout flow." Instead: "Reduced cart abandonment 23%."' },
      { title: 'Prove you can think', description: 'Templates prove you follow instructions. Anti-template proves you think.' }
    ],
    mechanismConclusion: 'Same projects, completely different positioning.',

    benefits: [
      '1-day portfolio reconstruction framework',
      'Case study narrative rewrites (generic → differentiated)',
      'The "3-second scan" optimization checklist',
      '5 failed portfolio teardowns (learn what gets rejected)',
      'AI narrative agent to reframe your existing projects',
      'New portfolio headline formula (business impact first)'
    ],

    testimonial: {
      quote: 'Same projects, completely different results. Rewrote my case studies using the anti-template framework. Got 3 callbacks in my first week of applying. After 2 months of silence.',
      name: 'Taylor J.',
      role: 'Junior Designer'
    },

    faqs: [
      { question: 'Do I need to know how to code?', answer: 'No, AI writes the code for you. Focus on reframing your story to stand out.' },
      { question: 'Can I keep my existing projects?', answer: 'Yes! This is about how you present them, not what they are. Same projects, new narrative.' },
      { question: 'How is this different from other portfolio courses?', answer: 'Most courses give you a template. We give you an anti-template framework that makes you look DIFFERENT.' },
      { question: 'What if I only have bootcamp projects?', answer: 'Perfect. We specialize in making bootcamp projects stand out from the identical crowd.' }
    ],

    finalCtaTitle: 'Stop Being Invisible.',
    finalCtaTitleHighlight: 'Start Getting Callbacks.',
    finalCtaSubtitle: 'Your portfolio has been holding you back for months. Fix it in 1 day.',
    finalCtaButton: 'Escape the Template Trap'
  },

  j: {
    letter: 'J',
    route: '/j',
    stripeLink: 'https://buy.stripe.com/5kQbJ03Vp89de2RetEgA81u',
    price: '$1',
    priceValue: 1,

    badge: 'Rapid Senior Rebuild',
    headline: 'Just Got Laid Off?',
    headlineHighlight: 'Your Portfolio Is 3 Years Old.',
    subheadline: 'Document recent work while memory is fresh. Position for senior roles, not junior scramble.',
    heroCta: 'Start the Rebuild',

    problemTitle: 'The',
    problemTitleHighlight: 'Senior Paradox',
    problemIntro: [
      "You were employed last month. Now you're not.",
      "And your portfolio hasn't been updated since your last job search.",
      "Your best work is RECENT. But you haven't documented any of it."
    ],
    problemPoints: [
      'When employed: No need for portfolio',
      'When laid off: Desperate need for portfolio',
      'Portfolio quality: Frozen at 3 years ago',
      'Memory fading fast'
    ],
    problemData: [
      { label: 'Week 1 post-layoff', value: 'Details crystal clear' },
      { label: 'Week 4', value: 'Getting fuzzy' },
      { label: 'Week 8', value: 'Guessing at specifics' }
    ],
    problemConclusion: 'You need to document NOW.',

    mechanismTitle: '',
    mechanismTitleHighlight: 'Rapid Rebuild for Seniors',
    mechanismIntro: 'This isn\'t a junior portfolio course. This is senior-specific:',
    mechanismSteps: [
      { title: 'Document under NDA', description: 'Yes, you can showcase NDA work. Here\'s how to do it legally and effectively.' },
      { title: 'Senior positioning', description: 'Leadership narrative. Strategic decisions. Business impact. Not "I made wireframes."' },
      { title: 'Modern market signals', description: 'AI fluency. Systems thinking. Cross-functional leadership. What 2025 hiring managers want.' },
      { title: 'Speed-focused', description: '2 weeks to interview-ready. Not 2 months of perfection.' }
    ],
    mechanismConclusion: 'Week 1: Documentation sprint. Week 2: Portfolio assembly. Week 3: Interviews start.',

    benefits: [
      'Rapid documentation framework (capture before you forget)',
      'NDA-safe case study templates',
      'Senior positioning narrative structure',
      'Modern signal integration (AI, systems, strategy)',
      '2-week interview-ready timeline',
      '"What went wrong" layoff narrative prep (for interviews)'
    ],

    testimonial: {
      quote: 'Laid off from Meta after 4 years. Portfolio was ancient. Spent first weekend documenting everything. Week 2, portfolio rebuilt. Week 3, interviewing. Offer by week 6. The speed mattered—I almost forgot half my impact metrics.',
      name: 'Chris L.',
      role: 'Senior Product Designer'
    },

    faqs: [
      { question: 'Do I need to know how to code?', answer: 'No, AI writes the code for you. Focus on documenting your senior-level impact and positioning.' },
      { question: 'What about NDA projects?', answer: 'We teach you exactly how to showcase NDA work legally and effectively. Most of your best work can be shown.' },
      { question: 'How is this different from a regular portfolio course?', answer: 'This is senior-specific: leadership narratives, strategic impact, modern hiring signals. Not junior portfolio basics.' },
      { question: 'How fast can I really rebuild?', answer: '2 weeks to interview-ready. The framework is designed for speed while memory is fresh.' }
    ],

    finalCtaTitle: 'Document Now. Position Senior.',
    finalCtaTitleHighlight: 'Land Fast.',
    finalCtaSubtitle: 'You didn\'t expect this. But you can respond fast.',
    finalCtaButton: 'Start the Rebuild'
  },

  i: {
    letter: 'I',
    route: '/i',
    stripeLink: 'https://buy.stripe.com/6oU00igIbdtx8Ix5X8gA81v',
    price: '$1',
    priceValue: 1,

    badge: 'Survival Mode Activated',
    headline: 'Unemployed?',
    headlineHighlight: 'Portfolio in 1 Day. Interviews in 2 Weeks.',
    subheadline: 'Every week without applications costs you $2K. Stop perfecting. Start shipping.',
    heroCta: 'Start the Sprint',

    problemTitle: 'The',
    problemTitleHighlight: 'Perfection Trap',
    problemIntro: [
      "You're unemployed. Maybe laid off. Maybe contract ended.",
      "You have 0-3 months of runway.",
      "And you're spending it 'perfecting' your portfolio."
    ],
    problemPoints: [
      'Average salary: $100K/year = $2K/week',
      'Every week without applications = $2K lost',
      '4-8 weeks "building portfolio" = $8K-$16K burned',
      'Can\'t afford perfect. Need DONE.'
    ],
    problemData: [
      { label: 'Lost per week', value: '$2,000' },
      { label: 'Typical portfolio time', value: '4-8 weeks' },
      { label: 'Money burned', value: '$8K-$16K' }
    ],
    problemConclusion: 'Speed beats perfection when survival is at stake.',

    mechanismTitle: 'The',
    mechanismTitleHighlight: '1-Day Portfolio Sprint',
    mechanismIntro: 'Flip the script: Ship first, iterate live:',
    mechanismSteps: [
      { title: 'Day 1 Morning', description: 'Framework download, project selection' },
      { title: 'Day 1 Afternoon', description: 'Case study reframes (metrics-first, not process-first)' },
      { title: 'Day 1 Evening', description: 'Portfolio deployed, LinkedIn updated' },
      { title: 'Day 2+', description: 'Send first 10 applications. Get feedback. Iterate live.' }
    ],
    mechanismConclusion: 'A shipped portfolio proves you can ship. "Still working on it" proves nothing.',

    benefits: [
      '1-day portfolio sprint framework',
      'Metrics-first case study template (3-second scan optimized)',
      '"Good enough" quality checklist',
      'Rapid application strategy (10/day sustainable pace)',
      'Interview-ready in 7-14 days timeline',
      'Survival mindset reset (done > perfect)'
    ],

    testimonial: {
      quote: 'Laid off with 6 weeks runway. Was spending all my time "perfecting" portfolio. Did the 1-day sprint on Saturday. Applied to 40 jobs by Wednesday. Had 3 interviews by week 2. Offer by week 4.',
      name: 'Morgan P.',
      role: 'Product Designer'
    },

    faqs: [
      { question: 'Do I need to know how to code?', answer: 'No, AI writes the code for you. Focus on shipping fast and iterating based on real feedback.' },
      { question: 'Won\'t a rushed portfolio hurt my chances?', answer: 'A shipped "good enough" portfolio gets callbacks. A perfect portfolio in your head gets nothing.' },
      { question: 'What if I get rejected?', answer: 'Rejections are data. Each one tells you what to tweak. That\'s why we ship fast and iterate.' },
      { question: 'How do I know when it\'s "good enough"?', answer: 'We give you a specific checklist. When you hit those criteria, you ship. No perfectionism allowed.' }
    ],

    finalCtaTitle: 'Stop Perfecting.',
    finalCtaTitleHighlight: 'Start Shipping.',
    finalCtaSubtitle: 'Every week costs you $2K. Ship tomorrow. Apply Monday. Interview by week 2.',
    finalCtaButton: 'Start the Sprint'
  }
}
