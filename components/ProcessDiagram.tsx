'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ProcessStage } from '@/lib/case-studies';

type Props = {
  stages: ProcessStage[];
};

export default function ProcessDiagram({ stages }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [active, setActive] = useState<number | null>(null);

  // Auto-cycle through stages once visible (subtle ambient animation)
  useEffect(() => {
    if (!inView) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    stages.forEach((_, i) => {
      timeouts.push(setTimeout(() => setActive(i), 400 + i * 600));
    });
    timeouts.push(setTimeout(() => setActive(null), 400 + stages.length * 600 + 2000));
    return () => timeouts.forEach(clearTimeout);
  }, [inView, stages.length]);

  return (
    <div ref={ref} className="relative">
      {/* Desktop horizontal flow */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-6 right-6 h-px bg-ink-800">
            <motion.div
              className="absolute inset-y-0 left-0 bg-ink-300"
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </div>

          <div className="grid relative" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}>
            {stages.map((stage, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-4 group cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.15 }}
                  className={`relative w-12 h-12 rounded-full grid place-items-center transition-all duration-500 ${
                    active === i
                      ? 'bg-ink-100 text-ink-950 scale-110 node-pulse'
                      : 'bg-ink-900 border border-ink-700 text-ink-300 group-hover:border-ink-300'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  className="mt-4"
                >
                  <p className={`mono-label transition-colors duration-300 ${active === i ? 'text-ink-100' : ''}`}>
                    {stage.label}
                  </p>
                  <p className={`text-sm mt-1 transition-colors duration-300 ${active === i ? 'text-ink-200' : 'text-ink-400'}`}>
                    {stage.detail}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="mt-12 min-h-[120px] relative">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  y: active === i ? 0 : 8,
                  pointerEvents: active === i ? 'auto' : 'none',
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="rounded-2xl border border-ink-800 bg-ink-900/50 backdrop-blur p-6 max-w-2xl mx-auto">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="mono-label">stage {String(i + 1).padStart(2, '0')}</span>
                    <span className="text-ink-700">·</span>
                    <span className="font-mono text-xs text-ink-100 uppercase tracking-wider">{stage.label}</span>
                  </div>
                  {stage.items && (
                    <ul className="space-y-1.5">
                      {stage.items.map((item, j) => (
                        <li key={j} className="text-sm text-ink-300 flex items-start gap-2">
                          <span className="text-ink-600 mt-1.5 text-xs">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
            {/* Default state */}
            <motion.div
              initial={false}
              animate={{ opacity: active === null ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 grid place-items-center pointer-events-none"
            >
              <p className="mono-label text-ink-600">Hover a stage to expand</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile vertical flow */}
      <div className="md:hidden space-y-6">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12"
          >
            {/* Vertical line */}
            {i < stages.length - 1 && (
              <div className="absolute left-[22px] top-12 bottom-[-24px] w-px bg-ink-800" />
            )}
            {/* Node */}
            <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-ink-900 border border-ink-700 grid place-items-center">
              <span className="font-mono text-xs font-bold text-ink-200">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="pt-1">
              <p className="mono-label text-ink-100">{stage.label}</p>
              <p className="text-sm text-ink-400 mt-1">{stage.detail}</p>
              {stage.items && (
                <ul className="mt-3 space-y-1.5">
                  {stage.items.map((item, j) => (
                    <li key={j} className="text-sm text-ink-300 flex items-start gap-2">
                      <span className="text-ink-600 mt-1.5 text-xs">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
