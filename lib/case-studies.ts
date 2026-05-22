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

export type Goal = {
  number: string;
  content: string;
};

export type SolutionBullet = {
  text: string;
  ref?: string;
};

export type DataTableRow = {
  label: string;
  count: string;
  percentage: string;
};

export type DataAnalysis = {
  title: string;
  intro: string;
  bullets?: string[];
  conclusion?: string;
  table: DataTableRow[];
  tableHeaders?: [string, string, string];
  tableCaption?: string;
};

export type FinalSolutionBullet = {
  highlight?: string;
  text: string;
};

export type FinalSolution = {
  title: string;
  intro: string;
  bullets: FinalSolutionBullet[];
};

export type TimelineDetail = {
  summary: string;
  weeks: string[];
};

export type ImagePlaceholder = {
  label: string;
  caption?: string;
  src?: string;
  width?: number;
  height?: number;
};

export type Insight = {
  title: string;
  content?: string;
  bullets?: string[];
  quotes?: string[];
};

export type UserResearch = {
  headline: string;
  detail: string;
};

export type CompetitorFeature = {
  label: string;
  value: string;
  status?: 'positive' | 'negative' | 'partial' | 'neutral';
};

export type CompetitorCard = {
  name: string;
  image: ImagePlaceholder;
  features: CompetitorFeature[];
};

export type CompetitiveBenchmark = {
  title?: string;
  intro?: string;
  competitors: CompetitorCard[];
};

export type ImprovementOpportunities = {
  title: string;
  intro?: string;
  items: string[];
};

export type UsabilityTesting = {
  title: string;
  intro: string;
  items: string[];
  outcomeLabel?: string;
  outcome: string;
};

export type NextSteps = {
  title: string;
  impactLabel?: string;
  impactNote?: string;
  items: string[];
  note?: string;
};

export type IAFeature = {
  label: string;
  items?: string[];
  highlight?: boolean;
  subFeature?: {
    label: string;
    items?: string[];
  };
};

export type IASection = {
  label: string;
  features: IAFeature[];
};

export type InformationArchitecture = {
  root: string;
  sections: IASection[];
  note?: string;
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
  thumbnail?: string;
  sectionOrder?: string[];
  overview: string;
  problem: string[];
  problemIntro?: string;
  problemOutro?: string;
  process: ProcessStage[];
  insights?: Insight[];
  solution: string;
  solutionTitle?: string;
  solutionBullets?: SolutionBullet[];
  solutionOutro?: string;
  metrics: Metric[];
  reflection?: string;
  // Optional extended sections
  timelineDetail?: TimelineDetail;
  goals?: Goal[];
  userResearch?: UserResearch;
  competitiveBenchmark?: CompetitiveBenchmark;
  improvementOpportunities?: ImprovementOpportunities;
  dataAnalysis?: DataAnalysis;
  finalSolution?: FinalSolution;
  usabilityTesting?: UsabilityTesting;
  nextSteps?: NextSteps;
  informationArchitecture?: InformationArchitecture;
  images?: {
    overview?: ImagePlaceholder;
    insights?: ImagePlaceholder;
    solution?: ImagePlaceholder;
    postData?: ImagePlaceholder;
    finalSolution?: ImagePlaceholder[];
    usabilityTesting?: ImagePlaceholder;
    nextSteps?: ImagePlaceholder;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tender-assist',
    number: '01',
    title: 'AI Tender Assist Bid Management',
    subtitle:
      'AI-powered bid management platform for contractual review and team collaboration. Anchoring a product with €5.2M of projected value at scale.',
    company: 'VOIS',
    category: 'AI Platform / SaaS',
    year: '2026',
    role: 'Senior Product Designer',
    timeline: 'Ongoing · 2025–present',
    thumbnail: '/case studies/tender-assist.svg',
    team: ['PM', 'Researcher', 'EM', 'Developers', 'Data/AI'],
    tools: ['Figma', 'FigJam'],
    nda: true,
    overview:
      'Tender Assist is an AI-powered bid management platform that helps teams review contractual documents, surface risks, and respond to tenders faster. As Senior Product Designer at VOIS, I shaped the end-to-end experience for an enterprise product projected to drive €5.2M of value at scale.',
    problem: [
      'Contractual review was manual, slow, and error-prone across large bid documents',
      'Risk and compliance signals were buried, making them easy to miss',
      'Teams lacked a single, structured workspace to manage tenders end to end',
    ],
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: ['Stakeholder and user interviews', 'Map the current bid-review workflow'],
      },
      {
        label: 'Define',
        detail: 'Problem Framing',
        items: ['Frame risk & compliance pain points', 'Technical alignment with EM and the data/AI team'],
      },
      {
        label: 'Ideate',
        detail: 'Concepts',
        items: ['Explore AI-assisted review flows', 'Squad and Design Chapter feedback'],
      },
      {
        label: 'Test',
        detail: 'Validation',
        items: ['Usability testing with bid teams', 'Product reviews with stakeholders'],
      },
      {
        label: 'Implement',
        detail: 'Iteration & Handoff',
        items: ['Refine, handoff to devs, and support delivery'],
      },
    ],
    solution:
      'Placeholder — the detailed solution write-up is in progress.',
    metrics: [
      { value: '€5.2M', label: 'Projected value at scale', context: 'Enterprise bid management' },
      { value: 'AI', label: 'Assisted contractual review', context: 'Automated risk surfacing' },
      { value: 'Live', label: 'In active development', context: 'VOIS · Vodafone' },
    ],
    reflection:
      'Placeholder — reflection to be added as the project matures.',
  },
  {
    slug: 'session-replay',
    number: '02',
    title: 'Redesigning Session Replay List',
    subtitle:
      'Optimizing the developer debugging flow for enterprise adoption. The redesign doubled active enterprise customers from 7 to 14 within four months.',
    company: 'Luciq / Instabug',
    category: 'Developer Tool / SaaS',
    year: '2024',
    role: 'Product Designer',
    timeline: '2 sprints',
    thumbnail: '/case studies/session-replay-ui.png',
    sectionOrder: [
      'overview',
      'process',
      'insights',
      'problem',
      'goals',
      'dataAnalysis',
      'solution',
      'finalSolution',
      'chart',
      'reflection',
    ],
    team: ['PM', 'Researcher', 'EM', 'Developers'],
    tools: ['Figma', 'FigJam'],
    nda: false,
    overview:
      'At Instabug, Session Replay is a core tool for developers and product teams to diagnose user behavior and issues. However, the Session Replay list view lacked clarity and immediate interpretability, especially for new users. This project aimed to enhance the readability and usefulness of the list by making parameter labels more intuitive and visually restructuring key components based on user data and feedback.',
    problemIntro:
      'The Session Replay (SR) list view was populated with ambiguous parameters, especially on the left side, making it difficult for users to:',
    problem: [
      'Recognize the meaning of badges and metrics',
      'Identify what each piece of information represents',
      'Understand session severity levels without diving into session details',
      'Clarify user identity without "Unidentified User" messages',
    ],
    timelineDetail: {
      summary:
        'One cycle, split in 2 sprints (one for design and one for implementation), each one is 3 weeks.',
      weeks: [
        'Week 1: Research, define the problem',
        'Week 2: Ideate, prototype, get feedback',
        'Week 3: Test, iterate, handoff',
      ],
    },
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: [
          'Dig into complaints, logs, usability data',
          'PM sync, define problems from customer insights or competitive gaps',
        ],
      },
      {
        label: 'Define',
        detail: 'Problem Framing',
        items: [
          'Frame the problem space and clarify scope',
          'Technical alignment, early check with EM to avoid blockers',
        ],
      },
      {
        label: 'Ideate',
        detail: 'Squad Pre-planning',
        items: [
          'Refinement and sync with PM and squad',
          'Design Chapter feedback, share with designers for cross-product impact',
        ],
      },
      {
        label: 'Test',
        detail: 'Usability Testing',
        items: [
          'Run light tests in customer sync calls',
          'Product Review, present to PMs, EMs, CPO, CTO for feedback',
        ],
      },
      {
        label: 'Implement',
        detail: 'Iteration & Handoff',
        items: ['Refine, handoff to devs, and support implementation'],
      },
    ],
    insights: [
      {
        title: 'User ID Confusion',
        content:
          '"I always thought it was the ID of the session and not the ID of the user." — CarMax · "This ID is not clear to me. Is it the anonymous user ID or the ID of the session?" — Cummins',
      },
      {
        title: 'Badges Misunderstood',
        content:
          '"Could you explain what network 9+ means? I don\'t know." — CarMax · "Until I play the session, I can\'t understand what these badges represent." — Cummins',
      },
      {
        title: "Severity Isn't Obvious",
        content:
          '"I\'m not sure how these \'frustrating\' tags are calculated." — Property Finder',
      },
      {
        title: 'Unidentified User',
        content:
          '"Even though we\'re identifying users with an ID, the UI still says \'Unidentified user\' — which is misleading." — CarMax',
      },
    ],
    goals: [
      {
        number: '#1',
        content:
          'Increase the clarity of session information by making labels more descriptive.',
      },
      {
        number: '#2',
        content: 'Improve scannability through layout improvements.',
      },
      {
        number: '#3',
        content: 'Reduce the need to open individual sessions for context.',
      },
      {
        number: '#4',
        content:
          'Clarify ambiguous terminology like "Unidentified User" and badges.',
      },
    ],
    solutionTitle: 'Solution (iteration #1)',
    solution:
      'We focused on restructuring the information architecture of the Session Replay table to establish a clearer hierarchy and reduce cognitive load.',
    solutionBullets: [
      {
        text: 'Introduced dedicated columns for user ID, email, session status, and badges.',
        ref: 'Problem 1, 3',
      },
      {
        text: 'Provided consistent explanations across the interface using tooltips to minimize guesswork.',
      },
      {
        text: 'Added severity colors to the issues badges to quickly spot critical signals without navigating cluttered details.',
        ref: 'Problem 2',
      },
      {
        text: 'If email/name isn\'t available, display "Anonymous" instead of "Unidentified User".',
        ref: 'Problem 4',
      },
    ],
    dataAnalysis: {
      title: 'How many badges can be displayed, and in what order?',
      intro: 'We analyzed real session data to determine:',
      bullets: [
        'Which metrics were most frequently used across sessions?',
        'The optimal number of badges to display to preserve clarity without overwhelming users.',
      ],
      conclusion:
        'We then validated the top-shown badges and prioritized a consistent max count of 4–5 badges per session, based on recurrence and perceived importance across real data sets.',
      tableHeaders: ['Tags', 'Count', 'Percentage'],
      table: [
        { label: '0', count: '12,239,357,019', percentage: '89.65%' },
        { label: '1', count: '950,137,856', percentage: '6.96%' },
        { label: '2', count: '315,704,193', percentage: '2.31%' },
        { label: '3', count: '100,464,919', percentage: '0.88%' },
        { label: '4', count: '23,122,338', percentage: '1.17%' },
        { label: '5', count: '3,312,312', percentage: '0.124%' },
        { label: '6', count: '656,086', percentage: '0.0047%' },
        { label: '7', count: '17,833', percentage: '0.0003%' },
        { label: '8', count: '46', percentage: '0.0000003%' },
      ],
      tableCaption: 'Data from 1 month of sessions',
    },
    finalSolution: {
      title: 'The Final Solution',
      intro:
        'Following feedback from the product review and usability testing (including a color-blind participant), we refined the design to improve clarity and accessibility:',
      bullets: [
        {
          highlight: 'User Info Column',
          text: 'Combined user ID and email into one field, with a fallback to "Anonymous."',
        },
        {
          highlight: 'Issues column',
          text: 'Provided tooltips to support accessibility.',
        },
      ],
    },
    images: {
      overview: {
        label: 'Session Replay List (Before)',
        caption: 'Original list view — ambiguous labels and badges',
        src: '/case studies/session-replay-overview.png',
        width: 2766,
        height: 1984,
      },
      insights: {
        label: 'Annotated Session Replay List',
        caption: 'Problem callouts captured from customer interviews',
        src: '/case studies/session-replay-insights.png',
        width: 2800,
        height: 1398,
      },
      solution: {
        label: 'Iteration #1 — Restructured table',
        caption: 'Dedicated columns, severity colors, and Anonymous fallback',
      },
      postData: {
        label: 'Updated Session Replay List',
        caption: 'New SR list view with the 4–5 badge cap applied',
      },
      finalSolution: [
        {
          label: 'Final design — Combined User Info column',
          caption: 'User ID + email merged with Anonymous fallback',
        },
        {
          label: 'Final design — Tooltips on Issues column',
          caption: 'Accessibility-focused refinements from usability testing',
        },
      ],
    },
    metrics: [
      {
        value: '30%',
        label: 'Drop in support tickets',
        context: 'Related to SR list confusion',
      },
      {
        value: '2×',
        label: 'Enterprise customer growth',
        context: '7 → 14 active customers in 4 months',
      },
    ],
    reflection:
      'Real data and insights validation early in the process gave the team confidence to make decisions without endless debate.',
  },
  {
    slug: 'smartresolve',
    number: '03',
    title: 'SmartResolve AI Developer Tool',
    subtitle:
      'Designing an autonomous agent that generates fixes for app crashes. The workflow onboarded 12 new customers and facilitated 20 automated pull requests.',
    company: 'Instabug',
    category: 'AI Developer Tool / SaaS',
    year: '2024',
    role: 'Product Designer',
    timeline: '3 weeks · 1 cycle, 2 sprints',
    thumbnail: '/case studies/smartresolve-ui.png',
    team: ['PM', 'Researcher', 'EM', 'Developers', 'Marketing'],
    tools: ['Figma', 'FigJam'],
    nda: false,
    overview:
      'SmartResolve accelerates crash resolution by generating AI-powered code fixes. Early versions only provided 3 to 5 static suggestions per crash, often missing context from developers, which may help generate more relevant fixes tailored to their project structure.',
    problem: [
      'AI-generated fixes lacked accuracy without additional context',
      'Competitors like Sentry AutoFix, Firebase Gemini, and Raygun AI set higher expectations for interactive AI tools',
    ],
    problemOutro:
      'We needed to evolve SmartResolve from static suggestions to an iterative, developer-guided AI workflow.',
    timelineDetail: {
      summary:
        'One cycle, split into 2 sprints (one for design and one for implementation), each one is 3 weeks.',
      weeks: [
        'Week 1: Research, define the problem',
        'Week 2: Ideate, prototype, get feedback',
        'Week 3: Test, iterate, handoff',
      ],
    },
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: [
          'Conduct interviews and competitive analysis',
          'PM Sync — define problems from interview themes and competitor gaps',
        ],
      },
      {
        label: 'Define',
        detail: 'Problem Framing',
        items: [
          'Frame the problem space and clarify scope',
          'Technical Alignment — early check with EM to avoid blockers',
        ],
      },
      {
        label: 'Ideate',
        detail: 'Squad Pre-planning',
        items: [
          'Refinement & Squad Pre-planning — apply feedback and sync with PM and squad',
          'Design Chapter Feedback — share with designers for cross-product impact',
        ],
      },
      {
        label: 'Test',
        detail: 'Product Review',
        items: [
          'Product Review — present to PMs, EMs, CPO, CTO for feedback',
          'Usability Testing — conduct usability testing',
        ],
      },
      {
        label: 'Implement',
        detail: 'Iteration & Handoff',
        items: ['Refine, handoff to devs, and support implementation'],
      },
    ],
    userResearch: {
      headline: '6 Developer Interviews',
      detail:
        'Roles: Staff & Senior Frontend Engineers, Backend Developers, Android Developers, Engineering Managers',
    },
    insights: [
      {
        title: 'AI Usage',
        bullets: [
          'Developers frequently use Cursor, Claude, and ChatGPT for assistance',
          'AI is expected to support autocomplete, refactoring, and logic debugging',
        ],
        quotes: ['"I use Cursor daily, it\'s lightweight with great autocomplete."'],
      },
      {
        title: 'Multiple Fix Confusion',
        bullets: [
          'Multiple fix suggestions often caused confusion',
          'Subtle or incorrect fixes reduced trust quickly',
        ],
        quotes: [
          '"If the differences are subtle, I won\'t waste time reviewing."',
          '"One bad experience and I might never use it again."',
        ],
      },
      {
        title: 'Contextual Feedback',
        bullets: [
          'Developers wanted to guide the AI with the project context',
          'Expectations were shaped by chat-like interactions in other tools',
        ],
        quotes: ['"I think three blind guesses don\'t help."'],
      },
    ],
    competitiveBenchmark: {
      title: 'Competitive Benchmark',
      intro:
        'We benchmarked SmartResolve against the AI crash-fix landscape to find clear improvement opportunities.',
      competitors: [
        {
          name: 'Sentry',
          image: {
            label: 'Sentry AutoFix UI',
            caption: 'Line-level feedback with PR integration',
          },
          features: [
            { label: 'Contextual Feedback', value: 'Line-level feedback', status: 'positive' },
            { label: 'AI Code Fix', value: 'Yes', status: 'positive' },
            { label: 'PR Integration', value: 'Yes', status: 'positive' },
          ],
        },
        {
          name: 'Firebase',
          image: {
            label: 'Firebase Gemini UI',
            caption: 'Context-aware insights without inline fixes',
          },
          features: [
            { label: 'Contextual Feedback', value: 'Insights improve with context', status: 'positive' },
            { label: 'AI Code Fix', value: 'No', status: 'negative' },
            { label: 'PR Integration', value: 'No', status: 'negative' },
          ],
        },
        {
          name: 'Raygun AI',
          image: {
            label: 'Raygun AI UI',
            caption: 'Chat-based fix suggestions',
          },
          features: [
            { label: 'Contextual Feedback', value: 'Chat-based suggestions', status: 'positive' },
            { label: 'AI Code Fix', value: 'Partial', status: 'partial' },
            { label: 'PR Integration', value: 'No', status: 'negative' },
          ],
        },
      ],
    },
    improvementOpportunities: {
      title: 'Improvement Opportunities',
      items: [
        'Provide one initial fix with options to regenerate based on feedback',
        'Allow project-specific context input',
        'Combine AI-generated fixes, contextual feedback, and pull request automation all in a focused and developer-friendly experience.',
      ],
    },
    solutionTitle: 'Design Iteration: Evolving the Context Input',
    solution:
      'The first version of the design placed the context input field inside a drawer with the code fix details. But after design team discussions and a product review with PMs, Engineering Managers, CTO, CPO, and Designers, we pivoted to an inline context input:',
    solutionBullets: [
      { text: 'Keeps the experience focused' },
      { text: 'Prepares for future automation stages where not every action requires context' },
      { text: 'Keeps the drawer space flexible for future features like deploying fixes to the store' },
    ],
    solutionOutro:
      'The inline approach aligned better with the long-term vision of SmartResolve evolving into a fully automated crash-to-store pipeline, minimizing user friction along the way.',
    finalSolution: {
      title: 'The Final Solution',
      intro: 'Following feedback from the product review, developers can:',
      bullets: [
        { text: 'Provide crash context, assumptions, or project details' },
        { text: 'Regenerate tailored fixes based on feedback' },
        { text: 'Iterate up to 5 times per crash' },
        { text: 'Use example prompts to guide effective input' },
        { text: 'Use "thumbs up/down" as a quick feedback per fix' },
      ],
    },
    usabilityTesting: {
      title: 'Usability Testing & Outcome',
      intro: 'After rollout, we tested the new experience with internal developers:',
      items: [
        'Feedback input felt intuitive and easy to use',
        'Regenerated fixes aligned better with project needs',
        'Higher satisfaction compared to static suggestions',
      ],
      outcomeLabel: 'Outcome',
      outcome:
        "Positive developer feedback led to a full rollout. However, we received feedback on the agent's reasoning. Thus, in the final iteration, we enhanced the agent experience by adding micro-interactions and reasoning.",
    },
    metrics: [
      { value: '12', label: 'New customers onboarded', context: 'Within 3 months from rollout' },
      { value: '20', label: 'Pull requests generated', context: 'Using SmartResolve' },
      { value: '5×', label: 'Max iterations per crash', context: 'Up from a single static fix' },
    ],
    nextSteps: {
      title: 'Next Steps',
      impactLabel: 'Impact',
      impactNote: 'Within 3 months from rollout',
      items: [
        'Full rollout to active SmartResolve users',
        'Monitor success rates, regeneration quality, and adoption',
        'Gather ongoing developer feedback to plan next iterations',
      ],
      note: 'If adoption and numbers are promising, we plan to introduce a wider code preview for better change visibility, as this was a clear developer request during interviews.',
    },
    images: {
      overview: {
        label: 'SmartResolve — Original UI',
        caption: 'List of possible fixes with crash summary (Before)',
      },
      solution: {
        label: 'Design Iteration — Inline context input',
        caption: 'Pivoted from a drawer to inline for focus and future automation',
      },
      finalSolution: [
        {
          label: 'Final design — Fix flow with iterations',
          caption: 'Context input, regenerate, thumbs up/down',
        },
      ],
      usabilityTesting: {
        label: 'Final agent experience — micro-interactions & reasoning',
        caption: 'Step-by-step reasoning added in the final iteration',
      },
      nextSteps: {
        label: 'Future direction — wider code preview',
        caption: 'Planned enhancement based on developer interviews',
      },
    },
    reflection:
      'This evolution turned SmartResolve into an adaptive AI assistant that blends automation with developer control to improve accuracy, build trust, and streamline the crash fix workflow.',
  },
  {
    slug: 'superpay-dashboard',
    number: '04',
    title: 'SuperPay Merchant Platform',
    subtitle: 'A fintech dashboard for online merchants, balancing simplicity and scale.',
    company: 'e& (Etisalat Egypt)',
    category: 'Fintech / SaaS',
    year: '2023',
    role: 'Product Designer',
    timeline: '12+ weeks · 3+ weeks research, 9 weeks design',
    team: ['3 Product Designers', '2 Developers', '1 Project Manager'],
    thumbnail: '/case studies/superpay-dashboard-ui.png',
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
    informationArchitecture: {
      root: 'SuperPay (Merchant)',
      sections: [
        {
          label: 'Sign In',
          features: [
            { label: 'Username / email' },
            { label: 'Password' },
            { label: 'Forgot password' },
          ],
        },
        {
          label: 'Start Now',
          features: [
            { label: 'Register by service call' },
            {
              label: 'Register by fill form',
              items: [
                'Phone number (OTP)',
                'User name',
                'Email',
                'Password creation',
                'Password validation',
              ],
              subFeature: {
                label: 'Complete account info (optional)',
                items: [
                  'Company / shop name',
                  'National ID',
                  'Tax ID',
                  'Commercial registration',
                  'SuperPay contract',
                  'Bank account details',
                ],
              },
            },
          ],
        },
        {
          label: 'Home (Dashboard)',
          features: [
            {
              label: 'Header',
              items: [
                'Logo',
                'Menu',
                'Notifications',
                'Account settings',
                'Language (Arabic & English)',
              ],
            },
            { label: 'Create product' },
            { label: 'Create invoice' },
            {
              label: 'Statistics (overview by date)',
              items: [
                'Balance (in wallet)',
                'Sales progress',
                'Conversion rate (money transferred)',
                'Successful & failed payments',
                'New customers',
              ],
            },
            { label: 'Recent transactions' },
            { label: 'Support form (Contact us)' },
          ],
        },
        {
          label: 'Payments',
          features: [
            {
              label: 'Transactions',
              items: ['View transactions', 'Export transactions', 'Search'],
            },
            {
              label: 'Transfers',
              items: [
                'Bank account (details)',
                'Bills balance (details)',
                'Transfers summary',
              ],
            },
          ],
        },
        {
          label: 'Payment share links',
          features: [
            { label: 'View share links' },
            { label: 'Export share links' },
            { label: 'Create share link' },
          ],
        },
        {
          label: 'Reports',
          features: [
            {
              label: 'Reports types',
              items: ['Transactions', 'Orders', 'Invoices', 'Transfers'],
            },
            { label: 'View reports' },
            { label: 'Filter / search by report type & date range' },
            { label: 'Add new report layout', highlight: true },
          ],
        },
        {
          label: 'Customers',
          features: [
            { label: 'Add new customer' },
            { label: 'View customers' },
            { label: 'Quick search' },
          ],
        },
        {
          label: 'Charge-back management',
          features: [
            { label: 'View charge-backs' },
            { label: 'View total amount' },
            { label: 'Search' },
          ],
        },
        {
          label: 'Product management',
          features: [
            { label: 'Add new products (manually & bulk)' },
            {
              label: 'My products',
              items: [
                'View products',
                'Export products',
                'Filter / search for a product',
              ],
            },
            { label: 'Add promo codes', highlight: true },
          ],
        },
        {
          label: 'Invoices management',
          features: [
            { label: 'Create invoices (manually & bulk)' },
            {
              label: 'My invoices',
              items: ['View invoices', 'Export invoices', 'Filter / search for invoice'],
            },
            {
              label: 'Subscription (pricing model)',
              items: ['View subscriptions'],
            },
          ],
        },
      ],
      note: 'Payment share links can also be generated from the Invoices and Products contexts — cross-linked entry points support the same primary task surface.',
    },
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
    number: '05',
    title: 'SuperPay Website',
    subtitle: 'A marketing site to launch e&\'s fintech entry into the Egyptian market',
    company: 'e& (Etisalat Egypt)',
    category: 'Fintech / Marketing Website',
    year: '2023',
    role: 'Product Designer',
    timeline: '12+ weeks · 3+ weeks research, 9 weeks design',
    thumbnail: '/case studies/superpay-website-ui.png',
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
    number: '06',
    title: 'Bits & Pixels',
    subtitle: 'Gamifying coding education for a unique mobile learning experience',
    company: 'Personal Project',
    category: 'EdTech / Mobile App',
    year: '2023',
    role: 'Product Designer',
    timeline: '4 weeks · 1 week research, 3 weeks design',
    thumbnail: '/case studies/bits-and-pixels-ui.png',
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
