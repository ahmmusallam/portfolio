'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { IASection } from '@/lib/case-studies';

type Props = {
  root: string;
  sections: IASection[];
  note?: string;
};

export default function IADiagram({ root, sections, note }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <div ref={ref}>
      {/* Root pill */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-baseline gap-3 border border-ink-700 bg-ink-900/60 backdrop-blur px-5 py-3"
        >
          <span className="mono-label">Root</span>
          <span className="text-ink-50 font-medium tracking-tight">{root}</span>
        </motion.div>
      </div>

      {/* Vertical connector */}
      <div className="flex justify-center" aria-hidden>
        <div className="w-px h-10 bg-ink-700" />
      </div>

      {/* Horizontal connector spanning grid */}
      <div className="flex justify-center mb-10" aria-hidden>
        <div className="h-px w-full max-w-4xl bg-ink-800" />
      </div>

      {/* Sections grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="border border-ink-800 bg-ink-900/30 p-6 flex flex-col"
          >
            <header className="border-b border-ink-800 pb-3 mb-4">
              <span className="mono-label">/ {String(i + 1).padStart(2, '0')}</span>
              <h4 className="text-base md:text-lg font-medium text-ink-50 mt-2 tracking-tight">
                {section.label}
              </h4>
            </header>

            <ul className="space-y-3.5">
              {section.features.map((f, j) => (
                <li key={j}>
                  <p className="text-sm text-ink-100 leading-snug flex items-baseline gap-2 flex-wrap">
                    <span>{f.label}</span>
                    {f.highlight && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 border border-ink-700 px-1.5 py-0.5">
                        open
                      </span>
                    )}
                  </p>

                  {f.items && (
                    <ul className="mt-1.5 space-y-1 border-l border-ink-800 ml-1 pl-3">
                      {f.items.map((item, k) => (
                        <li key={k} className="text-xs text-ink-400 leading-relaxed">
                          — {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {f.subFeature && (
                    <div className="mt-2 border-l border-ink-800 ml-1 pl-3">
                      <p className="text-sm text-ink-200 leading-snug">↳ {f.subFeature.label}</p>
                      {f.subFeature.items && (
                        <ul className="mt-1.5 space-y-1">
                          {f.subFeature.items.map((item, k) => (
                            <li key={k} className="text-xs text-ink-500 leading-relaxed">
                              — {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {note && (
        <p className="mt-8 text-sm text-ink-500 italic text-pretty max-w-3xl">{note}</p>
      )}
    </div>
  );
}
