'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import type { CompetitorCard, CompetitorFeature } from '@/lib/case-studies';

const statusGlyph = (status?: CompetitorFeature['status']) => {
  switch (status) {
    case 'positive':
      return { symbol: '✓', color: 'text-ink-50' };
    case 'negative':
      return { symbol: '✕', color: 'text-ink-600' };
    case 'partial':
      return { symbol: '◐', color: 'text-ink-300' };
    default:
      return { symbol: '·', color: 'text-ink-500' };
  }
};

export default function CompetitorGrid({ competitors }: { competitors: CompetitorCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {competitors.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-ink-800 bg-ink-900/30 flex flex-col overflow-hidden"
        >
          <ImagePlaceholder
            label={c.image.label}
            caption={c.image.caption}
            aspect="aspect-[4/3]"
            rounded={false}
          />
          <div className="p-6 border-t border-ink-800">
            <h4 className="text-lg font-medium text-ink-50 mb-5">{c.name}</h4>
            <ul className="space-y-3">
              {c.features.map((f, j) => {
                const g = statusGlyph(f.status);
                return (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className={`font-mono shrink-0 mt-0.5 ${g.color}`}>{g.symbol}</span>
                    <div className="leading-relaxed">
                      <span className="mono-label">{f.label}</span>
                      <span className="text-ink-200 ml-2">{f.value}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
