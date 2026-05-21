import Image from 'next/image';
import { VoisLogo, LuciqLogo, EtisalatLogo } from '@/components/CompanyLogos';

const experience = [
  {
    period: 'Nov 2025 — Present',
    role: 'Senior Product Designer',
    company: 'VOIS',
    Logo: VoisLogo,
    // Wide, thin wordmark — reads light, but the lockup is tall; keep it modest.
    logoClass: 'h-[20px]',
    detail: 'Collaborating with Vodafone Germany to design AI-powered tools that enhance employee workflows and productivity. Contributing to the AI design system.',
  },
  {
    period: 'Aug 2024 — Oct 2025',
    role: 'Product Designer',
    company: 'Luciq (Formerly Instabug)',
    Logo: LuciqLogo,
    // Letters sit low under the star — bump height so the wordmark matches.
    logoClass: 'h-[26px]',
    detail: 'Designed AI-driven features and scalable systems within the AI squads. Led the Session Replay redesign and SmartResolve crash-fix workflow.',
  },
  {
    period: 'Apr 2023 — Jun 2024',
    role: 'Product Designer',
    company: 'e& Egypt (Etisalat Egypt)',
    Logo: EtisalatLogo,
    // Dense, solid symbol — reads heavy, so render it smaller.
    logoClass: 'h-[21px]',
    detail: 'Contributed to SuperPay, a large-scale fintech product. Built intuitive, on-brand interfaces and collaborated closely with developers.',
  },
  {
    period: 'Jul 2022 — Feb 2023',
    role: 'UX Researcher',
    company: 'e& Egypt (Etisalat Egypt)',
    Logo: EtisalatLogo,
    logoClass: 'h-[21px]',
    detail: 'Part of the EUX team. Tested digital products, conducted UX research, and shared insights through reports and videos.',
  },
];

const education = [
  {
    period: 'Oct 2021 — Jun 2022',
    title: '9-Month Professional Diploma',
    place: 'Information Technology Institute (ITI)',
    detail: 'Web and User Interface track. Studied the process of designing and developing web and user interfaces.',
  },
  {
    period: 'Sep 2013 — Jun 2018',
    title: 'BSc. of Engineering, Architecture',
    place: 'Tanta University',
    detail: 'Graduation project: International Media Center at The New Capital.',
  },
];

export const metadata = {
  title: 'About — Ahmed Hamdy Musallam',
  description: 'Product Designer with experience building AI-powered tools, developer products, and B2B platforms across SaaS and fintech.',
};

export default function AboutPage() {
  return (
    <>
      {/* BIO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-square rounded-[1.75rem] overflow-hidden">
                <Image
                  src="/ahmedhamdy.png"
                  alt="Portrait of Ahmed Hamdy Musallam"
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-6 text-base md:text-lg text-ink-200 leading-relaxed text-pretty">
              <p>
                Product Designer with experience building AI-powered tools, developer products, and B2B platforms across SaaS and fintech.
              </p>
              <p>
                At <span className="text-ink-50 font-medium">VOIS</span>, I design AI tools for Vodafone Germany that enhance employee productivity and streamline internal workflows, while contributing to the AI design system. Previously at <span className="text-ink-50 font-medium">Luciq (formerly Instabug)</span>, I worked within the AI squads to design features that help developers debug, resolve, and improve app quality through automation and simplified workflows. Earlier at <span className="text-ink-50 font-medium">e& (Etisalat)</span>, I contributed to SuperPay, a large-scale fintech product, and internal tools.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/ahmmusallam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ink-200 rounded-full border border-ink-700 px-5 py-2.5 hover:border-ink-300 hover:text-ink-50 transition-colors"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ink-200 rounded-full border border-ink-700 px-5 py-2.5 hover:border-ink-300 hover:text-ink-50 transition-colors"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 md:py-24 border-t border-ink-800">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Experience</p>
            </div>
            <div className="md:col-span-9 space-y-12">
              {experience.map((job, i) => (
                <div key={i} className="grid md:grid-cols-12 gap-6 pb-12 border-b border-ink-800 last:border-0 last:pb-0">
                  <div className="md:col-span-4">
                    <p className="mono-label">{job.period}</p>
                  </div>
                  <div className="md:col-span-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-medium text-ink-50">{job.role}</h3>
                        <p className="mono-label mt-2 text-ink-200">@ {job.company}</p>
                      </div>
                      <job.Logo className={`${job.logoClass} w-auto shrink-0 mt-1.5 text-ink-200`} />
                    </div>
                    <p className="mt-4 text-ink-300 text-pretty leading-relaxed">{job.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 md:py-24 border-t border-ink-800 bg-gradient-to-b from-ink-950 via-ink-800 to-ink-950">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Education</p>
            </div>
            <div className="md:col-span-9 space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="grid md:grid-cols-12 gap-6 pb-12 border-b border-ink-800 last:border-0 last:pb-0">
                  <div className="md:col-span-4">
                    <p className="mono-label">{edu.period}</p>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-xl md:text-2xl font-medium text-ink-50">{edu.title}</h3>
                    <p className="mono-label mt-1 text-ink-200">{edu.place}</p>
                    <p className="mt-4 text-ink-300 text-pretty leading-relaxed">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20 md:py-24 border-t border-ink-800">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label sticky top-32">Recognition</p>
            </div>
            <div className="md:col-span-9">
              <div className="rounded-3xl border border-ink-800 p-8 md:p-10 bg-ink-900/30 relative">
                <p className="mono-label mb-3">2025 · Q2</p>
                <h3 className="text-2xl md:text-3xl font-medium text-ink-50">Instabug Ultimate Team</h3>
                <p className="mt-4 text-ink-300 text-pretty leading-relaxed max-w-2xl">
                  Recognized as part of Instabug&apos;s Ultimate Team for contributions across multiple squads:
                </p>
                <ul className="mt-4 space-y-3 max-w-2xl">
                  <li className="flex gap-3">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">/</span>
                    <p className="text-ink-200"><span className="text-ink-50 font-medium">Feedback Squad:</span> Led the redesign and enhancements of Session Replay, significantly increasing enterprise adoption.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mono-label text-ink-600 mt-1.5 shrink-0">/</span>
                    <p className="text-ink-200"><span className="text-ink-50 font-medium">AI Squad:</span> Designed SmartResolve, an AI-powered agent that automatically generates fixes for app crashes.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
