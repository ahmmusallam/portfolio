import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import ProcessDiagram from '@/components/ProcessDiagram';
import MetricGrid from '@/components/MetricGrid';
import InsightsGrid from '@/components/InsightsGrid';
import AdoptionChart from '@/components/AdoptionChart';

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
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Problem</p>
            </div>
            <div className="md:col-span-9">
              <ul className="space-y-5">
                {study.problem.map((p, i) => (
                  <li key={i} className="flex items-start gap-5 group">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-lg md:text-xl text-ink-200 text-pretty leading-relaxed">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

      {/* INSIGHTS */}
      {study.insights && study.insights.length > 0 && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="mb-12 md:mb-16 max-w-2xl">
              <p className="mono-label mb-3">Customer insights</p>
              <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
                Themes from the field.
              </h2>
            </div>

            <InsightsGrid insights={study.insights} />
          </div>
        </section>
      )}

      {/* SOLUTION */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">The solution</p>
            </div>
            <div className="md:col-span-9">
              <p className="text-xl md:text-2xl text-ink-200 text-pretty leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="mt-16 relative aspect-[16/9] border border-ink-800 bg-ink-900/30 overflow-hidden corner-marks">
            <span />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-6">
                <p className="mono-label">Placeholder · final design</p>
                <p className="text-ink-500 text-sm mt-2 max-w-md">Swap with mockups or screens from /public</p>
              </div>
            </div>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
          </div>
        </div>
      </section>

      {/* CHART (only for Session Replay case study) */}
      {study.slug === 'session-replay' && (
        <section className="py-20 md:py-28 border-t border-ink-800">
          <div className="container-x">
            <div className="mb-12 max-w-2xl">
              <p className="mono-label mb-3">Impact data</p>
              <h2 className="text-display font-medium text-ink-50 tracking-tight">
                Adoption doubled.
              </h2>
            </div>
            <AdoptionChart />
          </div>
        </section>
      )}

      {/* METRICS */}
      <section className="py-20 md:py-28 border-t border-ink-800">
        <div className="container-x">
          <div className="mb-12 md:mb-16">
            <p className="mono-label mb-3">Outcomes</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight">
              By the numbers.
            </h2>
          </div>

          <MetricGrid metrics={study.metrics} />
        </div>
      </section>

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
