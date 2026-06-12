'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { IASection } from '@/lib/case-studies';

type Props = {
  root: string;
  sections: IASection[];
  note?: string;
};

const MAX_FEATURES_PER_CARD = 4;

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
          className="inline-flex items-baseline gap-3 rounded-full border border-ink-600 bg-ink-900/70 backdrop-blur px-6 py-3 shadow-[0_0_0_4px_rgba(255,255,255,0.02)]"
        >
          <span className="mono-label text-ink-500">Root</span>
          <span className="text-ink-50 font-medium tracking-tight">{root}</span>
        </motion.div>
      </div>

      {/* Trunk: vertical drop from root */}
      <div className="flex justify-center" aria-hidden>
        <div className="w-px h-16 bg-ink-600" />
      </div>

      {/* Sections grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4 md:gap-x-5">
        {sections.map((section, i) => {
          const visible = section.features.slice(0, MAX_FEATURES_PER_CARD);
          const overflow = section.features.length - visible.length;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Stub: vertical line connecting this card up to the bus / row gap */}
              <div
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 -top-6 w-px h-6 bg-ink-600"
              />
              {/* Node dot at the top of the stub */}
              <div
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 -top-6 w-1.5 h-1.5 rounded-full bg-ink-500 -translate-y-1/2"
              />

              <div className="rounded-3xl border border-ink-800 bg-ink-900/30 p-6 md:p-7 h-full flex flex-col">
                <span className="mono-label text-ink-500">
                  / {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="text-lg md:text-xl text-ink-50 font-medium tracking-tight mt-2 mb-5">
                  {section.label}
                </h4>
                <ul className="space-y-2">
                  {visible.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full bg-ink-500 shrink-0"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-ink-300 leading-relaxed text-pretty">
                        {f.label}
                      </p>
                    </li>
                  ))}
                  {overflow > 0 && (
                    <li className="pt-1">
                      <span className="mono-label text-ink-600">
                        + {overflow} more
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {note && (
        <p className="mt-12 text-sm text-ink-500 italic text-pretty max-w-3xl">{note}</p>
      )}
    </div>
  );
}
