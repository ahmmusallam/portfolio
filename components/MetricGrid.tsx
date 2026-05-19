'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Metric } from '@/lib/case-studies';

export default function MetricGrid({ metrics }: { metrics: Metric[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-ink-800 bg-ink-900/30 p-8 hover-lift"
        >
          <div className="mono-label mb-6">/ {String(i + 1).padStart(2, '0')}</div>
          <p className="text-5xl md:text-6xl font-medium text-ink-50 tabular-nums tracking-tight">{m.value}</p>
          <p className="text-base text-ink-200 mt-3 font-medium">{m.label}</p>
          {m.context && <p className="text-sm text-ink-500 mt-1">{m.context}</p>}
        </motion.div>
      ))}
    </div>
  );
}
