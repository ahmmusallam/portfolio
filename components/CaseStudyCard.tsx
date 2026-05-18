'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CaseStudy } from '@/lib/case-studies';

export default function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/case-study/${study.slug}`}
        className="group relative block border border-ink-800 bg-ink-900/30 backdrop-blur p-8 md:p-10 hover:border-ink-600 transition-all duration-500"
      >
        {/* Top meta strip */}
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <span className="mono-label text-ink-100">{study.number}</span>
          <div className="flex items-center gap-3">
            {study.nda && (
              <span className="mono-label border border-ink-700 px-2 py-1 text-ink-400">NDA</span>
            )}
            <span className="mono-label">{study.year}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-medium text-ink-50 tracking-tight text-balance">
          {study.title}
        </h3>
        <p className="mt-3 text-base md:text-lg text-ink-300 text-pretty max-w-xl">{study.subtitle}</p>

        {/* Bottom meta */}
        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span className="mono-label">{study.company}</span>
            <span className="mono-label">·</span>
            <span className="mono-label">{study.category}</span>
          </div>

          <div className="flex items-center gap-2 text-ink-100">
            <span className="mono-label text-ink-100">Read case study</span>
            <span className="font-mono text-base transition-transform duration-500 group-hover:translate-x-1">→</span>
          </div>
        </div>

        {/* Hover scan line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -inset-y-1/2 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-ink-100/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animation: 'scan 4s linear infinite' }} />
        </div>
      </Link>
    </motion.div>
  );
}
