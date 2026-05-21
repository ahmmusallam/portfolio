import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import CaseStudyCard from '@/components/CaseStudyCard';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  return (
    <>
      {/* HERO — dark */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="container-x relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">


              <h1 className="text-hero font-medium text-ink-50 text-balance">
                Ahmed
                <br />
                <span className="text-ink-400">Hamdy</span> Musallam
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-ink-200 max-w-2xl text-pretty leading-snug">
                Senior Product Designer crafting <span className="text-ink-50">AI tools</span>, <span className="text-ink-50">developer products</span>, and <span className="text-ink-50">fintech platforms</span> through systems thinking.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-8">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2.5 bg-ink-100 text-ink-950 rounded-full px-7 py-3.5 font-sans text-base font-medium hover:bg-ink-50 transition-colors"
                >
                  View Work
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Meta strip */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                <div>
                  <p className="mono-label">Currently</p>
                  <p className="text-ink-100 text-sm mt-1">Senior PD @ VOIS</p>
                </div>
                <div>
                  <p className="mono-label">Experience</p>
                  <p className="text-ink-100 text-sm mt-1">4+ Years</p>
                </div>
                <div>
                  <p className="mono-label">Focus</p>
                  <p className="text-ink-100 text-sm mt-1">AI · SaaS · Fintech</p>
                </div>
                <div>
                  <p className="mono-label">Based in</p>
                  <p className="text-ink-100 text-sm mt-1">Cairo, Egypt</p>
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

      {/* WORK — dark */}
      <section id="work" className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-4">
            <div>
              <h2 className="text-display font-medium text-ink-50 tracking-tight">
                Case studies
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="py-24 md:py-32 border-t border-ink-800">
        <div className="container-x">
          <div className="max-w-4xl">
            <p className="mono-label mb-6">Let&apos;s talk</p>
            <h2 className="text-display font-medium text-ink-50 tracking-tight text-balance">
              Have a project?
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="https://www.linkedin.com/in/ahmmusallam/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-ink-100 text-ink-950 rounded-full px-7 py-3.5 font-sans text-base font-medium hover:bg-ink-50 transition-colors"
              >
                LinkedIn
                <span className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
