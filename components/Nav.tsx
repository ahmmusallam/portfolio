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
        <Link
          href="/"
          aria-label="Home"
          className="group inline-flex items-center text-ink-100 hover:text-ink-50 transition-colors duration-500"
        >
          <svg
            width="32"
            height="22"
            viewBox="0 0 24 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="block"
          >
            <path d="M24 3.57715L14.373 5.10156L23.2559 13.9844L20.6953 16.5449L13.4727 9.32227L7.14453 15.6523L4.58301 13.0918L12.2344 5.43945L0.566407 7.28809L7.23202e-07 3.71192L23.4336 1.04907e-06L24 3.57715Z" />
          </svg>
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          <Link href="/#work" className="font-sans text-sm text-ink-400 hover:text-ink-50 transition-colors">
            Work
          </Link>
          <Link href="/about" className="font-sans text-sm text-ink-400 hover:text-ink-50 transition-colors">
            About
          </Link>
          <Link href="/contact" className="font-sans text-sm text-ink-400 hover:text-ink-50 transition-colors">
            Contact
          </Link>
          <span className="font-sans text-sm text-ink-600 hidden lg:inline tabular-nums">{time}</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-sans text-sm text-ink-100 rounded-full border border-ink-700 px-4 py-1.5 hover:border-ink-400 hover:text-ink-50 transition-colors"
          >
            <span className="hidden sm:inline">Download Resume</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
