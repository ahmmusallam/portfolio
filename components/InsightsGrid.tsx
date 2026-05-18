'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Insight = { title: string; content: string };

export default function InsightsGrid({ insights }: { insights: Insight[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="grid sm:grid-cols-2 gap-px bg-ink-800">
      {insights.map((insight, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-ink-950 p-8 group hover:bg-ink-900 transition-colors duration-500"
        >
          <div className="flex items-baseline gap-3 mb-4">
            <span className="mono-label">/ {String(i + 1).padStart(2, '0')}</span>
            <h4 className="text-sm font-mono uppercase tracking-wider text-ink-100">{insight.title}</h4>
          </div>
          <p className="text-base md:text-lg text-ink-300 leading-relaxed text-pretty">{insight.content}</p>
        </motion.div>
      ))}
    </div>
  );
}
