'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Insight } from '@/lib/case-studies';

export default function InsightsGrid({ insights }: { insights: Insight[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const cols = insights.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div ref={ref} className={`grid ${cols} gap-4`}>
      {insights.map((insight, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="rounded-3xl border border-ink-800 bg-ink-900/30 p-8 group hover:bg-ink-900/50 transition-colors duration-500"
        >
          <div className="flex items-baseline gap-3 mb-4">
            <span className="mono-label">/ {String(i + 1).padStart(2, '0')}</span>
            <h4 className="text-sm font-mono uppercase tracking-wider text-ink-100">{insight.title}</h4>
          </div>

          {insight.bullets && insight.bullets.length > 0 && (
            <ul className="space-y-2 mb-5">
              {insight.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-ink-600 mt-1.5 shrink-0">·</span>
                  <p className="text-base text-ink-300 leading-relaxed text-pretty">{b}</p>
                </li>
              ))}
            </ul>
          )}

          {insight.quotes && insight.quotes.length > 0 && (
            <div className="space-y-3 mt-4 border-l border-ink-800 pl-4">
              {insight.quotes.map((q, j) => (
                <p key={j} className="text-sm text-ink-400 italic leading-relaxed text-pretty">
                  {q}
                </p>
              ))}
            </div>
          )}

          {insight.content && !insight.bullets && !insight.quotes && (
            <p className="text-base md:text-lg text-ink-300 leading-relaxed text-pretty">{insight.content}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
