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
  /** Optional bold lead-in rendered before the body text. */
  highlight?: string;
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
  /** Intro paragraph(s). Use `\n\n` to separate paragraphs. */
  intro: string;
  bullets: FinalSolutionBullet[];
  /** Optional closing paragraph(s) after the bullets. Use `\n\n` to separate. */
  outro?: string;
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

export type CompetitiveAnalysis = {
  title: string;
  intro: string;
  screenshots: ImagePlaceholder[];
};

export type FeatureGroup = {
  label: string;
  items: string[];
};

export type FeatureList = {
  title: string;
  intro?: string;
  groups: FeatureGroup[];
};

export type IdeationStage = {
  label: string;
  description?: string;
  images: ImagePlaceholder[];
};

export type Ideation = {
  title?: string;
  intro?: string;
  stages: IdeationStage[];
};

export type RefinementCard = {
  label: string;
  description: string;
  image: ImagePlaceholder;
};

export type Refinement = {
  title?: string;
  intro?: string;
  cards: RefinementCard[];
};

/** Large single-metric callout placed inline within the Problem section. */
export type ProblemCallout = {
  value: string;
  caption: string;
};

/** Richer problem-section card with a topic label above the body text. */
export type ProblemCard = {
  label: string;
  /** Body text. Supports `**bold**` and `*italic*` markers. */
  text: string;
};

/** One phase of a research workflow journey map. */
export type WorkflowPhase = {
  label: string;
  description?: string;
  /** Step bodies. Each supports `**bold**` and `*italic*` markers. */
  steps: string[];
};

/** Journey-map style research section showing an end-to-end workflow. */
export type WorkflowResearch = {
  title?: string;
  /** Intro paragraph(s). Supports `\n\n` paragraph splits and rich markers. */
  intro?: string;
  phases: WorkflowPhase[];
  /** Closing paragraph(s). Supports `\n\n` splits and rich markers. */
  outro?: string;
  /** Optional artifact image rendered at the bottom (e.g., the original Miro board). */
  image?: ImagePlaceholder;
};

/**
 * Block-based content used by Chapter sections to express long-form prose
 * mixing paragraphs, pull quotes, asides, lists, and images.
 */
export type ChapterBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'aside'; label: string }
  | { kind: 'list'; intro?: string; items: string[] }
  | { kind: 'image'; image: ImagePlaceholder }
  | { kind: 'imageGrid'; images: ImagePlaceholder[] };

export type Chapter = {
  /** Section mono label. */
  mono: string;
  title: string;
  blocks: ChapterBlock[];
};

export type OutcomeImpact = {
  label: string;
  description: string;
  link?: { label: string; href: string };
};

export type OutcomesReflection = {
  title?: string;
  /** Body text supports **bold** markers for highlighted spans. */
  intro: string;
  impacts: OutcomeImpact[];
  /** Closing reflection. Supports **bold** markers. */
  closing?: string;
};

export type ImprovementOpportunities = {
  title: string;
  intro?: string;
  items: string[];
};

export type UsabilityTesting = {
  title: string;
  /** Intro paragraph(s). Use `\n\n` to separate paragraphs. Supports **bold** and *italic* markers. */
  intro: string;
  /** Bullet items. Each string supports **bold** and *italic* markers. */
  items: string[];
  /** Optional pull quotes rendered between intro and items. */
  quotes?: string[];
  outcomeLabel?: string;
  /** Outcome paragraph(s). Use `\n\n` to separate. Supports **bold** and *italic* markers. */
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
  locked?: boolean;
  thumbnail?: string;
  sectionOrder?: string[];
  overview: string;
  /** Optional pull-card rendered to the right of the overview prose. */
  overviewHighlight?: {
    /** Big hero value, e.g., "€5.2M". */
    value: string;
    /** Short caption shown beneath the value. */
    caption?: string;
    /** Supporting paragraph(s). Supports `**bold**`, `*italic*`, and `\n\n` splits. */
    detail?: string;
  };
  /** Optional role/scope section rendered right after Overview. Supports `\n\n` paragraph splits. */
  myRole?: string;
  /** Optional closing-style section for style guides / design system writeups. */
  designSystem?: {
    title?: string;
    /** Body paragraph(s). Supports `\n\n` paragraph splits and `**bold**` / `*italic*` markers. */
    body: string;
  };
  problem: string[];
  /** Optional intro paragraph(s) before the problem list. Supports `\n\n` paragraph splits. */
  problemIntro?: string;
  /** Optional outro paragraph(s) after the problem list. Supports `\n\n` paragraph splits. */
  problemOutro?: string;
  /** Inline big-number callout rendered inside the Problem section. */
  problemCallout?: ProblemCallout;
  /** Optional richer cards (label + body) rendered in place of `problem` strings. */
  problemCards?: ProblemCard[];
  /** Optional journey-map research section, typically between Problem and Solution. */
  workflowResearch?: WorkflowResearch;
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
  competitiveAnalysis?: CompetitiveAnalysis;
  featureList?: FeatureList;
  ideation?: Ideation;
  refinement?: Refinement;
  outcomesReflection?: OutcomesReflection;
  /** Block-based long-form chapters, e.g., extended iterations like UC3. */
  chapters?: Chapter[];
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
    solutionGallery?: ImagePlaceholder[];
    /** Image grid rendered after the solution text/bullets (does not hide the prose). */
    solutionGrid?: ImagePlaceholder[];
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
    title: 'Designing AI that experts will trust.',
    subtitle:
      'Turning hundreds of pages of contractual chaos into something bid teams can actually act on.',
    company: 'VOIS · Vodafone Germany',
    category: 'Enterprise AI / Tender Management',
    year: '2026',
    role: 'Senior Product Designer',
    timeline: '9 months',
    thumbnail: '/case studies/tender-assist.jpg',
    team: ['PM', 'Engineering', 'Bid stakeholders'],
    tools: ['Figma', 'FigJam'],
    nda: true,
    locked: true,
    sectionOrder: [
      'overview',
      'myRole',
      'problem',
      'workflowResearch',
      'solution',
      'usabilityTesting',
      'finalSolution',
      'chapters',
      'outcomesReflection',
    ],
    overview:
      "Tender documents are how Vodafone Germany wins (or loses) tens of millions of euros in business. Each tender can contain over 100 documents (contracts, price sheets, technical annexes, scanned PDFs) that legal, finance, sales, operations, and bid management teams must reconcile under tight deadlines. Miss a contradiction in a service-level clause, and the cost is real.\n\nTender Assistant is an AI-powered web product I designed at VOIS to help these teams do this work faster and with more confidence. It analyzes hundreds of pages, extracts critical commercial points, surfaces contradictions across documents, and now, in its third use case, helps teams turn the answers they receive into strategy: what changed, what's risky, and what to ask next.",
    overviewHighlight: {
      value: '€5.2M',
      caption: 'Projected value at scale',
      detail:
        'Use cases 1 and 2 launched and have been adopted by **100+ users**. Use case 3 was design-complete at handoff.',
    },
    myRole:
      "I joined Tender Assistant at kickoff as the sole product designer, working alongside the product owner and engineering team within VOIS, Vodafone's tech delivery organization. The project ran for 9 months across three use cases, with weekly stakeholder syncs with Vodafone Germany's bid teams.\n\nI owned the end-to-end design: research, user flows, interaction design, AI patterns, prototyping, and usability testing.",
    problemIntro:
      "A tender at Vodafone Germany is shaped by three forces. Each is manageable alone; together, they break the manual workflow bid teams had relied on for years.",
    problem: [],
    problemCards: [
      {
        label: 'Volume',
        text:
          'A single tender can run to **100+ documents**: contracts, annexes, pricing sheets, scanned PDFs with handwritten notes. Hundreds of pages to read before anyone can take a position.',
      },
      {
        label: 'Cross-functional review',
        text:
          'Five or six departments read the same tender, each from a different angle. Legal scans for liability clauses. Finance reads payment terms and SLAs. Bid management has to make all of it agree.',
      },
      {
        label: 'Cost of contradiction',
        text:
          "Contradictions sit across files, written by different people, sometimes months apart. A clash between a contract clause and a pricing line, easy to miss across hundreds of pages, could translate into **millions of euros of exposure**.",
      },
    ],
    problemOutro:
      "Bid teams handled this manually: read, take notes, meet for hours to align, copy-paste between documents, and hope nothing slipped through.\n\nAI changes the math. It can read every document at once and compare every clause to every other clause. But the teams who would use it aren't AI-native. They're legal experts and bid managers, mostly 40+, working under high stakes, and they need to *trust* what the system gives them before they'll act on it.",
    workflowResearch: {
      title: 'Mapping the real workflow',
      intro:
        "Before any wireframes, I worked with bid managers, legal, and finance to map the full tender lifecycle. What came out wasn't a clean linear process. It was a multi-month cycle of independent reading, cross-functional drafting, public Q&A rounds, and re-analysis. The map became the spine of every design decision that followed.",
      phases: [
        {
          label: 'Independent reading',
          description: 'Everyone reads the tender on their own, in their own way.',
          steps: [
            'The awarding organization opens the tender and sends the documents, including an Excel template where bidders enter their questions.',
            'The whole team works through every document and every Tender Assist report.',
            'Each person flags passages or topics they have questions about, in their own style and notation.',
          ],
        },
        {
          label: 'Drafting questions together',
          description: 'Cross-functional alignment turns notes into submitted questions.',
          steps: [
            'The bid manager runs the Q&A round like a project manager. Timelines, deadlines, internal meetings are all tracked.',
            "Cross-functional meetings: legal, finance, bid management draft questions together. The goal is to push the awarding organization to change the documents in Vodafone's favor, without revealing strategic weaknesses to competitors.",
            "Agreed questions go into the awarding organization's Excel and get submitted. Competitors do the same, in parallel.",
          ],
        },
        {
          label: 'Public consolidation',
          description: 'The awarding org republishes one consolidated sheet to all bidders.',
          steps: [
            "The awarding organization collects every bidder's questions, anonymizes them, adds answers, and republishes one consolidated Excel.",
            'Every bidder, Vodafone and competitors alike, receives the same sheet. You read answers to questions you never asked.',
          ],
        },
        {
          label: 'Strategic analysis & next round',
          description: 'Answers reshape the tender, and the cycle can repeat.',
          steps: [
            'The team analyzes every answer for risks, opportunities, and competitive signals. **Answers legally supersede the original tender documents**, even when no new documents are sent out.',
            "If conditions changed, the bid manager updates SharePoint, retriggers Tender Assist's report generation, and informs the team.",
            'New findings can spawn new questions. The cycle repeats across multiple rounds, each with hard deadlines.',
          ],
        },
        {
          label: 'Final bid',
          description: 'Once Q&A closes, the team assembles and submits.',
          steps: [
            'The team puts together the final bid (offer) and submits it to the awarding organization.',
          ],
        },
      ],
      outro:
        "Three takeaways from this map shaped the product. The cycle is **bursty, not linear**: multiple Q&A rounds, deadlines that compress. **Answers legally supersede documents**, so the system has to treat them as ground truth and reflow the analysis. And **every question Vodafone submits becomes information competitors can read**, which is what later reframed UC3 from Q&A management into strategic communications.",
      image: {
        label: 'Fig 3.1: Tender lifecycle journey map',
        caption: 'End-to-end workflow uncovered during stakeholder research. High-level summary of the original Miro board.',
        src: '/case studies/tender-workflow-map.svg',
        width: 1600,
        height: 900,
      },
    },
    process: [],
    solutionTitle: 'First release',
    solution:
      "The first vision was a split-screen product: an AI chat on the left, a structured report on the right. The user reads the AI's analysis, asks follow-up questions, and the system answers.\n\n**We didn't build it that way.**\n\nTechnical constraints meant we couldn't deliver both chat and reports in the first release without compromising either. So we made a call: ship the reports first, hold the chat. The reasoning was about more than scope. Bid teams would only trust a chat answer if they already trusted the underlying analysis. If the static reports weren't credible, the chat would inherit that lack of trust on day one.\n\nMVP1 had three things: a tender project list, a project creation wizard, and the report covering Use Case 1 (a summary of key commercial points) and Use Case 2 (contradictions across documents), presented in a single, scannable view.\n\nA few design choices carried the trust scaffolding:",
    solutionBullets: [
      {
        highlight: 'Confidence labels (High / Medium / Low)',
        text: 'on every finding, color-coded but conservative. The pill sits next to the finding, not after it, so users see how sure the AI is at the same time they read what it\'s saying.',
      },
      {
        highlight: 'AI Reasoning, expandable inline.',
        text: 'A collapsible row under each finding that explains *why* the confidence is what it is: whether the answer came directly from the source documents or relied on inference. We added this after stakeholders asked how they\'d know why the AI was confident.',
      },
      {
        highlight: 'Source citations as first-class chips',
        text: 'under each finding, with a "+1" overflow so a finding could cite many documents without breaking the layout. Every claim ties back to specific source files.',
      },
      {
        highlight: 'Versioning surfaced in the UI.',
        text: '"Project name v1" and last-updated timestamp at the top of every report. When SharePoint changes, a new version regenerates overnight, so the report you\'re reading is always datable.',
      },
    ],
    solutionOutro:
      "The deeper principle: AI output had to be *legible*, not just accurate. Bid teams aren't going to read a clean, confident paragraph and act on it. They want to know how the system got there.",
    usabilityTesting: {
      title: 'Testing with four bid managers.',
      intro:
        'We tested MVP1 with four bid team members in a moderated Figma prototype session. All were 40+. The tasks covered the critical path: create a project, analyze a tender, find a specific clause, assess the trustworthiness of the AI, find contradictions, download the report.\n\nThe headline result was strong. On a 1–10 scale of *"would you use this daily,"* both scored users landed at 9 or 10. They called out "bundled info at a glance," "summary," and "confidence level" as the things they liked most.\n\nBut the structure was right while the experience wasn\'t legible enough yet. Three patterns came back:',
      items: [
        "**Trust didn't fully land.** Users understood the confidence labels directionally (green good, red careful), but couldn't always explain *why* a label was what it was. One user said they'd cross-check with the documents anyway because they \"didn't fully trust the AI.\"",
        '**They wanted a TL;DR before the detail.** Multiple users asked, in different words, for "a summary of the summary," "what is the case anyway?", "a one-pager tailored to my department, right at the top."',
        '**They wanted to ask follow-up questions.** One user unprompted: *"It would be nice to search in the text, or build a chat field to analyze the results."* On follow-up: *"Sure, why not. Can\'t hurt."*',
      ],
      outcomeLabel: 'What we took forward',
      outcome:
        "That shrug was the moment the chat earned its way back into the product. Not because we'd planned it for v2, but because users named the need.\n\nSmaller findings filled out the iteration backlog: source citations were found but took a few seconds (suggestion: add an icon), the layout felt cramped (\"is this for mobile?\"), separator lines were too thin, and mandatory fields in the project creation wizard weren't marked.",
    },
    finalSolution: {
      title: 'MVP2: iterating on what testing told us.',
      intro:
        'We responded to testing with four changes, ranging from small polish to a major architectural shift.',
      bullets: [
        {
          highlight: 'The chat came back.',
          text: 'The split-screen vision from day one, but now earned. The chat sits on the left and the report on the right, both visible at once. The chat answers carry the same trust scaffolding as the static reports: numbered source citations, the same content patterns, copy / thumbs up / thumbs down for feedback. Same AI, two surfaces, one standard of explainability.',
        },
        {
          highlight: 'Executive Summary at the top of every report.',
          text: 'The "TL;DR" users asked for. A short, plain-language overview that sits above the detailed findings, summarizing the tender\'s overall state and pointing at where the risks are.',
        },
        {
          highlight: 'UC1 and UC2 share the same accordion pattern.',
          text: 'In MVP1, the summary view (UC1) used one layout and the contradiction view (UC2) used another. In MVP2, both use the same expandable-row pattern with the same confidence pills, the same AI Reasoning row, the same source chips. Visual and behavioral consistency reduces cognitive load, especially for users in the 40+ range who scan rather than explore.',
        },
        {
          highlight: 'Smaller iterations on the foundations.',
          text: 'Source citations got document icons so they wouldn\'t be mistaken for prose. Required fields in the wizard got asterisks. The greyed-out / in-progress / ready states on the project dashboard moved from dots-only to dot + label so state was readable at a glance, not symbolic.',
        },
      ],
      outro:
        'We went live with MVP2 without a second round of formal usability testing. The trade-off was real: another round would have validated the iterations, but the team had committed to a delivery date and our changes were grounded in clear, specific feedback. We mitigated by working with stakeholders in weekly syncs and designing UC3 in parallel, keeping the feedback channel open through co-creation rather than a formal test cycle.\n\nUse cases 1 and 2 are now in production and have been adopted by **100+ users**. A small post-launch enhancement added pagination to the project list once real usage showed teams accumulating tender portfolios faster than the original layout assumed.',
    },
    chapters: [
      {
        mono: 'In design',
        title: 'UC3: strategic communications, not Q&A management.',
        blocks: [
          { kind: 'paragraph', text: "The third use case is the one I'm most proud of, and it's the one I handed off at the design stage." },
          { kind: 'paragraph', text: 'UC3 began as "let users manage bidder questions and answers." That framing was too narrow. In weekly stakeholder sessions and Miro brainstorms with Vodafone bid managers, a different shape emerged.' },
          { kind: 'paragraph', text: 'The Q&A phase of a tender works like this: the awarding organization sends an Excel template. Bidders type their questions into it. The organization collects every bidder\'s questions, anonymizes them, adds answers, and republishes the whole consolidated sheet back to everyone, including the competitors. Multiple rounds. Hard deadlines. And the answers, once given, legally supersede the original tender documents.' },
          { kind: 'paragraph', text: 'Two things stood out:' },
          { kind: 'quote', text: 'Questions need to be asked in a strategic way to not give away strategic information to the other bidders.' },
          { kind: 'quote', text: "Erkan's brain is the database." },
          { kind: 'paragraph', text: "The first comment reframed the design problem entirely. UC3 isn't a Q&A management tool. It's a strategic communications product where every question Vodafone submits becomes information the competitors can read. The tool has to help bid teams ask questions that get useful answers *without revealing what they don't know.*" },
          { kind: 'paragraph', text: "The second comment, about the team's senior domain expert holding institutional knowledge in his head, became the long-term vision: a knowledge layer that captures lessons learned across tenders. It was scoped as a future use case, outside of UC3." },
          { kind: 'aside', label: 'Features' },
          {
            kind: 'list',
            intro: 'The features that came out of this:',
            items: [
              '**A standalone canvas, anchored on rounds.** Bidder Q&A got its own canvas, separate from Summary and Contradictions, because it follows a different clock. The round selector lives in the canvas header: switch the round, and everything below it (insights and answers) switches context with it.',
              '**Descoping the workbench.** The original UC3 scope included a full question-authoring flow: drafting, AI-suggested questions, collaborative editing. Mid-design, I cut it. Teams already draft questions in workshops and notes; the unmet need was making sense of what comes back. The canvas now does two things well instead of four things adequately: AI insights and the Q&A record.',
              '**Two tabs, two altitudes.** The Insights tab is the synthesis: a strategy viability verdict after each round (*"viable with 2 caveats"*), and AI insight cards across all answers: risks, opportunities, calculation inputs, timeline impacts, competitor signals. The Questions tab is the evidence: every question with its answer, source links back to the tender documents, and a per-question AI analysis. Each level links to the other: insights cite their related answers; answers show which insight they feed.',
              '**Impact on existing analysis.** Because customer answers legally supersede the original documents, every answer can change the underlying reports. The system surfaces which UC1/UC2 reports are affected and lets the user re-run analysis with the new answer. It\'s a change-management layer most AI products don\'t acknowledge needs to exist.',
              '**Competitor Q&A as intelligence.** The consolidated sheet from the awarding authority includes every bidder\'s questions. The canvas treats this as signal, not noise: a source filter separates Vodafone\'s questions from competitors\', and cross-round pattern detection flags what competitors keep asking about, which hints at their weaknesses.',
              '**Suggested follow-ups close the loop.** Where an answer is non-binding or evasive, the AI drafts a follow-up question for the next round, shown both at the insight level and on the individual answer.',
            ],
          },
          {
            kind: 'image',
            image: {
              label: 'Fig 7.1: Standalone canvas',
              caption: 'The canvas with the round selector in the header and the two-tab structure (Insights / Questions).',
              src: '/case studies/tender-uc3-canvas.jpg',
              width: 2880,
              height: 1800,
            },
          },
          { kind: 'aside', label: 'Design handoff' },
          { kind: 'paragraph', text: 'A note on width: UC1 and UC2 are read-heavy. UC3 is read-and-decide heavy: scanning insights, jumping to evidence, deciding what to re-run. The final design makes the canvas wider than the chat by default, on the principle that width should follow the dominant mode of work. Users can still stretch the chat if they want.' },
          {
            kind: 'image',
            image: {
              label: 'Fig 7.2: Insights tab',
              caption: 'Strategy viability verdict, then AI insight cards across all answers: risks, opportunities, calculation inputs, timeline impacts, competitor signals. Each insight cites the related answers, surfaces impact on existing UC1 / UC2 reports, and drafts a suggested follow-up.',
              src: '/case studies/tender-uc3-insights.jpg',
              width: 1440,
              height: 3368,
            },
          },
          {
            kind: 'image',
            image: {
              label: 'Fig 7.3: Questions tab',
              caption: 'The Q&A record: every question with its answer, source links back to the tender documents, per-question AI analysis, and suggested follow-ups for non-binding or evasive responses.',
              src: '/case studies/tender-uc3-questions.jpg',
              width: 2880,
              height: 1800,
            },
          },
          { kind: 'aside', label: 'Process note' },
          { kind: 'paragraph', text: 'UC3 prototypes were built rapidly with Figma Make and AI assistance, then refined through stakeholder reaction in weekly syncs. The tooling let me move faster between an idea and stakeholder validation, but the product decisions (the round model, the descope of the authoring workbench, the two-altitude structure of insights and evidence, the change-management layer) came from translating real stakeholder pain into a coherent architecture.' },
        ],
      },
    ],
    outcomesReflection: {
      title: "What I'm taking from this",
      intro: '',
      impacts: [
        {
          label: 'Earn features instead of assuming them',
          description: "De-scoping the chat in MVP1 wasn't a compromise. It was a better product decision. Users were more credible than the original vision in deciding when the chat was ready.",
        },
        {
          label: 'AI output has to be legible, not just accurate',
          description: "Confidence labels, AI Reasoning, source citations, traceability: these aren't nice-to-haves for an enterprise AI product. They're the load-bearing structure of trust.",
        },
        {
          label: 'Persona constraints are an opportunity',
          description: "Designing for users in their 40s and above, working under high stakes, forced clarity I might not have pushed for otherwise. The discipline made the product better for everyone.",
        },
        {
          label: 'Stakeholder co-creation is design research',
          description: 'A stakeholder saying *"questions need to be asked in a strategic way"* reframed UC3 from Q&A management to strategic communications, the most important shift in the project. Strategic Check was designed for the drafting flow; when I descoped the authoring workbench, its core question, *"will this hurt you?"*, migrated into the post-answer analysis, where the strategy viability check now asks it of the whole round instead of a single draft. The feature changed; the framing stayed.',
        },
      ],
      closing:
        'Tender Assistant taught me that designing AI products is less about *the AI* than it is about the humans next to it: what they need to believe before they\'ll act, what they need to see before they\'ll trust, and what they need to control before they\'ll let the machine do its work.',
    },
    images: {
      solutionGrid: [
        {
          label: 'Fig 4.1: Project dashboard',
          caption: 'Project list with status indicators',
          src: '/case studies/tender-mvp1-projects.jpg',
          width: 2880,
          height: 1800,
        },
        {
          label: 'Fig 4.2: Project creation wizard',
          caption: 'SharePoint as source of truth',
          src: '/case studies/tender-mvp1-create-project.jpg',
          width: 2880,
          height: 1800,
        },
        {
          label: 'Fig 4.3: Report view',
          caption: 'Confidence labels, AI Reasoning, source citation chips',
          src: '/case studies/tender-mvp1-summary.jpg',
          width: 2880,
          height: 1800,
        },
      ],
      usabilityTesting: {
        label: 'Fig 5.1: Miro board, sticky-note testing notes',
        caption: 'Color-coded positive / negative / neutral / verbatim from the moderated session.',
        src: '/case studies/tender-usability-testing.png',
        width: 2800,
        height: 931,
      },
      finalSolution: [
        {
          label: 'Fig 6.1: MVP2 split-screen with chat',
          caption:
            'Chat and the static report carry the same trust scaffolding: source chips, AI Reasoning, executive summary at the top.',
          src: '/case studies/tender-mvp2-chat.jpg',
          width: 2880,
          height: 1800,
        },
        {
          label: 'Fig 6.2: Contradictions view',
          caption:
            'Findings expand to show source quotes side by side and a confidence rationale; the chat is available but not in focus.',
          src: '/case studies/tender-mvp2-contradictions.jpg',
          width: 2880,
          height: 1800,
        },
      ],
    },
    metrics: [
      { value: '€5.2M', label: 'Projected value at scale' },
      { value: '100+', label: 'Users on UC1 & UC2' },
      { value: '9 months', label: 'End to end design' },
    ],
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
    thumbnail: '/case studies/session-replay-ui.jpg',
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
      title: '✨ The Final Solution',
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
        src: '/case studies/session-replay-iteration-1.png',
        width: 2767,
        height: 1916,
      },
      finalSolution: [
        {
          label: 'Final design — default table',
          caption: 'The redesigned Session Replay list with combined User Info column',
          src: '/case studies/session-replay-final-1.png',
          width: 2880,
          height: 1800,
        },
        {
          label: 'Final design — session & status tooltips',
          caption: 'Tooltips explaining session status and issues',
          src: '/case studies/session-replay-final-2.png',
          width: 2880,
          height: 1800,
        },
        {
          label: 'Final design — issue breakdown tooltips',
          caption: 'Per-issue severity breakdown on hover',
          src: '/case studies/session-replay-final-3.png',
          width: 2880,
          height: 1800,
        },
        {
          label: 'Final design — AI issues tooltip',
          caption: 'AI issues grouping with accessible tooltips',
          src: '/case studies/session-replay-final-4.png',
          width: 2880,
          height: 1800,
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
    company: 'Luciq / Instabug',
    category: 'AI Developer Tool / SaaS',
    year: '2024',
    role: 'Product Designer',
    timeline: '3 weeks · 1 cycle, 2 sprints',
    thumbnail: '/case studies/smartresolve-ui.jpg',
    sectionOrder: [
      'overview',
      'process',
      'problem',
      'insights',
      'competitiveBenchmark',
      'improvementOpportunities',
      'goals',
      'informationArchitecture',
      'solution',
      'dataAnalysis',
      'finalSolution',
      'usabilityTesting',
      'chart',
      'metrics',
      'nextSteps',
      'reflection',
    ],
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
    process: [
      {
        label: 'Empathize',
        detail: 'Research',
        items: [
          'Conduct interviews and competitive analysis',
          'PM Sync, define problems from interview themes and competitor gaps',
        ],
      },
      {
        label: 'Define',
        detail: 'Problem Framing',
        items: [
          'Frame the problem space and clarify scope',
          'Technical Alignment, early check with EM to avoid blockers',
        ],
      },
      {
        label: 'Ideate',
        detail: 'Squad Pre-planning',
        items: [
          'Refinement & Squad Pre-planning, apply feedback and sync with PM and squad',
          'Design Chapter Feedback, share with designers for cross-product impact',
        ],
      },
      {
        label: 'Test',
        detail: 'Product Review',
        items: [
          'Product Review, present to PMs, EMs, CPO, CTO for feedback',
          'Usability Testing, conduct usability testing',
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
        'Staff & Senior Frontend Engineers, Backend Developers, Android Developers, Engineering Managers',
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
            src: '/case studies/competitor-sentry.png',
            width: 2504,
            height: 1400,
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
            src: '/case studies/competitor-firebase.png',
            width: 2508,
            height: 1394,
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
            src: '/case studies/competitor-raygun.png',
            width: 2510,
            height: 1408,
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
        src: '/case studies/smartresolve-original-ui.jpg',
        width: 2848,
        height: 3600,
      },
      solution: {
        label: 'Design Iteration — Inline context input',
        caption: 'Pivoted from a drawer to inline for focus and future automation',
        src: '/case studies/smartresolve-iteration.jpg',
        width: 2848,
        height: 4544,
      },
      finalSolution: [
        {
          label: 'Final design — Fix flow with iterations',
          caption: 'Context input, regenerate, thumbs up/down',
          src: '/case studies/smartresolve-final.jpg',
          width: 2880,
          height: 1800,
        },
      ],
      usabilityTesting: {
        label: 'Final agent experience — micro-interactions & reasoning',
        caption: 'Step-by-step reasoning added in the final iteration',
        src: '/case studies/smartresolve-usability.gif',
        width: 1424,
        height: 1396,
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
    company: 'e& Egypt',
    category: 'Fintech / SaaS',
    year: '2023',
    role: 'Product Designer',
    timeline: '12+ weeks',
    team: ['2 Product Designers', 'PM', 'Developers'],
    thumbnail: '/case studies/superpay-dashboard-ui.jpg',
    sectionOrder: [
      'overview',
      'process',
      'problem',
      'competitiveAnalysis',
      'featureList',
      'insights',
      'competitiveBenchmark',
      'improvementOpportunities',
      'goals',
      'informationArchitecture',
      'ideation',
      'solution',
      'refinement',
      'dataAnalysis',
      'finalSolution',
      'usabilityTesting',
      'chart',
      'nextSteps',
      'outcomesReflection',
    ],
    tools: ['Adobe', 'Figma', 'Google Slides'],
    nda: false,
    outcomesReflection: {
      title: 'Outcomes & Reflection',
      intro:
        'Despite a **cluttered** and **ambiguous** process, we aligned stakeholders and merchants to deliver a dashboard that met both business goals and user needs.',
      impacts: [
        {
          label: 'Business Impact',
          description:
            'The dashboard gained rapid early adoption, giving e& a credible entry into fintech and differentiating it from its legacy telco positioning.',
          link: { label: 'Check their website', href: 'https://super-pay.com/products/ecommerce' },
        },
        {
          label: 'User Impact',
          description:
            'Merchants gained daily visibility into KPIs and transactions without manual exports.',
        },
        {
          label: 'Design Impact',
          description:
            'Responsive design and a scalable system ensured long-term consistency and fast iteration.',
        },
      ],
      closing:
        'This project taught me that designing from scratch means **shaping product vision**, balancing simplicity, collaboration, and scalability to deliver **impact**.',
    },
    refinement: {
      title: 'Refinement',
      cards: [
        {
          label: 'Design System',
          description:
            'Established a scalable system of components, typography, and patterns that improved consistency and supported future fintech modules.',
          image: {
            label: 'Design system — component anatomy',
            src: '/case studies/superpay-refinement-design-system.webp',
            width: 2048,
            height: 2048,
          },
        },
        {
          label: 'Responsive Design',
          description:
            'Refined the dashboard to work seamlessly across devices, ensuring merchants could track payments and insights on any screen size.',
          image: {
            label: 'Responsive layouts across breakpoints',
            src: '/case studies/superpay-refinement-responsive.webp',
            width: 4000,
            height: 4000,
          },
        },
      ],
    },
    ideation: {
      title: 'From sketches to wireframes',
      stages: [
        {
          label: 'Sketching',
          description:
            'Quick sketches helped the two designers on the project align on shape and flow before any pixels.',
          images: [
            {
              label: 'Invoices sketch',
              src: '/case studies/superpay-sketch.webp',
              width: 2530,
              height: 1800,
            },
          ],
        },
        {
          label: 'Wireframes',
          description:
            'Wireframes set the structure for user testing. Across four rounds, we iterated on layout and hierarchy, then moved on to high-fidelity once the patterns held up.',
          images: [
            {
              label: 'Dashboard wireframe',
              src: '/case studies/superpay-wireframe-dashboard.jpg',
              width: 1366,
              height: 1003,
            },
            {
              label: 'Transactions wireframe',
              src: '/case studies/superpay-wireframe-transactions.jpg',
              width: 1366,
              height: 1042,
            },
            {
              label: 'Customers wireframe',
              src: '/case studies/superpay-wireframe-customers.jpg',
              width: 1366,
              height: 1117,
            },
          ],
        },
      ],
    },
    featureList: {
      title: 'Feature list',
      intro:
        'We aligned with stakeholders and engineering on a complete feature list before design started, so scope and priorities were clear to everyone from day one.',
      groups: [
        {
          label: 'Main View',
          items: [
            'View Last 5 Transactions',
            'View Statistics (Monthly Sales / New Customers / Top Customers / Payment Methods)',
            'Create Invoice',
            'Add Product',
            'View Balance',
            'Guide User On First Time',
            'View Test / Live Mode',
          ],
        },
        {
          label: 'Account Settings',
          items: [
            'View Account Details',
            'View / Add Users',
            'View / Add Roles',
            'View / Add Branches',
          ],
        },
        {
          label: 'Invoices',
          items: [
            'View Invoices (Create Single / Bulk)',
            'View Subscriptions (Add)',
            'View Payment Links (Create)',
          ],
        },
        {
          label: 'General',
          items: [
            'View Notifications',
            'Chat Support',
            'Change Language (Arabic / English)',
            'Favorite Specific Tab',
            'Logout / Switch Account',
          ],
        },
        {
          label: 'Customers',
          items: ['View All Customers (Search)', 'Add New Customer'],
        },
        {
          label: 'Transfers',
          items: ['View All Transfers'],
        },
        {
          label: 'Reports',
          items: ['Filter (Date / Report Type)'],
        },
        {
          label: 'Transactions',
          items: ['View Transactions'],
        },
        {
          label: 'Payouts',
          items: ['View / Add Payouts', 'View / Add Beneficiary'],
        },
        {
          label: 'Developers',
          items: ["View Developer's Guide & Documentation"],
        },
        {
          label: 'POS Management',
          items: ['View / Add POS'],
        },
        {
          label: 'Products',
          items: [
            'View All Products (Add / Search / Filter / Edit)',
            'View Promocodes (Add)',
          ],
        },
      ],
    },
    competitiveAnalysis: {
      title: 'Competitive analysis',
      intro:
        "After liaising with stakeholders, we took a proactive approach by conducting thorough research into our competitors' features. It's imperative to stay ahead of the competition, and by doing so, we can ensure that our product or service stands out in the market.",
      screenshots: [
        { label: 'Paymob', src: '/case studies/superpay-competitor-paymob.jpg', width: 864, height: 455 },
        { label: 'PayTabs', src: '/case studies/superpay-competitor-paytabs.jpg', width: 864, height: 455 },
        { label: 'OPay', src: '/case studies/superpay-competitor-opay.jpg', width: 864, height: 455 },
        { label: 'Geidea', src: '/case studies/superpay-competitor-geidea.jpg', width: 864, height: 455 },
        { label: 'Stripe', src: '/case studies/superpay-competitor-stripe.jpg', width: 864, height: 455 },
      ],
    },
    overview:
      'e& was shifting from a traditional telco into a software solutions provider. SuperPay was developed as a strategic product to position the company in Egypt\'s rapidly growing fintech sector. The merchant dashboard had to serve small and medium businesses managing online payments, balances, and transactions in one place.',
    problem: [
      'Existing dashboards were either too technical (built for finance pros) or too shallow (surface-level data only)',
      'Merchants needed something simple, insightful, and scalable',
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
    },
    solution: '',
    images: {
      solutionGallery: [
        {
          label: 'Dashboard',
          src: '/case studies/superpay-solution-dashboard.jpg',
          width: 2732,
          height: 1800,
        },
        {
          label: 'Transactions',
          src: '/case studies/superpay-solution-transactions.jpg',
          width: 1366,
          height: 900,
        },
        {
          label: 'Customers',
          src: '/case studies/superpay-solution-customers.jpg',
          width: 2732,
          height: 1800,
        },
      ],
    },
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
    company: 'e& Egypt',
    category: 'Fintech / Marketing Website',
    year: '2023',
    role: 'Product Designer',
    timeline: '4 weeks',
    thumbnail: '/case studies/superpay-website-ui.png',
    team: ['2 Product Designers', 'PM', 'Developers'],
    tools: ['Adobe', 'Figma', 'Google Slides'],
    nda: true,
    sectionOrder: [
      'overview',
      'competitiveAnalysis',
      'informationArchitecture',
      'ideation',
      'solution',
      'designSystem',
    ],
    designSystem: {
      title: 'Style Guides & Design System',
      body: 'In the process of designing the product, we created a series of visual styles comprising of colors, typefaces, and imagery. Moreover, we established a design system that consists of reusable functional elements, including components and interaction patterns. This system ensures that all digital products produced by the organization have a coherent and unified experience.',
    },
    ideation: {
      title: 'From IA to wireframes',
      intro:
        'Once the architecture was settled, we sketched the key pages end-to-end before any visual design. The wireframes locked the structure, navigation, and content density across the marketing surface.',
      stages: [
        {
          label: 'Wireframes',
          description: 'Three representative pages from the wireframe set: the landing page, a product detail page, and the careers list.',
          images: [
            {
              label: 'Home page',
              caption: 'Hero, Our Payment Solutions, Why Super Pay?, What Next, Merchants, Offer, News, FAQ.',
              src: '/case studies/superpay-website-wireframe-home.jpg',
              width: 1366,
              height: 5351,
            },
            {
              label: 'Product page',
              caption: 'Product hero, feature grid, three feature stories with imagery, Partners, customer stories, CTA, FAQ.',
              src: '/case studies/superpay-website-wireframe-product.jpg',
              width: 1366,
              height: 5943,
            },
            {
              label: 'Careers page',
              caption: 'Hero, search and department filters, role cards grouped by department with apply CTAs.',
              src: '/case studies/superpay-website-wireframe-careers.jpg',
              width: 1366,
              height: 3090,
            },
          ],
        },
      ],
    },
    competitiveAnalysis: {
      title: 'Studying the market',
      intro:
        "We audited regional and global payment providers. Hero promises, navigation patterns, who they speak to, and how much they show before the fold to see where SuperPay could differentiate and what merchants had come to expect.",
      screenshots: [
        {
          label: 'Geidea',
          caption: 'Regional acquirer · merchant-first hero, product nav at the top.',
          src: '/case studies/superpay-website-competitor-geidea.jpg',
          width: 864,
          height: 381,
        },
        {
          label: 'Paymob',
          caption: 'MENA fintech · payments-everywhere hero, dual CTA.',
          src: '/case studies/superpay-website-competitor-paymob.jpg',
          width: 864,
          height: 428,
        },
        {
          label: 'Stripe',
          caption: 'Global benchmark · bold typography, product-in-context hero.',
          src: '/case studies/superpay-website-competitor-stripe.jpg',
          width: 864,
          height: 455,
        },
        {
          label: 'OPay',
          caption: 'Africa-focused · solution-led hero with a product preview.',
          src: '/case studies/superpay-website-competitor-opay.jpg',
          width: 864,
          height: 428,
        },
      ],
    },
    informationArchitecture: {
      root: 'SuperPay · Landing page',
      sections: [
        {
          label: 'Sign In / Start Now',
          features: [
            { label: 'Sign in for merchants (Mobile / Email + Password)' },
            { label: 'Merchant registration (Name, Email, Mobile)' },
          ],
        },
        {
          label: 'Home',
          features: [
            { label: 'Header (logo, menu, login, language)' },
            { label: 'About SuperPay' },
            { label: 'Success partners' },
            { label: 'Our Solutions' },
            { label: 'Why SuperPay? (risk & fraud, real-time reporting, fast integration, security)' },
            { label: 'Offers' },
            { label: 'Numbers (Statistics)' },
            { label: 'Our merchants' },
            { label: 'Latest news' },
            { label: 'Support form (Contact us)' },
            { label: 'Footer' },
          ],
        },
        {
          label: 'Our Solutions',
          features: [
            { label: 'Billing app' },
            { label: 'POS' },
            { label: 'Acceptance POS' },
            { label: 'Online Acceptance' },
            { label: 'Prepaid Cards' },
            { label: 'Soft POS' },
            { label: 'Payouts & Consumer app' },
          ],
        },
        {
          label: 'Company',
          features: [
            { label: 'About us' },
            { label: 'Careers (We are hiring)' },
            { label: 'News' },
          ],
        },
        {
          label: 'Developer',
          features: [{ label: 'Integration documents for merchant tech teams' }],
        },
        {
          label: 'Pricing',
          features: [{ label: 'Standard rate on POS and Online' }],
        },
      ],
    },
    overview:
      'The public-facing SuperPay site needed to introduce e&\'s fintech vision to small and medium businesses across Egypt, communicating credibility, payment solutions, and developer resources in one cohesive experience.',
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
      'Building a marketing site with clear payment solution sections, merchant testimonials, partner logos, developer documentation entry points, and pricing. Style guide and design system ensured consistency with the SuperPay dashboard and other e& digital products.',
    images: {
      solutionGrid: [
        {
          label: 'Home page',
          caption: 'Hero, success partners, payment solutions, Why Super Pay?, What Next, merchants, exclusive offer, news, FAQ.',
          src: '/case studies/superpay-website-ui-home.jpg',
          width: 2160,
          height: 10534,
        },
        {
          label: 'Acceptance POS page',
          caption: 'Product hero, POS solution features, customer stories, supported payment methods, cross-sell CTA, FAQ.',
          src: '/case studies/superpay-website-ui-product.jpg',
          width: 2160,
          height: 6547,
        },
      ],
    },
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
