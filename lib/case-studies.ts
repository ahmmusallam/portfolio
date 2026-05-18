export type ProcessStage = {
  label: string;
  detail: string;
  items?: string[];
};

export type Metric = {
  value: string;
  label: string;
  context?: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  company: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  team: string[];
  tools: string[];
  nda: boolean;
  overview: string;
  problem: string[];
  process: ProcessStage[];
  insights?: {
    title: string;
    content: string;
  }[];
  solution: string;
  metrics: Metric[];
  reflection?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'session-replay',
    number: '01',
    title: 'Session Replay',
    subtitle: 'Redesigning a developer debugging tool to double enterprise adoption',
    company: 'Luciq (formerly Instabug)',
    category: 'Developer Tool / SaaS',
    year: '2024',
    role: 'Product Designer',
    timeline: '3 weeks · 1 cycle, 2 sprints',
    team: ['PM', 'Researcher', 'EM', 'Developers', 'Marketing'],
    tools: ['Figma', 'FigJam'],
    nda: false,
    overview:
      'Session Replay is a core tool for developers and product teams to diagnose user behavior and issues. The list view lacked clarity and immediate interpretability — especially for new users. This project restructured the IA and terminology to make critical signals scannable at a glance.',
    problem: [
      'Ambiguous parameters in the list view made labels hard to interpret',
      'Users could not understand session severity without opening individual sessions',
      '"Unidentified User" messaging was misleading when an ID was actually present',
      'Badges and metrics had no consistent meaning across customer interviews',
    ],
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: ['Dig into complaints, logs, usability data', 'PM sync to align on customer insights'],
      },
      {
        label: 'Define',
        detail: 'Problem Framing',
        items: ['Frame the problem space and clarify scope', 'Technical alignment with EM to avoid blockers'],
      },
      {
        label: 'Ideate',
        detail: 'Squad Pre-planning',
        items: ['Refinement and sync with PM and squad', 'Design Chapter feedback across designers'],
      },
      {
        label: 'Test',
        detail: 'Usability Testing',
        items: ['Run light tests in customer sync calls', 'Product Review with PM, EM, CPO, CTO'],
      },
      {
        label: 'Implement',
        detail: 'Iteration & Handoff',
        items: ['Refine, handoff to devs, support implementation'],
      },
    ],
    insights: [
      {
        title: 'User ID Confusion',
        content: '"I always thought it was the ID of the session and not the ID of the user." — CarMax',
      },
      {
        title: 'Badges Misunderstood',
        content: '"Could you explain what network 9+ means? I don\'t know." — CarMax',
      },
      {
        title: 'Severity Isn\'t Obvious',
        content: '"I\'m not sure how these \'frustrating\' tags are calculated." — Property Finder',
      },
      {
        title: 'Unidentified User',
        content: '"Even though we\'re identifying users with an ID, the UI still says \'Unidentified user\' — which is misleading." — CarMax',
      },
    ],
    solution:
      'Restructured the IA of the Session Replay table to establish a clearer hierarchy and reduce cognitive load. Introduced dedicated columns for user ID, email, session status, and badges. Added severity colors to issue badges so users could spot critical signals without navigating into cluttered details. Replaced "Unidentified User" with "Anonymous" when email/name isn\'t available. Capped badges to 4–5 per session based on real session data analysis (89.65% of sessions had 0 badges, validating the cap).',
    metrics: [
      { value: '30%', label: 'Drop in support tickets', context: 'Related to SR list confusion' },
      { value: '2x', label: 'Enterprise customer growth', context: '7 → 14 active customers in 4 months' },
      { value: '4–5', label: 'Max badges per session', context: 'Data-validated cap' },
    ],
    reflection:
      'Real data validation early in the process gave the team confidence to make opinionated cuts to the UI without endless debate.',
  },
  {
    slug: 'smartresolve',
    number: '02',
    title: 'SmartResolve',
    subtitle: 'Evolving an AI crash-fix agent from static suggestions to a contextual workflow',
    company: 'Luciq (formerly Instabug)',
    category: 'AI Developer Tool / SaaS',
    year: '2024',
    role: 'Product Designer',
    timeline: '3 weeks · 1 cycle, 2 sprints',
    team: ['PM', 'Researcher', 'EM', 'Developers', 'Marketing'],
    tools: ['Figma', 'FigJam'],
    nda: false,
    overview:
      'SmartResolve accelerates crash resolution by generating AI-powered code fixes. Early versions only provided 3 to 5 static suggestions per crash, often missing context from developers that may help generate more relevant fixes tailored to their project structure.',
    problem: [
      'AI-generated fixes lacked accuracy without additional context',
      'Competitors like Sentry AutoFix, Firebase Gemini, and Raygun AI set higher expectations for interactive AI tools',
      'Developers wanted to guide the AI with project context, similar to chat-like interactions in other tools',
      'Multiple fix suggestions caused confusion when differences were subtle',
    ],
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: ['6 developer interviews with Staff & Senior Engineers', 'Competitive analysis of AI dev tools'],
      },
      {
        label: 'Define',
        detail: 'Problem Framing',
        items: ['Frame the problem space and clarify scope', 'Technical alignment with EM'],
      },
      {
        label: 'Ideate',
        detail: 'Squad Pre-planning',
        items: ['Apply feedback and sync with PM and squad', 'Design Chapter feedback for cross-product impact'],
      },
      {
        label: 'Test',
        detail: 'Product Review',
        items: ['Present to PMs, EMs, CPO, CTO for feedback', 'Usability testing with internal developers'],
      },
      {
        label: 'Implement',
        detail: 'Iteration & Handoff',
        items: ['Refine, handoff to devs, support implementation'],
      },
    ],
    insights: [
      {
        title: 'AI Usage',
        content: 'Developers use Cursor, Claude, ChatGPT daily. "I use Cursor daily, it\'s lightweight with great autocomplete."',
      },
      {
        title: 'Multiple Fix Confusion',
        content: 'Subtle or incorrect fixes reduced trust quickly. "If the differences are subtle, I won\'t waste time reviewing." "One bad experience and I might never use it again."',
      },
      {
        title: 'Contextual Feedback',
        content: 'Developers wanted to guide the AI with project context. "I think three blind guesses don\'t help."',
      },
    ],
    solution:
      'Pivoted from a drawer-based context input to an inline context field directly inside the fix flow. This kept the experience focused, prepared for future automation, and aligned with the long-term vision of SmartResolve as a fully automated crash-to-store pipeline. Developers can now provide crash context, regenerate tailored fixes based on feedback, iterate up to 5 times per crash, use example prompts, and rate fixes with thumbs up/down.',
    metrics: [
      { value: '12', label: 'New customers onboarded', context: 'Within 3 months of rollout' },
      { value: '20', label: 'Pull requests generated', context: 'Using SmartResolve' },
      { value: '5×', label: 'Iterations per crash', context: 'Up from a single static fix' },
    ],
    reflection:
      'This evolution turned SmartResolve into an adaptive AI assistant that blends automation with developer control to improve accuracy, build trust, and streamline the crash fix workflow.',
  },
  {
    slug: 'superpay-dashboard',
    number: '03',
    title: 'SuperPay Dashboard',
    subtitle: 'A fintech merchant dashboard balancing simplicity, scale, and ambition',
    company: 'e& (Etisalat Egypt)',
    category: 'Fintech / SaaS',
    year: '2023',
    role: 'Product Designer',
    timeline: '12+ weeks · 3+ weeks research, 9 weeks design',
    team: ['3 Product Designers', '2 Developers', '1 Project Manager'],
    tools: ['Adobe', 'Figma', 'Google Slides'],
    nda: true,
    overview:
      'e& was shifting from a traditional telco into a software solutions provider. SuperPay was developed as a strategic product to position the company in Egypt\'s rapidly growing fintech sector. The merchant dashboard had to serve small and medium businesses managing online payments, balances, and transactions in one place.',
    problem: [
      'Existing dashboards were either too technical (built for finance pros) or too shallow (surface-level data only)',
      'Merchants needed something simple, insightful, and scalable',
      'The product had to differentiate e& from its legacy telco positioning',
    ],
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: ['Competitive analysis of international & local fintech dashboards', 'Stakeholder interviews to align with e&\'s fintech vision', 'Merchant interviews to capture root pain points'],
      },
      {
        label: 'Define',
        detail: 'Synthesis',
        items: ['Synthesized findings into a prioritized feature list', 'Aligned with stakeholders'],
      },
      {
        label: 'Ideate',
        detail: 'Information Architecture',
        items: ['Created IA: hierarchy of KPIs + trends + detailed data', 'Mapped navigation around core tasks'],
      },
      {
        label: 'Design',
        detail: 'Wireframes',
        items: ['Early sketches exploring KPI placements and data tables', 'Wireframes to test hierarchy and grouping'],
      },
      {
        label: 'Test',
        detail: 'Iteration',
        items: ['Aligned continuously with PMs and business stakeholders', 'Incorporated usability testing from merchants'],
      },
      {
        label: 'Refine',
        detail: 'Delivery',
        items: ['Delivered a high-fidelity UI with clear card layout for KPIs', 'Established a design system for fintech modules'],
      },
    ],
    solution:
      'Established a scalable design system of components, typography, and patterns. The dashboard surfaces KPI cards at the top (Due Transfers, Sales Today, Balance, New Customers) for at-a-glance performance. A payment progress chart shows monthly income vs expenses for spotting trends. Top Customers & Products sections support upselling. Recent Transactions stays clean with clear status indicators (Completed, Pending, Refund). The system supports responsive layouts across desktop and mobile.',
    metrics: [
      { value: 'Live', label: 'Product launched', context: 'Live in market' },
      { value: '12+', label: 'Weeks end-to-end', context: 'Research to handoff' },
      { value: '1', label: 'Cohesive design system', context: 'For future fintech modules' },
    ],
    reflection:
      'Designing from scratch means shaping product vision — balancing simplicity, collaboration, and scalability to deliver impact.',
  },
  {
    slug: 'superpay-website',
    number: '04',
    title: 'SuperPay Website',
    subtitle: 'A marketing site to launch e&\'s fintech entry into the Egyptian market',
    company: 'e& (Etisalat Egypt)',
    category: 'Fintech / Marketing Website',
    year: '2023',
    role: 'Product Designer',
    timeline: '12+ weeks · 3+ weeks research, 9 weeks design',
    team: ['3 Product Designers', '2 Developers', '1 Project Manager'],
    tools: ['Adobe', 'Figma', 'Google Slides'],
    nda: true,
    overview:
      'The public-facing SuperPay site needed to introduce e&\'s fintech vision to small and medium businesses across Egypt — communicating credibility, payment solutions, and developer resources in one cohesive experience.',
    problem: [
      'e&\'s legacy telco brand made fintech positioning a credibility challenge',
      'Competitive sites were either too dense or too generic for merchants',
      'Multiple audiences (merchants, developers, partners) had to be served on one site',
    ],
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: ['Competitive analysis of fintech sites', 'Stakeholder alignment on fintech vision'],
      },
      {
        label: 'Define',
        detail: 'Feature List',
        items: ['Comprehensive feature list presented as a unified starting point'],
      },
      {
        label: 'Ideate',
        detail: 'Information Architecture',
        items: ['Site map covering login, static views, developer guide, support'],
      },
      {
        label: 'Prototype',
        detail: 'Wireframes & UI',
        items: ['Low-fidelity wireframes from IA', 'High-fidelity prototypes following the design system'],
      },
      {
        label: 'Test',
        detail: 'Validation',
        items: ['4 user tests with iterations', 'Continuous stakeholder reviews'],
      },
    ],
    solution:
      'Built a marketing site with clear payment solution sections, merchant testimonials, partner logos, developer documentation entry points, and pricing. Style guide and design system ensured consistency with the SuperPay dashboard and other e& digital products.',
    metrics: [
      { value: '5', label: 'Process stages', context: 'From research to launch' },
      { value: '4', label: 'Usability tests', context: 'Drove key iterations' },
      { value: '1', label: 'Unified design system', context: 'Across web + product' },
    ],
    reflection:
      'Designing a marketing site under NDA constraints required strong collaboration with marketing and developers to maintain a single source of truth.',
  },
  {
    slug: 'bits-and-pixels',
    number: '05',
    title: 'Bits & Pixels',
    subtitle: 'Gamifying coding education for a unique mobile learning experience',
    company: 'Personal Project',
    category: 'EdTech / Mobile App',
    year: '2023',
    role: 'Product Designer',
    timeline: '4 weeks · 1 week research, 3 weeks design',
    team: ['2 Product Designers', '2 Developers', '1 Project Manager'],
    tools: ['Figma'],
    nda: true,
    overview:
      'A mobile-first coding education app explaining complicated coding "bits" with simple animated "pixels". The product needed to feel approachable for learners while being structured enough to support real curriculum.',
    problem: [
      'Traditional coding education feels intimidating to new learners',
      'Mobile-first coding apps often sacrifice depth for simplicity',
      'No clear way to revisit knowledge or correct mistakes in existing tools',
    ],
    process: [
      {
        label: 'Empathize',
        detail: 'UX Research',
        items: ['Audience research on new coders', 'Competitive review of coding learning apps'],
      },
      {
        label: 'Define',
        detail: 'IA',
        items: ['Comprehensive information architecture of app components and pages'],
      },
      {
        label: 'Ideate',
        detail: 'Wireframes',
        items: ['Translated IA into high-fidelity wireframes in Figma', 'Validated structure with stakeholders'],
      },
      {
        label: 'Prototype',
        detail: 'UI Design',
        items: ['Built the visual style: typography, illustrations, color', 'Designed game flow screens'],
      },
      {
        label: 'Implement',
        detail: 'Design System',
        items: ['Style guide and component system for handoff'],
      },
    ],
    solution:
      'A gamified course experience with review flows, mistake review, and game-based knowledge checks. The home screen surfaces "Review My Knowledge" prominently. Lessons are organized in a game-board metaphor with progression and locked stages. A consistent style guide and design system ensures coherence across digital products.',
    metrics: [
      { value: '4', label: 'Weeks end-to-end', context: 'Research to design system' },
      { value: '3', label: 'Core flows', context: 'Knowledge, Game, Profile' },
      { value: '1', label: 'Mobile design system', context: 'Reusable components' },
    ],
    reflection:
      'Designing for a learning audience taught me to lean into clarity — every screen has to teach as well as function.',
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
