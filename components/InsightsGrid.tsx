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
          <span className="mono-label block mb-3">/ {String(i + 1).padStart(2, '0')}</span>
          <h4 className="text-xl md:text-2xl text-ink-50 font-medium tracking-tight text-balance mb-6">
            {insight.title}
          </h4>

          {insight.bullets && insight.bullets.length > 0 && (
            <ul className="space-y-3 mb-6">
              {insight.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-ink-500 mt-2 shrink-0 h-1 w-1 rounded-full bg-ink-500" aria-hidden />
                  <p className="text-[15px] md:text-base text-ink-200 leading-relaxed text-pretty">{b}</p>
                </li>
              ))}
            </ul>
          )}

          {insight.quotes && insight.quotes.length > 0 && (
            <div className="mt-6 pt-6 border-t border-ink-800 space-y-4">
              <p className="mono-label text-ink-500">Quotes</p>
              {insight.quotes.map((q, j) => (
                <p
                  key={j}
                  className="text-[13px] md:text-sm text-ink-400 italic leading-relaxed text-pretty border-l-2 border-ink-700 pl-4"
                >
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
