import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink-800">
      <div className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-6">
            <p className="mono-label mb-4">Get in touch</p>
            <a
              href="mailto:ahmed.hamdy.musallam@gmail.com"
              className="text-2xl md:text-4xl font-medium text-ink-50 link-underline tracking-tight"
            >
              ahmed.hamdy.musallam@gmail.com
            </a>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="https://www.linkedin.com/in/ahmmusallam/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ink-400 hover:text-ink-50 transition-colors"
              >
                LinkedIn ↗
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ink-400 hover:text-ink-50 transition-colors"
              >
                Resume ↗
              </a>
            </div>
          </div>

          <div className="md:col-span-6 md:text-right">
            <p className="mono-label mb-4">Sitemap</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-ink-200 hover:text-ink-50 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink-200 hover:text-ink-50 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-200 hover:text-ink-50 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-800 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p className="mono-label">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
