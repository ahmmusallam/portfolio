'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import type { CompetitorCard, CompetitorFeature } from '@/lib/case-studies';

type Style = { wrap: string; icon: ReactNode };

const statusStyle = (status?: CompetitorFeature['status']): Style => {
  switch (status) {
    case 'positive':
      return {
        wrap: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
        icon: (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <polyline points="4.5 10.5 8.5 14 15.5 6.5" />
          </svg>
        ),
      };
    case 'negative':
      return {
        wrap: 'bg-red-500/15 text-red-300 ring-1 ring-red-500/30',
        icon: (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <line x1="5.5" y1="5.5" x2="14.5" y2="14.5" />
            <line x1="14.5" y1="5.5" x2="5.5" y2="14.5" />
          </svg>
        ),
      };
    case 'partial':
      return {
        wrap: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
        icon: (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <line x1="5" y1="10" x2="15" y2="10" />
          </svg>
        ),
      };
    default:
      return {
        wrap: 'bg-ink-800 text-ink-500 ring-1 ring-ink-700',
        icon: <span className="h-1 w-1 rounded-full bg-current" aria-hidden="true" />,
      };
  }
};

export default function CompetitorGrid({ competitors }: { competitors: CompetitorCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const open = openIndex !== null ? competitors[openIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <div ref={ref} className="grid md:grid-cols-3 gap-6">
        {competitors.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-ink-800 bg-ink-900/30 flex flex-col overflow-hidden"
          >
            {c.image.src ? (
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${c.name} screenshot`}
                className="group/img relative block w-full aspect-[16/9] overflow-hidden bg-ink-900/40 cursor-zoom-in"
              >
                <Image
                  src={c.image.src}
                  alt={c.image.caption || c.image.label}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                />
                <span className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink-900/80 backdrop-blur border border-ink-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-200 opacity-0 group-hover/img:opacity-100 transition-opacity">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-3 w-3"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16" y2="16" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Expand
                </span>
              </button>
            ) : (
              <ImagePlaceholder
                label={c.image.label}
                caption={c.image.caption}
                aspect="aspect-[16/9]"
                rounded={false}
              />
            )}
            <div className="p-6 md:p-7 border-t border-ink-800 flex-1 flex flex-col">
              <h4 className="text-xl md:text-2xl text-ink-50 font-medium tracking-tight">
                {c.name}
              </h4>
              {c.image.caption && (
                <p className="mt-1.5 text-sm text-ink-400 leading-relaxed text-pretty">
                  {c.image.caption}
                </p>
              )}
              <ul className="mt-6 space-y-4">
                {c.features.map((f, j) => {
                  const s = statusStyle(f.status);
                  return (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid place-items-center h-6 w-6 shrink-0 rounded-full ${s.wrap}`}
                      >
                        {s.icon}
                      </span>
                      <div className="leading-relaxed">
                        <p className="mono-label text-ink-400">{f.label}</p>
                        <p className="text-ink-100 text-sm md:text-base mt-1">{f.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {open && open.image.src && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.name} screenshot`}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center h-10 w-10 rounded-full bg-ink-900/90 border border-ink-700 text-ink-100 hover:bg-ink-800 transition cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl cursor-default"
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-ink-800 bg-ink-900">
              <Image
                src={open.image.src}
                alt={open.image.caption || open.image.label}
                width={open.image.width ?? 2400}
                height={open.image.height ?? 1350}
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-ink-300">
              <span className="text-ink-100 font-medium">{open.name}</span>
              {open.image.caption && <span className="text-ink-400"> — {open.image.caption}</span>}
            </p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
