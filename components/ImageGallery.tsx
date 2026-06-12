'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type Props = {
  images: GalleryImage[];
  interval?: number;
  aspect?: string;
};

// Auto-cycling crossfade gallery: the images are stacked in one frame and
// fade in/out on a loop so all states are visible without scrolling.
export default function ImageGallery({
  images,
  interval = 2800,
  aspect = 'aspect-[16/10]',
}: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative ${aspect} rounded-3xl border border-ink-800 overflow-hidden bg-ink-900/30`}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 768px) 80vw, 100vw"
          priority={i === 0}
          className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show frame ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-ink-100' : 'w-1.5 bg-ink-500/70 hover:bg-ink-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
