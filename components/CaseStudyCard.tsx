'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CaseStudy } from '@/lib/case-studies';

export default function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
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
          {/* Top meta strip */}
          <div className="flex items-baseline justify-between mb-8 md:mb-10">
            <span className="mono-label text-ink-100">{study.number}</span>
            <div className="flex items-center gap-3">
              {study.nda && (
                <span className="mono-label rounded-full border border-ink-700 px-3 py-0.5 text-ink-400">NDA</span>
              )}
              <span className="mono-label">{study.year}</span>
            </div>
          </div>

          {/* Title + subtitle */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-medium text-ink-50 tracking-tight text-balance">
              {study.title}
            </h3>
            <p className="mt-3 text-base md:text-lg text-ink-300 text-pretty max-w-xl">{study.subtitle}</p>
          </div>

          {/* Bottom meta */}
          <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <span className="mono-label">{study.company}</span>
              <span className="mono-label">·</span>
              <span className="mono-label">{study.category}</span>
            </div>

            <div className="flex items-center gap-2 text-ink-100">
              <span className="font-sans text-sm font-medium text-ink-100">Read case study</span>
              <span className="text-base transition-transform duration-500 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
