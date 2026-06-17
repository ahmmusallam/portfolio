'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import type { CaseStudy } from '@/lib/case-studies';
import { VoisLogo, LuciqLogo, SuperPayLogo } from '@/components/CompanyLogos';

type CompanyMeta = {
  Logo?: ComponentType<{ className?: string }>;
  logoClass?: string;
  label?: string;
};

// Keyed by slug so editing a study's `company` text (shown inside the case
// study) never changes the card's brand badge. `label` is the text fallback
// for studies without a logo.
const companyMeta: Record<string, CompanyMeta> = {
  'tender-assist': { Logo: VoisLogo, logoClass: 'h-3.5' },
  'session-replay': { Logo: LuciqLogo, logoClass: 'h-4' },
  smartresolve: { Logo: LuciqLogo, logoClass: 'h-4' },
  'superpay-dashboard': { Logo: SuperPayLogo, logoClass: 'h-4' },
  'superpay-website': { Logo: SuperPayLogo, logoClass: 'h-4' },
  'bits-and-pixels': { label: 'Bitsnpixels.io' },
};

export default function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const types = study.category.split('/').map((t) => t.trim()).filter(Boolean);
  const company = companyMeta[study.slug] ?? { label: study.company };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={`/case-study/${study.slug}`}
        className="group relative flex h-full flex-col rounded-[1.75rem] border border-ink-800 bg-ink-900/30 backdrop-blur hover:border-ink-600 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink-800 bg-ink-900/50">
          {study.locked && (
            <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink-900/80 backdrop-blur border border-ink-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-3 w-3"
              >
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Locked
            </span>
          )}
          {study.thumbnail ? (
            <Image
              src={study.thumbnail}
              alt={`${study.title} thumbnail`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-6">
                <p className="mono-label">Placeholder · {study.title}</p>
                <p className="text-ink-500 text-sm mt-2">Add thumbnail in /public</p>
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-8 md:p-10">
          {/* Top strip: product-type badges (left) + company badge (right) */}
          <div className="flex items-start justify-between gap-3 mb-8 md:mb-10">
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center shrink-0 rounded-full border border-ink-700 px-3 py-1.5">
              {company.Logo ? (
                <company.Logo className={`${company.logoClass} w-auto text-ink-200`} />
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-200">{company.label}</span>
              )}
            </span>
          </div>

          {/* Title + subtitle */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-medium text-ink-50 tracking-tight text-balance">
              {study.title}
            </h3>
            <p className="mt-3 text-base md:text-lg text-ink-300 text-pretty max-w-xl">{study.subtitle}</p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-2 text-ink-100">
            <span className="font-sans text-sm font-medium text-ink-100">Read case study</span>
            <span className="text-base transition-transform duration-500 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
