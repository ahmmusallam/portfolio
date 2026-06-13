import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import ProcessDiagram from '@/components/ProcessDiagram';
import MetricGrid from '@/components/MetricGrid';
import InsightsGrid from '@/components/InsightsGrid';
import AdoptionChart from '@/components/AdoptionChart';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ZoomableImage from '@/components/ZoomableImage';
import BadgeDataTable from '@/components/BadgeDataTable';
import CompetitorGrid from '@/components/CompetitorGrid';
import IADiagram from '@/components/IADiagram';
import ImageGallery from '@/components/ImageGallery';
import WorkflowPhases from '@/components/WorkflowPhases';

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Ahmed Hamdy Musallam`,
    description: study.subtitle,
  };
}

// Default top-to-bottom section order. A case study may override it via
// `sectionOrder` in lib/case-studies.ts. Keys with no data render nothing.
const DEFAULT_ORDER = [
  'overview',
  'myRole',
  'workflowResearch',
  'process',
  'problemTimeline',
  'insights',
  'competitiveAnalysis',
  'featureList',
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
  'chapters',
  'chart',
  'metrics',
  'nextSteps',
  'outcomesReflection',
  'reflection',
];

// Parse **bold** and *italic* segments out of plain text into emphasis spans.
function renderRich(text: string): React.ReactNode {
  // Split on **bold** first.
  return text.split(/\*\*(.+?)\*\*/g).map((boldPart, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="text-ink-50 font-semibold">
          {boldPart}
        </strong>
      );
    }
    // Within non-bold segments, split on *italic*.
    return (
      <Fragment key={i}>
        {boldPart.split(/\*(.+?)\*/g).map((part, j) =>
          j % 2 === 1 ? (
            <em key={j} className="italic">
              {part}
            </em>
          ) : (
            <span key={j}>{part}</span>
          ),
        )}
      </Fragment>
    );
  });
}

// Render text with `\n\n`-separated paragraphs. Each paragraph supports
// `renderRich` markers. Wrap in the caller's preferred <p> element via `as`.
function renderParagraphs(
  text: string,
  className: string,
  spacing: string = 'mt-6',
): React.ReactNode {
  const paras = text.split(/\n\n+/).filter(Boolean);
  return paras.map((p, i) => (
    <p key={i} className={`${className} ${i === 0 ? '' : spacing}`}>
      {renderRich(p)}
    </p>
  ));
}

const SECTION = 'py-20 md:py-28 border-t border-ink-800';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const sections: Record<string, React.ReactNode> = {
    overview: (() => {
      const overviewImageSide = study.slug === 'smartresolve';
      const hasImage = !!study.images?.overview;
      const hasHighlight = !!study.overviewHighlight;

      if (hasHighlight) {
        return (
          <section className={SECTION}>
            <div className="container-x">
              <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
                Overview
              </h2>

              <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12 items-stretch">
                <div className="md:col-span-7">
                  {renderParagraphs(
                    study.overview,
                    'text-base md:text-lg text-ink-300 text-pretty leading-relaxed',
                    'mt-5',
                  )}
                </div>
                <aside className="md:col-span-5 md:justify-self-end w-full md:max-w-md h-full">
                  <div className="h-full rounded-3xl border border-ink-800 bg-ink-900/30 p-6 md:p-8 flex flex-col">
                    <p className="mono-label text-ink-500">At a glance</p>
                    <div className="mt-auto pt-10">
                      <p className="text-6xl md:text-7xl text-ink-50 font-medium tracking-tight leading-none">
                        {study.overviewHighlight!.value}
                      </p>
                      {study.overviewHighlight!.caption && (
                        <p className="mt-3 text-sm text-ink-400">
                          {study.overviewHighlight!.caption}
                        </p>
                      )}
                    </div>
                    {study.overviewHighlight!.detail && (
                      <div className="mt-8 pt-6 border-t border-ink-800">
                        <p className="text-sm md:text-base text-ink-300 text-pretty leading-relaxed">
                          {renderRich(study.overviewHighlight!.detail)}
                        </p>
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </section>
        );
      }

      if (overviewImageSide && hasImage) {
        return (
          <section className={SECTION}>
            <div className="container-x">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-8">
                  <p className="mono-label mb-6">Overview</p>
                  <p className="text-xl md:text-2xl text-ink-100 text-pretty leading-relaxed font-light">
                    {study.overview}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <ZoomableImage
                    src={study.images!.overview!.src!}
                    label={study.images!.overview!.label}
                    caption={study.images!.overview!.caption}
                    width={study.images!.overview!.width!}
                    height={study.images!.overview!.height!}
                    containerClassName="rounded-3xl border border-ink-800"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      }

      return (
        <section className={SECTION}>
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">Overview</p>
              </div>
              <div className="md:col-span-9">
                {renderParagraphs(
                  study.overview,
                  'text-2xl md:text-3xl text-ink-100 text-pretty leading-snug font-light',
                  'mt-8',
                )}
              </div>
            </div>

            {hasImage && (
              <div className="mt-16">
                <ImagePlaceholder
                  label={study.images!.overview!.label}
                  caption={study.images!.overview!.caption}
                  src={study.images!.overview!.src}
                  width={study.images!.overview!.width}
                  height={study.images!.overview!.height}
                />
              </div>
            )}
          </div>
        </section>
      );
    })(),

    myRole: study.myRole ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">My role</p>
            </div>
            <div className="md:col-span-9">
              {renderParagraphs(
                study.myRole,
                'text-lg md:text-xl text-ink-300 text-pretty leading-relaxed',
                'mt-6',
              )}
            </div>
          </div>
        </div>
      </section>
    ) : null,

    process: (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16">
            <p className="mono-label mb-3">The process</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              From research to <span className="text-ink-400">handoff</span>.
            </h2>
            {!['smartresolve', 'superpay-dashboard'].includes(study.slug) && (
              <p className="mt-4 text-ink-400 max-w-xl">A {study.process.length}-stage process designed to align research, design, and engineering on shared signals.</p>
            )}
          </div>

          <ProcessDiagram stages={study.process} />
        </div>
      </section>
    ),

    // Combined Problem + Timeline (default layout)
    problemTimeline: (
      <section className={SECTION}>
        <div className="container-x">
          <div className={`grid gap-12 ${study.timelineDetail ? 'md:grid-cols-2' : ''}`}>
            <div>
              <p className="mono-label mb-6">Problem</p>
              {study.problemIntro && (
                <p className="text-ink-300 mb-6 leading-relaxed">{study.problemIntro}</p>
              )}
              <ul className="space-y-5">
                {study.problem.map((p, i) => (
                  <li key={i} className="flex items-start gap-5 group">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl text-ink-200 text-pretty leading-relaxed">{p}</p>
                  </li>
                ))}
              </ul>
              {study.problemOutro && (
                <p className="mt-8 text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light">
                  {study.problemOutro}
                </p>
              )}
            </div>

            {study.timelineDetail && (
              <div>
                <p className="mono-label mb-6">Timeline</p>
                <p className="mono-label text-ink-300 mb-3">Duration</p>
                <p className="text-ink-300 mb-8 leading-relaxed">
                  {study.timelineDetail.summary}
                </p>
                <ol className="space-y-4">
                  {study.timelineDetail.weeks.map((w, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg md:text-xl text-ink-200 leading-relaxed">{w}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>
    ),

    // Standalone Problem (used when ordered separately from Timeline)
    problem: (() => {
      const problemAsCards = ['smartresolve', 'superpay-dashboard', 'tender-assist'].includes(study.slug);
      const cards = study.problemCards;
      const cardCount = cards?.length ?? study.problem.length;
      const cardsGridClass = cardCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
      return (
        <section className={SECTION}>
          <div className="container-x">
            <div className="mb-10 md:mb-12 max-w-3xl">
              <p className="mono-label mb-3">Problem</p>
              <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
                The problem.
              </h2>
            </div>
            <div className={problemAsCards ? '' : 'max-w-3xl'}>
              {study.problemIntro && (
                <div className="mb-8 max-w-3xl">
                  {renderParagraphs(
                    study.problemIntro,
                    'text-lg md:text-xl text-ink-300 leading-relaxed text-pretty',
                    'mt-6',
                  )}
                </div>
              )}
              {problemAsCards && study.problemOutro && (
                <div className="mb-10 max-w-3xl">
                  {renderParagraphs(
                    study.problemOutro,
                    'text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light',
                    'mt-6',
                  )}
                </div>
              )}
              {problemAsCards ? (
                <div className={`grid gap-6 ${cardsGridClass}`}>
                  {cards
                    ? cards.map((c, i) => (
                        <div
                          key={i}
                          className="rounded-3xl border border-ink-800 bg-ink-900/30 p-8 md:p-10 h-full flex flex-col"
                        >
                          <p className="mono-label text-ink-500">
                            {String(i + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-5 text-xl md:text-2xl text-ink-50 font-medium tracking-tight">
                            {c.label}
                          </h3>
                          <p className="mt-4 text-base md:text-lg text-ink-300 leading-relaxed text-pretty">
                            {renderRich(c.text)}
                          </p>
                        </div>
                      ))
                    : study.problem.map((p, i) => (
                        <div
                          key={i}
                          className="rounded-3xl border border-ink-800 bg-ink-900/30 p-8 md:p-10"
                        >
                          <p className="mono-label text-ink-500 mb-5">
                            {String(i + 1).padStart(2, '0')}
                          </p>
                          <p className="text-lg md:text-xl text-ink-100 leading-snug text-pretty">
                            {p}
                          </p>
                        </div>
                      ))}
                </div>
              ) : (
                <ul className="space-y-5">
                  {study.problem.map((p, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg md:text-xl text-ink-200 text-pretty leading-relaxed">{p}</p>
                    </li>
                  ))}
                </ul>
              )}
              {!problemAsCards && study.problemOutro && (
                <div className="mt-8 max-w-3xl">
                  {renderParagraphs(
                    study.problemOutro,
                    'text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light',
                    'mt-6',
                  )}
                </div>
              )}
              {study.problemCallout && (
                <div className="mt-16 md:mt-20 border-y border-ink-800 py-16 md:py-20 text-center">
                  <p className="text-ink-50 font-medium tracking-tight tabular-nums text-[clamp(96px,18vw,240px)] leading-[0.85]">
                    {study.problemCallout.value}
                  </p>
                  <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-ink-300 leading-relaxed text-pretty">
                    {study.problemCallout.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    })(),

    workflowResearch: study.workflowResearch ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Research</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.workflowResearch.title ?? 'Mapping the real workflow'}
            </h2>
            {study.workflowResearch.intro && (
              <div className="mt-6">
                {renderParagraphs(
                  study.workflowResearch.intro,
                  'text-lg md:text-xl text-ink-300 leading-relaxed text-pretty',
                  'mt-5',
                )}
              </div>
            )}
          </div>

          {study.workflowResearch.image && (
            <div className="mb-16 md:mb-20">
              <ImagePlaceholder
                label={study.workflowResearch.image.label}
                caption={study.workflowResearch.image.caption}
                src={study.workflowResearch.image.src}
                width={study.workflowResearch.image.width}
                height={study.workflowResearch.image.height}
              />
            </div>
          )}

          <WorkflowPhases phases={study.workflowResearch.phases} />

          {study.workflowResearch.outro && (
            <div className="mt-16 md:mt-20 max-w-3xl">
              {renderParagraphs(
                study.workflowResearch.outro,
                'text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light',
                'mt-6',
              )}
            </div>
          )}
        </div>
      </section>
    ) : null,

    // Standalone Timeline (used when ordered separately from Problem)
    timeline: study.timelineDetail ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Timeline</p>
            </div>
            <div className="md:col-span-9">
              <p className="mono-label text-ink-300 mb-3">Duration</p>
              <p className="text-ink-300 mb-8 leading-relaxed">{study.timelineDetail.summary}</p>
              <ol className="space-y-4">
                {study.timelineDetail.weeks.map((w, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl text-ink-200 leading-relaxed">{w}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    ) : null,

    insights: study.insights && study.insights.length > 0 ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">
              {study.userResearch ? 'User research & themes' : 'Customer insights'}
            </p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.userResearch ? 'Voices from the field.' : 'Themes from the field.'}
            </h2>
            {study.userResearch && (
              <p className="mt-5 text-lg md:text-xl text-ink-400 leading-relaxed text-pretty">
                From{' '}
                <span className="text-ink-50 font-semibold">
                  {study.userResearch.headline}
                </span>
                {' across '}
                <span className="text-ink-100 font-medium">
                  {study.userResearch.detail}
                </span>
                .
              </p>
            )}
            {!study.userResearch && study.slug === 'session-replay' && (
              <p className="mt-4 text-ink-400">
                Through customer interviews with CarMax, Property Finder, and Cummins, we
                collected quotes and observations. Here are the themes we made from the insights.
              </p>
            )}
          </div>

          {study.images?.insights && (
            <div className="mb-12">
              <ImagePlaceholder
                label={study.images.insights.label}
                caption={study.images.insights.caption}
                src={study.images.insights.src}
                width={study.images.insights.width}
                height={study.images.insights.height}
              />
            </div>
          )}

          <InsightsGrid insights={study.insights} />
        </div>
      </section>
    ) : null,

    competitiveAnalysis: study.competitiveAnalysis ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Research</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.competitiveAnalysis.title}.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
              {study.competitiveAnalysis.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {study.competitiveAnalysis.screenshots.map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <ZoomableImage
                  src={s.src!}
                  label={s.label}
                  caption={s.caption}
                  width={s.width!}
                  height={s.height!}
                  containerClassName="rounded-xl border border-ink-800"
                />
                <p className="mono-label text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null,

    featureList: study.featureList ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Scope</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.featureList.title}.
            </h2>
            {study.featureList.intro && (
              <p className="mt-5 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                {study.featureList.intro}
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {study.featureList.groups.map((group, i) => (
              <div
                key={i}
                className="rounded-2xl border border-ink-800 bg-ink-900/30 p-5 flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="mono-label text-ink-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base md:text-lg text-ink-50 font-medium tracking-tight">
                    {group.label}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full bg-ink-500 shrink-0"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-ink-300 leading-relaxed text-pretty">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null,

    competitiveBenchmark: study.competitiveBenchmark ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Competitive landscape</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.competitiveBenchmark.title ?? 'Competitive benchmark.'}
            </h2>
            {study.competitiveBenchmark.intro && (
              <p className="mt-4 text-ink-400 text-pretty leading-relaxed">
                {study.competitiveBenchmark.intro}
              </p>
            )}
          </div>

          <CompetitorGrid competitors={study.competitiveBenchmark.competitors} />
        </div>
      </section>
    ) : null,

    improvementOpportunities: study.improvementOpportunities ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16">
            <p className="mono-label mb-3">Opportunities</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.improvementOpportunities.title}.
            </h2>
            {study.improvementOpportunities.intro && (
              <p className="mt-4 text-ink-300 leading-relaxed text-pretty max-w-3xl">
                {study.improvementOpportunities.intro}
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.improvementOpportunities.items.map((item, i) => (
              <div
                key={i}
                className="relative rounded-3xl border border-ink-800 bg-ink-900/30 p-8"
              >
                <p className="mono-label mb-6">
                  / {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-lg md:text-xl text-ink-50 font-medium leading-snug text-pretty">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null,

    goals: study.goals && study.goals.length > 0 ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Goals</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              What we set out to do.
            </h2>
            <p className="mt-4 text-ink-400">
              The primary objective was to streamline the user experience while interacting with
              session data, which involved making critical adjustments to the UI and terminology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {study.goals.map((goal, i) => (
              <div key={i} className="rounded-3xl border border-ink-800 bg-ink-900/30 p-8">
                <p className="mono-label mb-4">{goal.number}</p>
                <p className="text-lg text-ink-200 leading-relaxed text-pretty">{goal.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null,

    informationArchitecture: study.informationArchitecture ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="mono-label mb-3">Information architecture</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              Mapping the surface.
            </h2>
          </div>

          <IADiagram
            root={study.informationArchitecture.root}
            sections={study.informationArchitecture.sections}
            note={study.informationArchitecture.note}
          />
        </div>
      </section>
    ) : null,

    ideation: study.ideation ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Ideation</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.ideation.title ?? 'From sketches to wireframes'}.
            </h2>
            {study.ideation.intro && (
              <p className="mt-5 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                {study.ideation.intro}
              </p>
            )}
          </div>

          <div className="space-y-16 md:space-y-20">
            {study.ideation.stages.map((stage, i) => {
              const single = stage.images.length === 1;
              const gridCols = single
                ? ''
                : stage.images.length === 2
                ? 'grid sm:grid-cols-2 gap-4 md:gap-5'
                : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5';
              return (
                <div key={i}>
                  <div className="mb-8 md:mb-10 max-w-3xl">
                    <p className="mono-label">
                      / {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-2xl md:text-3xl text-ink-50 font-medium tracking-tight">
                      {stage.label}
                    </h3>
                    {stage.description && (
                      <p className="mt-4 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                        {stage.description}
                      </p>
                    )}
                  </div>

                  {single ? (
                    <div className="mx-auto max-w-4xl">
                      <ZoomableImage
                        src={stage.images[0].src!}
                        label={stage.images[0].label}
                        caption={stage.images[0].caption}
                        width={stage.images[0].width!}
                        height={stage.images[0].height!}
                        containerClassName="rounded-3xl border border-ink-800"
                      />
                    </div>
                  ) : (
                    <div className={gridCols}>
                      {stage.images.map((img, j) => (
                        <ZoomableImage
                          key={j}
                          src={img.src!}
                          label={img.label}
                          caption={img.caption}
                          width={img.width!}
                          height={img.height!}
                          previewAspect="aspect-[4/3]"
                          objectPosition="object-top"
                          containerClassName="rounded-2xl border border-ink-800"
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    ) : null,

    solution: (() => {
      const gallery = study.images?.solutionGallery;
      if (gallery && gallery.length > 0) {
        return (
          <section className={SECTION}>
            <div className="container-x">
              <div className="mb-12 md:mb-16 max-w-3xl">
                <p className="mono-label mb-3">Solution</p>
                <h2 className="text-display font-medium text-ink-50 tracking-tight">
                  The solution.
                </h2>
              </div>

              <ImageGallery
                images={gallery
                  .filter((img) => img.src)
                  .map((img) => ({
                    src: img.src as string,
                    alt: img.caption || img.label,
                    width: img.width,
                    height: img.height,
                  }))}
              />
            </div>
          </section>
        );
      }

      const solutionImageSide =
        study.slug === 'smartresolve' && !!study.images?.solution?.src;
      const solutionBigTitle = study.slug === 'tender-assist';

      const proseClass = solutionBigTitle
        ? 'text-lg md:text-xl text-ink-300 text-pretty leading-relaxed'
        : 'text-xl md:text-2xl text-ink-200 text-pretty leading-relaxed';
      const bulletClass = solutionBigTitle
        ? 'text-base md:text-lg text-ink-300 leading-relaxed text-pretty'
        : 'text-lg text-ink-200 leading-relaxed text-pretty';
      const outroClass = solutionBigTitle
        ? 'text-base md:text-lg text-ink-200 leading-relaxed text-pretty font-light'
        : 'text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light';

      const textBlock = (
        <>
          {renderParagraphs(study.solution, proseClass, 'mt-6')}

          {study.solutionBullets && study.solutionBullets.length > 0 && (
            <ul className="mt-8 space-y-5">
              {study.solutionBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className={bulletClass}>
                    {b.highlight && (
                      <>
                        <span className="text-ink-50 font-semibold">{b.highlight}</span>{' '}
                      </>
                    )}
                    {renderRich(b.text)}
                    {b.ref && (
                      <span className="ml-2 text-sm font-mono text-ink-500">({b.ref})</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {study.solutionOutro && (
            <div className="mt-8">
              {renderParagraphs(study.solutionOutro, outroClass, 'mt-6')}
            </div>
          )}
        </>
      );

      if (solutionBigTitle) {
        return (
          <section className={SECTION}>
            <div className="container-x">
              <div className="mb-12 md:mb-16 max-w-3xl">
                <p className="mono-label mb-3">Solution</p>
                <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
                  {study.solutionTitle ?? 'The solution'}
                </h2>
              </div>
              <div className="max-w-3xl">{textBlock}</div>

              {study.images?.solutionGrid && study.images.solutionGrid.length > 0 && (
                <div
                  className={`mt-16 grid gap-4 md:gap-5 ${
                    study.images.solutionGrid.length === 2
                      ? 'sm:grid-cols-2'
                      : 'sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {study.images.solutionGrid.map((img, i) => (
                    <ImagePlaceholder
                      key={i}
                      label={img.label}
                      caption={img.caption}
                      src={img.src}
                      width={img.width}
                      height={img.height}
                      aspect="aspect-[4/3]"
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      }

      if (solutionImageSide) {
        const img = study.images!.solution!;
        return (
          <section className={SECTION}>
            <div className="container-x">
              <p className="mono-label mb-8 md:mb-10">
                {study.solutionTitle ?? 'The solution'}
              </p>
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-7">{textBlock}</div>
                <div className="md:col-span-5">
                  <ZoomableImage
                    src={img.src!}
                    label={img.label}
                    caption={img.caption}
                    width={img.width!}
                    height={img.height!}
                    containerClassName="rounded-3xl border border-ink-800"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      }

      return (
        <section className={SECTION}>
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">
                  {study.solutionTitle ?? 'The solution'}
                </p>
              </div>
              <div className="md:col-span-9">{textBlock}</div>
            </div>

            {study.images?.solution && (
              <div className="mt-16">
                <ImagePlaceholder
                  label={study.images.solution.label}
                  caption={study.images.solution.caption}
                  src={study.images.solution.src}
                  width={study.images.solution.width}
                  height={study.images.solution.height}
                />
              </div>
            )}

            {study.images?.solutionGrid && study.images.solutionGrid.length > 0 && (
              <div
                className={`mt-16 grid gap-4 md:gap-5 ${
                  study.images.solutionGrid.length === 2
                    ? 'sm:grid-cols-2'
                    : 'sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {study.images.solutionGrid.map((img, i) => (
                  <ImagePlaceholder
                    key={i}
                    label={img.label}
                    caption={img.caption}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    aspect="aspect-[4/3]"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      );
    })(),

    refinement: study.refinement ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Refinement</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight">
              {study.refinement.title ?? 'Refinement'}.
            </h2>
            {study.refinement.intro && (
              <p className="mt-5 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                {study.refinement.intro}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {study.refinement.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-3xl border border-ink-800 bg-ink-900/30 overflow-hidden flex flex-col"
              >
                <ZoomableImage
                  src={card.image.src!}
                  label={card.image.label}
                  caption={card.image.caption}
                  width={card.image.width!}
                  height={card.image.height!}
                  previewAspect="aspect-[4/3]"
                  objectPosition="object-top"
                />
                <div className="p-6 md:p-8 border-t border-ink-800 flex-1">
                  <p className="mono-label mb-3">
                    / {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl md:text-2xl text-ink-50 font-medium tracking-tight mb-3">
                    {card.label}
                  </h3>
                  <p className="text-base md:text-lg text-ink-300 leading-relaxed text-pretty">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null,

    dataAnalysis: study.dataAnalysis ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 mb-12 items-start">
            <div className="md:col-span-5">
              <p className="mono-label mb-3">Data analysis</p>
              <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
                {study.dataAnalysis.title}
              </h2>
              <p className="mt-6 text-ink-300 leading-relaxed">{study.dataAnalysis.intro}</p>

              {study.dataAnalysis.bullets && (
                <ul className="mt-6 space-y-3">
                  {study.dataAnalysis.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-ink-600 mt-2 shrink-0">·</span>
                      <p className="text-ink-200 leading-relaxed">{b}</p>
                    </li>
                  ))}
                </ul>
              )}

              {study.dataAnalysis.conclusion && (
                <p className="mt-6 text-ink-300 leading-relaxed">
                  {study.dataAnalysis.conclusion}
                </p>
              )}
            </div>

            <div className="md:col-span-7">
              <BadgeDataTable
                headers={study.dataAnalysis.tableHeaders}
                rows={study.dataAnalysis.table}
                caption={study.dataAnalysis.tableCaption}
              />
            </div>
          </div>

          {study.images?.postData && (
            <div className="mt-12">
              <ImagePlaceholder
                label={study.images.postData.label}
                caption={study.images.postData.caption}
                src={study.images.postData.src}
                width={study.images.postData.width}
                height={study.images.postData.height}
              />
            </div>
          )}
        </div>
      </section>
    ) : null,

    finalSolution: study.finalSolution ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Final solution</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
                {study.finalSolution.title}
              </h2>
              <div className="mt-6">
                {renderParagraphs(
                  study.finalSolution.intro,
                  'text-lg md:text-xl text-ink-300 leading-relaxed text-pretty',
                  'mt-5',
                )}
              </div>

              <ul className="mt-8 space-y-5">
                {study.finalSolution.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg text-ink-200 leading-relaxed text-pretty">
                      {b.highlight && (
                        <span className="text-ink-50 font-medium">{b.highlight} </span>
                      )}
                      {renderRich(b.text)}
                    </p>
                  </li>
                ))}
              </ul>

              {study.finalSolution.outro && (
                <div className="mt-10">
                  {renderParagraphs(
                    study.finalSolution.outro,
                    'text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light',
                    'mt-6',
                  )}
                </div>
              )}
            </div>
          </div>

          {study.images?.finalSolution && study.images.finalSolution.length > 0 && (
            study.images.finalSolution[0].src ? (
              <div className="mt-16">
                <ImageGallery
                  images={study.images.finalSolution
                    .filter((img) => img.src)
                    .map((img) => ({
                      src: img.src as string,
                      alt: img.caption || img.label,
                      width: img.width,
                      height: img.height,
                    }))}
                />
              </div>
            ) : (
              <div className="mt-16 grid md:grid-cols-2 gap-6">
                {study.images.finalSolution.map((img, i) => (
                  <ImagePlaceholder
                    key={i}
                    label={img.label}
                    caption={img.caption}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </section>
    ) : null,

    usabilityTesting: study.usabilityTesting ? (() => {
      const usabilityImageSide =
        study.slug === 'smartresolve' && !!study.images?.usabilityTesting?.src;

      const textBlock = (
        <>
          <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
            {study.usabilityTesting!.title}
          </h2>
          <div className="mt-6">
            {renderParagraphs(
              study.usabilityTesting!.intro,
              'text-lg md:text-xl text-ink-300 leading-relaxed text-pretty',
              'mt-5',
            )}
          </div>

          {study.usabilityTesting!.quotes && study.usabilityTesting!.quotes.length > 0 && (
            <div className="mt-8 space-y-4">
              {study.usabilityTesting!.quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className="border-l-2 border-ink-600 pl-5 text-lg md:text-xl text-ink-100 italic leading-relaxed text-pretty"
                >
                  {renderRich(q)}
                </blockquote>
              ))}
            </div>
          )}

          <ul className="mt-8 space-y-5">
            {study.usabilityTesting!.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-mono text-ink-50 mt-1 shrink-0">✓</span>
                <p className="text-lg text-ink-200 leading-relaxed text-pretty">
                  {renderRich(item)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-l-2 border-ink-700 pl-6">
            {study.usabilityTesting!.outcomeLabel && (
              <p className="mono-label mb-3">{study.usabilityTesting!.outcomeLabel}</p>
            )}
            {renderParagraphs(
              study.usabilityTesting!.outcome,
              'text-lg text-ink-100 leading-relaxed text-pretty',
              'mt-5',
            )}
          </div>
        </>
      );

      if (usabilityImageSide) {
        const img = study.images!.usabilityTesting!;
        return (
          <section className={SECTION}>
            <div className="container-x">
              <p className="mono-label mb-8 md:mb-10">Validation</p>
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-7">{textBlock}</div>
                <div className="md:col-span-5">
                  <ZoomableImage
                    src={img.src!}
                    label={img.label}
                    caption={img.caption}
                    width={img.width!}
                    height={img.height!}
                    containerClassName="rounded-3xl border border-ink-800"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      }

      return (
        <section className={SECTION}>
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">Validation</p>
              </div>
              <div className="md:col-span-9">{textBlock}</div>
            </div>

            {study.images?.usabilityTesting && (
              <div className="mt-16">
                {study.images.usabilityTesting.src ? (
                  <ZoomableImage
                    src={study.images.usabilityTesting.src}
                    label={study.images.usabilityTesting.label}
                    caption={study.images.usabilityTesting.caption}
                    width={study.images.usabilityTesting.width!}
                    height={study.images.usabilityTesting.height!}
                    containerClassName="rounded-3xl border border-ink-800"
                  />
                ) : (
                  <ImagePlaceholder
                    label={study.images.usabilityTesting.label}
                    caption={study.images.usabilityTesting.caption}
                  />
                )}
              </div>
            )}
          </div>
        </section>
      );
    })() : null,

    chart: study.slug === 'session-replay' ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="mono-label mb-3">Impact data</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight">
              Adoption doubled.
            </h2>
            <p className="mt-4 text-ink-400">
              After rollout, support tickets related to SR list confusion dropped 30%, and
              enterprise customers doubled from 7 to 14 within 4 months.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2">
              <AdoptionChart />
            </div>
            <MetricGrid
              metrics={study.metrics}
              gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full"
            />
          </div>
        </div>
      </section>
    ) : null,

    metrics: (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16">
            <p className="mono-label mb-3">
              {study.nextSteps?.impactLabel ?? 'Outcomes'}
            </p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight">
              By the numbers.
            </h2>
            {study.nextSteps?.impactNote && (
              <p className="mt-5 text-lg md:text-xl text-ink-300 text-pretty">
                {study.nextSteps.impactNote}
              </p>
            )}
          </div>

          <MetricGrid metrics={study.metrics} />
        </div>
      </section>
    ),

    nextSteps: study.nextSteps ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">What&apos;s next</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
                {study.nextSteps.title}
              </h2>
              <ul className="mt-8 space-y-5">
                {study.nextSteps.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg text-ink-200 leading-relaxed text-pretty">{item}</p>
                  </li>
                ))}
              </ul>

              {study.nextSteps.note && (
                <p className="mt-10 text-lg text-ink-300 italic leading-relaxed text-pretty">
                  {study.nextSteps.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    ) : null,

    chapters: study.chapters && study.chapters.length > 0 ? (
      <>
        {study.chapters.map((chapter, ci) => (
          <section key={ci} className={SECTION}>
            <div className="container-x">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <p className="mono-label sticky top-32">{chapter.mono}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance mb-10">
                    {chapter.title}
                  </h2>

                  {chapter.blocks.map((block, bi) => {
                    if (block.kind === 'paragraph') {
                      return (
                        <p
                          key={bi}
                          className="text-lg md:text-xl text-ink-200 leading-relaxed text-pretty mb-6 last:mb-0"
                        >
                          {renderRich(block.text)}
                        </p>
                      );
                    }
                    if (block.kind === 'quote') {
                      return (
                        <blockquote
                          key={bi}
                          className="border-l-2 border-ink-600 pl-5 my-6 text-lg md:text-xl text-ink-100 italic leading-relaxed text-pretty"
                        >
                          {renderRich(block.text)}
                        </blockquote>
                      );
                    }
                    if (block.kind === 'aside') {
                      return (
                        <p
                          key={bi}
                          className="mono-label mt-12 mb-6 border-t border-ink-800 pt-8"
                        >
                          {block.label}
                        </p>
                      );
                    }
                    if (block.kind === 'list') {
                      return (
                        <div key={bi} className="my-6">
                          {block.intro && (
                            <p className="text-lg md:text-xl text-ink-200 leading-relaxed text-pretty mb-6">
                              {renderRich(block.intro)}
                            </p>
                          )}
                          <ul className="space-y-5">
                            {block.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-5">
                                <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                                  {String(ii + 1).padStart(2, '0')}
                                </span>
                                <p className="text-lg text-ink-200 leading-relaxed text-pretty">
                                  {renderRich(item)}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    if (block.kind === 'image') {
                      return (
                        <div key={bi} className="my-10">
                          <ImagePlaceholder
                            label={block.image.label}
                            caption={block.image.caption}
                            src={block.image.src}
                            width={block.image.width}
                            height={block.image.height}
                          />
                        </div>
                      );
                    }
                    if (block.kind === 'imageGrid') {
                      const cols =
                        block.images.length === 2
                          ? 'sm:grid-cols-2'
                          : 'sm:grid-cols-2 lg:grid-cols-3';
                      return (
                        <div
                          key={bi}
                          className={`my-10 grid gap-4 md:gap-5 ${cols}`}
                        >
                          {block.images.map((img, ii) => (
                            <ImagePlaceholder
                              key={ii}
                              label={img.label}
                              caption={img.caption}
                              src={img.src}
                              width={img.width}
                              height={img.height}
                              aspect="aspect-[4/3]"
                            />
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </>
    ) : null,

    outcomesReflection: study.outcomesReflection ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mono-label mb-3">Outcomes & reflection</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              {study.outcomesReflection.title ?? 'Outcomes & Reflection'}.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8 md:col-start-3">
              <p className="text-xl md:text-2xl text-ink-200 leading-relaxed text-pretty font-light">
                {renderRich(study.outcomesReflection.intro)}
              </p>

              <ul className="mt-10 space-y-6">
                {study.outcomesReflection.impacts.map((impact, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mono-label text-ink-600 mt-2 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                      <span className="text-ink-50 font-semibold">
                        {impact.label}:
                      </span>{' '}
                      {impact.description}
                      {impact.link && (
                        <>
                          {' '}
                          <a
                            href={impact.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink-100 underline decoration-ink-600 underline-offset-4 hover:decoration-ink-100 transition-colors"
                          >
                            {impact.link.label}
                          </a>
                        </>
                      )}
                    </p>
                  </li>
                ))}
              </ul>

              {study.outcomesReflection.closing && (
                <p className="mt-12 text-xl md:text-2xl text-ink-100 leading-relaxed text-pretty font-light border-t border-ink-800 pt-10">
                  {renderRich(study.outcomesReflection.closing)}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    ) : null,

    reflection: study.reflection ? (
      <section className={SECTION}>
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="mono-label mb-6">Reflection</p>
            <p className="text-2xl md:text-4xl text-ink-100 font-light tracking-tight text-pretty leading-snug">
              &ldquo;{study.reflection}&rdquo;
            </p>
          </div>
        </div>
      </section>
    ) : null,
  };

  const order = study.sectionOrder ?? DEFAULT_ORDER;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="container-x">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div className="flex items-baseline gap-4 flex-wrap">
              <Link href="/#work" className="mono-label hover:text-ink-100 transition-colors">
                ← All work
              </Link>
              <span className="text-ink-700">/</span>
              <span className="mono-label">Case {study.number}</span>
              {study.nda && (
                <span className="mono-label rounded-full border border-ink-700 px-3 py-0.5 text-ink-400">NDA</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {study.category.split('/').map((t) => t.trim()).filter(Boolean).map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-ink-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-300"
                >
                  {type}
                </span>
              ))}
              {study.year && (
                <span className="rounded-full border border-ink-50 bg-ink-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-900">
                  {study.year}
                </span>
              )}
            </div>
          </div>

          <h1 className="text-display font-medium text-ink-50 tracking-tight text-balance max-w-5xl">
            {study.title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-ink-300 max-w-3xl text-pretty leading-snug">
            {study.subtitle}
          </p>

          {/* Metadata grid */}
          {(() => {
            const compactMeta = ['tender-assist', 'session-replay', 'smartresolve', 'superpay-dashboard'].includes(study.slug);
            return (
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl border-t border-ink-800 pt-8">
                <div>
                  <p className="mono-label">Company</p>
                  <p className="text-ink-100 mt-1.5">{study.company}</p>
                </div>
                <div>
                  <p className="mono-label">Role</p>
                  <p className="text-ink-100 mt-1.5">{study.role}</p>
                </div>
                <div>
                  <p className="mono-label">Timeline</p>
                  <p className="text-ink-100 mt-1.5">{study.timeline}</p>
                </div>
                {!compactMeta && (
                  <div>
                    <p className="mono-label">Year</p>
                    <p className="text-ink-100 mt-1.5">{study.year}</p>
                  </div>
                )}
                <div>
                  <p className="mono-label">Team</p>
                  <p className="text-ink-100 mt-1.5">{study.team.join(', ')}</p>
                </div>
                {!compactMeta && (
                  <div className="col-span-2">
                    <p className="mono-label">Tools</p>
                    <p className="text-ink-100 mt-1.5 text-sm">{study.tools.join(' · ')}</p>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {order.map((key) =>
        sections[key] ? <Fragment key={key}>{sections[key]}</Fragment> : null
      )}

      {/* NEXT CASE — light */}
      <section className="py-20 md:py-28 bg-ink-50 text-ink-950">
        <div className="container-x">
          <Link
            href={`/case-study/${nextStudy.slug}`}
            className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div>
              <p className="mono-label text-ink-500 mb-4">Next case study</p>
              <h3 className="text-3xl md:text-5xl font-medium text-ink-950 tracking-tight text-balance group-hover:text-ink-600 transition-colors">
                {nextStudy.title}
              </h3>
              <p className="mt-3 text-ink-600 max-w-xl">{nextStudy.subtitle}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-ink-950">
                View case study
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </div>
            </div>

            {nextStudy.thumbnail && (
              <div className="relative aspect-[16/10] rounded-[1.75rem] overflow-hidden ring-1 ring-ink-200 bg-ink-100">
                <Image
                  src={nextStudy.thumbnail}
                  alt={`${nextStudy.title} thumbnail`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}
          </Link>
        </div>
      </section>
    </>
  );
}
