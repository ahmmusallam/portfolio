import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import ProcessDiagram from '@/components/ProcessDiagram';
import MetricGrid from '@/components/MetricGrid';
import InsightsGrid from '@/components/InsightsGrid';
import AdoptionChart from '@/components/AdoptionChart';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import BadgeDataTable from '@/components/BadgeDataTable';
import CompetitorGrid from '@/components/CompetitorGrid';

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

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 border-b border-ink-800">
        <div className="container-x">
          <div className="flex items-baseline gap-4 mb-8 flex-wrap">
            <Link href="/#work" className="mono-label hover:text-ink-100 transition-colors">
              ← All work
            </Link>
            <span className="text-ink-700">/</span>
            <span className="mono-label">Case {study.number}</span>
            {study.nda && (
              <span className="mono-label border border-ink-700 px-2 py-1 text-ink-400">NDA</span>
            )}
          </div>

          <h1 className="text-display font-medium text-ink-50 tracking-tight text-balance max-w-5xl">
            {study.title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-ink-300 max-w-3xl text-pretty leading-snug">
            {study.subtitle}
          </p>

          {/* Metadata grid */}
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
            <div>
              <p className="mono-label">Year</p>
              <p className="text-ink-100 mt-1.5">{study.year}</p>
            </div>
            <div>
              <p className="mono-label">Category</p>
              <p className="text-ink-100 mt-1.5">{study.category}</p>
            </div>
            <div>
              <p className="mono-label">Team</p>
              <p className="text-ink-100 mt-1.5 text-sm">{study.team.join(', ')}</p>
            </div>
            <div className="col-span-2">
              <p className="mono-label">Tools</p>
              <p className="text-ink-100 mt-1.5 text-sm">{study.tools.join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Overview</p>
            </div>
            <div className="md:col-span-9">
              <p className="text-2xl md:text-3xl text-ink-100 text-pretty leading-snug font-light">
                {study.overview}
              </p>
            </div>
          </div>

          {study.images?.overview && (
            <div className="mt-16">
              <ImagePlaceholder
                label={study.images.overview.label}
                caption={study.images.overview.caption}
              />
            </div>
          )}
        </div>
      </section>

      {/* PROCESS DIAGRAM */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <div className="mb-12 md:mb-16">
            <p className="mono-label mb-3">The process</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              From research to <span className="text-ink-400">handoff</span>.
            </h2>
            <p className="mt-4 text-ink-400 max-w-xl">A {study.process.length}-stage process designed to align research, design, and engineering on shared signals.</p>
          </div>

          <ProcessDiagram stages={study.process} />
        </div>
      </section>

      {/* PROBLEM + TIMELINE */}
      <section className="py-20 md:py-28 border-t border-ink-800">
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

      {/* INSIGHTS */}
      {study.insights && study.insights.length > 0 && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="mb-12 md:mb-16 max-w-2xl">
              <p className="mono-label mb-3">
                {study.userResearch ? 'User research & themes' : 'Customer insights'}
              </p>
              <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
                {study.userResearch ? 'Voices from the field.' : 'Themes from the field.'}
              </h2>
              {!study.userResearch && study.slug === 'session-replay' && (
                <p className="mt-4 text-ink-400">
                  Through customer interviews with CarMax, Property Finder, and Cummins, we
                  collected quotes and observations. Here are the themes we made from the insights.
                </p>
              )}
            </div>

            {study.userResearch && (
              <div className="mb-12 grid sm:grid-cols-2 gap-px bg-ink-800 border border-ink-800">
                <div className="bg-ink-950 p-8">
                  <p className="mono-label mb-3">Interviews</p>
                  <p className="text-2xl md:text-3xl text-ink-50 font-medium tracking-tight">
                    {study.userResearch.headline}
                  </p>
                </div>
                <div className="bg-ink-950 p-8">
                  <p className="mono-label mb-3">Roles</p>
                  <p className="text-ink-200 leading-relaxed text-pretty">
                    {study.userResearch.detail}
                  </p>
                </div>
              </div>
            )}

            <InsightsGrid insights={study.insights} />

            {study.images?.insights && (
              <div className="mt-16">
                <ImagePlaceholder
                  label={study.images.insights.label}
                  caption={study.images.insights.caption}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* COMPETITIVE BENCHMARK */}
      {study.competitiveBenchmark && (
        <section className="py-20 md:py-28 border-t border-ink-800">
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
      )}

      {/* IMPROVEMENT OPPORTUNITIES */}
      {study.improvementOpportunities && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">Opportunities</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
                  {study.improvementOpportunities.title}
                </h2>
                {study.improvementOpportunities.intro && (
                  <p className="mt-4 text-ink-300 leading-relaxed text-pretty">
                    {study.improvementOpportunities.intro}
                  </p>
                )}
                <ul className="mt-8 space-y-5">
                  {study.improvementOpportunities.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono text-ink-50 mt-1 shrink-0">✓</span>
                      <p className="text-lg text-ink-200 leading-relaxed text-pretty">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GOALS */}
      {study.goals && study.goals.length > 0 && (
        <section className="py-20 md:py-28 border-t border-ink-800">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-800 border border-ink-800">
              {study.goals.map((goal, i) => (
                <div key={i} className="bg-ink-950 p-8">
                  <p className="mono-label mb-4">{goal.number}</p>
                  <p className="text-lg text-ink-200 leading-relaxed text-pretty">{goal.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SOLUTION */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">{study.solutionTitle ?? 'The solution'}</p>
            </div>
            <div className="md:col-span-9">
              <p className="text-xl md:text-2xl text-ink-200 text-pretty leading-relaxed">
                {study.solution}
              </p>

              {study.solutionBullets && study.solutionBullets.length > 0 && (
                <ul className="mt-8 space-y-5">
                  {study.solutionBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg text-ink-200 leading-relaxed text-pretty">
                        {b.text}
                        {b.ref && (
                          <span className="ml-2 text-sm font-mono text-ink-500">({b.ref})</span>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {study.solutionOutro && (
                <p className="mt-8 text-lg md:text-xl text-ink-100 leading-relaxed text-pretty font-light">
                  {study.solutionOutro}
                </p>
              )}
            </div>
          </div>

          {study.images?.solution && (
            <div className="mt-16">
              <ImagePlaceholder
                label={study.images.solution.label}
                caption={study.images.solution.caption}
              />
            </div>
          )}
        </div>
      </section>

      {/* DATA ANALYSIS */}
      {study.dataAnalysis && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
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
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* FINAL SOLUTION */}
      {study.finalSolution && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">Final solution</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
                  {study.finalSolution.title}
                </h2>
                <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                  {study.finalSolution.intro}
                </p>

                <ul className="mt-8 space-y-5">
                  {study.finalSolution.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className="mono-label text-ink-600 mt-1.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg text-ink-200 leading-relaxed text-pretty">
                        {b.highlight && (
                          <span className="text-ink-50 font-medium">{b.highlight}: </span>
                        )}
                        {b.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {study.images?.finalSolution && study.images.finalSolution.length > 0 && (
              <div className="mt-16 grid md:grid-cols-2 gap-6">
                {study.images.finalSolution.map((img, i) => (
                  <ImagePlaceholder key={i} label={img.label} caption={img.caption} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* USABILITY TESTING & OUTCOME */}
      {study.usabilityTesting && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">Validation</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl md:text-4xl font-medium text-ink-50 tracking-tight text-balance">
                  {study.usabilityTesting.title}
                </h2>
                <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed text-pretty">
                  {study.usabilityTesting.intro}
                </p>

                <ul className="mt-8 space-y-5">
                  {study.usabilityTesting.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono text-ink-50 mt-1 shrink-0">✓</span>
                      <p className="text-lg text-ink-200 leading-relaxed text-pretty">{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-l-2 border-ink-700 pl-6">
                  {study.usabilityTesting.outcomeLabel && (
                    <p className="mono-label mb-3">{study.usabilityTesting.outcomeLabel}</p>
                  )}
                  <p className="text-lg text-ink-100 leading-relaxed text-pretty">
                    {study.usabilityTesting.outcome}
                  </p>
                </div>
              </div>
            </div>

            {study.images?.usabilityTesting && (
              <div className="mt-16">
                <ImagePlaceholder
                  label={study.images.usabilityTesting.label}
                  caption={study.images.usabilityTesting.caption}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* CHART (only for Session Replay case study) */}
      {study.slug === 'session-replay' && (
        <section className="py-20 md:py-28 border-t border-ink-800">
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
            <AdoptionChart />
          </div>
        </section>
      )}

      {/* METRICS */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <div className="mb-12 md:mb-16">
            <p className="mono-label mb-3">
              {study.nextSteps?.impactLabel ?? 'Outcomes'}
              {study.nextSteps?.impactNote && (
                <span className="text-ink-700 ml-3">· {study.nextSteps.impactNote}</span>
              )}
            </p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight">
              By the numbers.
            </h2>
          </div>

          <MetricGrid metrics={study.metrics} />
        </div>
      </section>

      {/* NEXT STEPS */}
      {study.nextSteps && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label sticky top-32">What's next</p>
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

            {study.images?.nextSteps && (
              <div className="mt-16">
                <ImagePlaceholder
                  label={study.images.nextSteps.label}
                  caption={study.images.nextSteps.caption}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* REFLECTION */}
      {study.reflection && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="max-w-3xl">
              <p className="mono-label mb-6">Reflection</p>
              <p className="text-2xl md:text-4xl text-ink-100 font-light tracking-tight text-pretty leading-snug">
                &ldquo;{study.reflection}&rdquo;
              </p>
            </div>
          </div>
        </section>
      )}

      {/* NEXT CASE */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <Link
            href={`/case-study/${nextStudy.slug}`}
            className="group block"
          >
            <p className="mono-label mb-4">Next case study</p>
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <h3 className="text-3xl md:text-5xl font-medium text-ink-50 tracking-tight text-balance group-hover:text-ink-200 transition-colors">
                {nextStudy.title}
                <span className="text-ink-500 ml-3">· {nextStudy.number}</span>
              </h3>
              <span className="font-mono text-2xl text-ink-100 transition-transform duration-500 group-hover:translate-x-2">→</span>
            </div>
            <p className="mt-3 text-ink-400 max-w-2xl">{nextStudy.subtitle}</p>
          </Link>
        </div>
      </section>
    </>
  );
}
