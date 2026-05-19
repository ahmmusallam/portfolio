'use client';

import { motion } from 'framer-motion';

export default function HeroAnimation() {
  return (
    <div className="relative aspect-square w-full max-w-md ml-auto">
      {/* Concentric rings */}
      <div className="absolute inset-0">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-ink-800"
            style={{
              margin: `${i * 12}%`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Crosshair */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-3 h-3 rounded-full bg-ink-100"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-ink-100/40 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-px bg-gradient-to-b from-transparent via-ink-100/40 to-transparent" />
        </div>
      </div>

      {/* Orbital dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * 360;
        return (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: i * -2 }}
          >
            <div
              className="absolute w-1.5 h-1.5 rounded-full bg-ink-100"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateY(-${30 + (i % 3) * 8}%) translateX(-50%)`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Corner labels */}
      <span className="absolute top-0 left-0 mono-label text-ink-600">N · 30.04</span>
      <span className="absolute top-0 right-0 mono-label text-ink-600">E · 31.23</span>
      <span className="absolute bottom-0 left-0 mono-label text-ink-600">CAI / EG</span>
      <span className="absolute bottom-0 right-0 mono-label text-ink-600">2026</span>
    </div>
  );
}
