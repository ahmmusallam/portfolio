'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);

    const updateTime = () => {
      const now = new Date();
      const cairo = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));
      const hh = String(cairo.getHours()).padStart(2, '0');
      const mm = String(cairo.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm} CAI`);
    };
    updateTime();
    const i = setInterval(updateTime, 30_000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(i);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-800' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Home">
          <div className="relative w-8 h-8 grid place-items-center">
            <div className="absolute inset-0 border border-ink-700 group-hover:border-ink-300 transition-colors duration-500" />
            <span className="font-mono text-sm font-bold text-ink-100">A</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 hidden sm:inline">
            Musallam
          </span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          <Link href="/#work" className="mono-label hover:text-ink-100 transition-colors">
            Work
          </Link>
          <Link href="/about" className="mono-label hover:text-ink-100 transition-colors">
            About
          </Link>
          <Link href="/contact" className="mono-label hover:text-ink-100 transition-colors">
            Contact
          </Link>
          <span className="mono-label text-ink-600 hidden md:inline tabular-nums">{time}</span>
        </nav>
      </div>
    </header>
  );
}
