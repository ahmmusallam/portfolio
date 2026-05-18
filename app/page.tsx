import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import CaseStudyCard from '@/components/CaseStudyCard';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="container-x relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 border border-ink-800 px-3 py-1.5 mb-10 group">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-ink-100 animate-pulse-slow" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-100" />
                </span>
                <span className="mono-label text-ink-200">Available · Q3 2026</span>
              </div>

              <h1 className="text-hero font-medium text-ink-50 text-balance">
                Ahmed
                <br />
                <span className="text-ink-400">Hamdy</span> Musallam
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-ink-200 max-w-2xl text-pretty leading-snug">
                Product Designer crafting <span className="text-ink-50">AI tools</span>, <span className="text-ink-50">developer products</span>, and <span className="text-ink-50">fintech platforms</span> through systems thinking.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-8">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-3 bg-ink-100 text-ink-950 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-ink-50 transition-colors"
                >
                  View work
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
                <Link href="/about" className="mono-label link-underline text-ink-200 hover:text-ink-50">
                  About me
                </Link>
              </div>

              {/* Meta strip */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                <div>
                  <p className="mono-label">Currently</p>
                  <p className="text-ink-100 text-sm mt-1">Senior PD @ VOIS</p>
                </div>
                <div>
                  <p className="mono-label">Based in</p>
                  <p className="text-ink-100 text-sm mt-1">Cairo, Egypt</p>
                </div>
                <div>
                  <p className="mono-label">Focus</p>
                  <p className="text-ink-100 text-sm mt-1">AI · SaaS · Fintech</p>
                </div>
                <div>
                  <p className="mono-label">Years</p>
                  <p className="text-ink-100 text-sm mt-1">3+ in product</p>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="lg:col-span-4 hidden lg:block">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES MARQUEE */}
      <section className="py-12 border-y border-ink-800 overflow-hidden">
        <div className="container-x mb-6">
          <p className="mono-label">Selected experience</p>
        </div>
        <div className="marquee">
          <div className="marquee__content">
            {['VOIS · Vodafone Intelligent Solutions', 'Luciq · formerly Instabug', 'e& · Etisalat Egypt', 'AI Design System', 'Developer Tools', 'B2B SaaS', 'Fintech Platforms'].map((item, i) => (
              <span key={i} className="font-mono text-xl md:text-3xl text-ink-700 whitespace-nowrap">
                {item} <span className="text-ink-800 mx-4">/</span>
              </span>
            ))}
          </div>
          <div className="marquee__content" aria-hidden="true">
            {['VOIS · Vodafone Intelligent Solutions', 'Luciq · formerly Instabug', 'e& · Etisalat Egypt', 'AI Design System', 'Developer Tools', 'B2B SaaS', 'Fintech Platforms'].map((item, i) => (
              <span key={i} className="font-mono text-xl md:text-3xl text-ink-700 whitespace-nowrap">
                {item} <span className="text-ink-800 mx-4">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
            <div>
              <p className="mono-label mb-3">Selected work · {String(caseStudies.length).padStart(2, '0')}</p>
              <h2 className="text-display font-medium text-ink-50 tracking-tight">
                Case studies
              </h2>
            </div>
            <p className="mono-label text-ink-500 max-w-xs">Detailed breakdowns of process, problems, and outcomes across 4 industries.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-ink-800">
        <div className="container-x">
          <div className="max-w-4xl">
            <p className="mono-label mb-6">Let&apos;s talk</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              Have a project that needs design thinking and execution?
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="mailto:ahmed.hamdy.musallam@gmail.com"
                className="group inline-flex items-center gap-3 bg-ink-100 text-ink-950 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-ink-50 transition-colors"
              >
                Get in touch
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <Link href="/contact" className="mono-label link-underline text-ink-200 hover:text-ink-50">
                More ways to reach me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
