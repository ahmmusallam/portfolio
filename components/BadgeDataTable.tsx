'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { DataTableRow } from '@/lib/case-studies';

type Props = {
  headers?: [string, string, string];
  rows: DataTableRow[];
  caption?: string;
};

export default function BadgeDataTable({
  headers = ['Tags', 'Count', 'Percentage'],
  rows,
  caption,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-ink-800 bg-ink-900/30 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left tabular-nums">
          <thead>
            <tr className="border-b border-ink-800">
              <th className="mono-label px-4 md:px-5 py-2.5 text-ink-400 font-normal">{headers[0]}</th>
              <th className="mono-label px-4 md:px-5 py-2.5 text-ink-400 font-normal text-right">{headers[1]}</th>
              <th className="mono-label px-4 md:px-5 py-2.5 text-ink-400 font-normal text-right">{headers[2]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="border-b border-ink-800/60 last:border-b-0 hover:bg-ink-900/40 transition-colors"
              >
                <td className="px-4 md:px-5 py-2.5 text-ink-100 font-mono text-sm">{row.label}</td>
                <td className="px-4 md:px-5 py-2.5 text-ink-100 font-mono text-sm text-right">{row.count}</td>
                <td className="px-4 md:px-5 py-2.5 text-ink-300 font-mono text-sm text-right">{row.percentage}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="px-5 py-3 text-xs text-ink-500 font-mono uppercase tracking-wider border-t border-ink-800">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
