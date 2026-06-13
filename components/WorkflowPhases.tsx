'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { WorkflowPhase } from '@/lib/case-studies';

// Local copy of renderRich so we don't need to thread it from the page renderer.
function renderRich(text: string): React.ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((boldPart, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="text-ink-50 font-semibold">
          {boldPart}
        </strong>
      );
    }
    return (
      <span key={i}>
        {boldPart.split(/\*(.+?)\*/g).map((part, j) =>
          j % 2 === 1 ? (
            <em key={j} className="italic">
              {part}
            </em>
          ) : (
            <span key={j}>{part}</span>
          ),
        )}
      </span>
    );
  });
}

type Props = {
  phases: WorkflowPhase[];
};

export default function WorkflowPhases({ phases }: Props) {
  // All collapsed by default. Each phase toggles independently.
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  if (phases.length === 0) return null;

  return (
    <div className="border-t border-ink-800">
      {phases.map((phase, phaseIdx) => {
        const isOpen = openSet.has(phaseIdx);
        const headerId = `workflow-header-${phaseIdx}`;
        const panelId = `workflow-panel-${phaseIdx}`;
        return (
          <div key={phaseIdx} className="border-b border-ink-800">
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(phaseIdx)}
                className="w-full flex items-start gap-5 md:gap-6 py-6 md:py-8 text-left group"
              >
                <span className="mono-label text-ink-500 mt-1.5 shrink-0 tabular-nums">
                  / {String(phaseIdx + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xl md:text-2xl text-ink-50 font-medium tracking-tight text-balance">
                    {phase.label}
                  </span>
                  {phase.description && (
                    <span className="mt-2 block text-sm md:text-base text-ink-400 leading-relaxed text-pretty">
                      {phase.description}
                    </span>
                  )}
                </span>
                <span
                  className={`mt-2 shrink-0 text-ink-500 group-hover:text-ink-200 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              aria-hidden={!isOpen}
              initial={false}
              animate={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ol className="space-y-4 pb-8 md:pb-10 md:pl-16">
                {phase.steps.map((step, stepIdx) => (
                  <li
                    key={stepIdx}
                    className="rounded-2xl border border-ink-800 bg-ink-900/30 p-5 md:p-6 flex items-start gap-4"
                  >
                    <span className="mono-label text-ink-600 mt-1 shrink-0 tabular-nums">
                      {String(phaseIdx + 1).padStart(2, '0')}
                      <span className="text-ink-700">.</span>
                      {String(stepIdx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base md:text-lg text-ink-200 leading-relaxed text-pretty">
                      {renderRich(step)}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
