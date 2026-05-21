export const metadata = {
  title: 'Contact — Ahmed Hamdy Musallam',
  description: 'Get in touch with Ahmed Hamdy Musallam — Product Designer based in Cairo, Egypt.',
};

const channels = [
  {
    label: 'LinkedIn',
    value: 'in/ahmmusallam',
    href: 'https://www.linkedin.com/in/ahmmusallam/',
    note: 'Best for recruiters and intro requests',
    cta: 'Open',
    icon: '↗',
  },
  {
    label: 'Resume',
    value: 'Download CV (PDF)',
    href: '/resume.pdf',
    note: 'Full experience, education, and skills',
    cta: 'Download',
    icon: '↓',
    download: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-x">
          <p className="mono-label mb-6">Contact</p>
          <h1 className="text-display font-medium text-ink-50 tracking-tight text-balance max-w-4xl">
            Let&apos;s share
 <span className="text-ink-400"> ideas</span> & discuss ways to collaborate
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[1.75rem] bg-ink-900/40 border border-ink-800 p-10 md:p-14 transition-all duration-300 ease-out hover:bg-ink-800/40 hover:border-ink-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
              >
                <p className="mono-label mb-6">{c.label}</p>
                <p className="text-2xl md:text-3xl font-medium text-ink-50 tracking-tight break-all">
                  {c.value}
                </p>
                <p className="mt-6 mono-label text-ink-500">{c.note}</p>
                <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 font-sans text-sm text-ink-200 transition-colors duration-300 group-hover:border-ink-100 group-hover:bg-ink-100 group-hover:text-ink-950">
                  <span>{c.cta}</span>
                  <span
                    className={`transition-transform duration-300 ${
                      c.download ? 'group-hover:translate-y-0.5' : 'group-hover:translate-x-1'
                    }`}
                  >
                    {c.icon}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
