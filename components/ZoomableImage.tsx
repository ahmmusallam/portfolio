'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

type Props = {
  src: string;
  label?: string;
  caption?: string;
  alt?: string;
  width: number;
  height: number;
  /** When set, the preview uses this aspect ratio + fill + object-cover. Otherwise renders at natural aspect. */
  previewAspect?: string;
  /** Object-position class used when previewAspect is set (e.g., "object-top"). Defaults to object-center. */
  objectPosition?: string;
  /** Extra classes on the preview <button> container (e.g., "rounded-3xl border border-ink-800"). */
  containerClassName?: string;
};

export default function ZoomableImage({
  src,
  label,
  caption,
  alt,
  width,
  height,
  previewAspect,
  objectPosition = 'object-center',
  containerClassName = '',
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const altText = alt || caption || label || 'Image';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${altText}`}
        className={`group/zoom relative block w-full overflow-hidden cursor-zoom-in bg-ink-900/30 ${previewAspect ?? ''} ${containerClassName}`}
      >
        {previewAspect ? (
          <Image
            src={src}
            alt={altText}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover ${objectPosition} transition-transform duration-500 group-hover/zoom:scale-[1.02]`}
          />
        ) : (
          <Image
            src={src}
            alt={altText}
            width={width}
            height={height}
            sizes="(min-width: 768px) 80vw, 100vw"
            className="w-full h-auto transition-transform duration-500 group-hover/zoom:scale-[1.02]"
          />
        )}
        <span className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink-900/80 backdrop-blur border border-ink-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-200 opacity-0 group-hover/zoom:opacity-100 transition-opacity">
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

      {open && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={altText}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm cursor-zoom-out flex items-center justify-center p-4 md:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-ink-900/90 border border-ink-700 text-ink-100 hover:bg-ink-800 transition cursor-pointer"
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
            className="cursor-default flex flex-col items-center gap-4 w-full max-w-5xl h-full"
          >
            <div className="relative flex-1 min-h-0 w-full rounded-2xl overflow-hidden ring-1 ring-ink-800 bg-ink-900">
              <Image
                src={src}
                alt={altText}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            {caption && (
              <p className="text-center text-sm text-ink-300 shrink-0">{caption}</p>
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
