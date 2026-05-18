export const metadata = {
  title: 'Contact — Ahmed Hamdy Musallam',
  description: 'Get in touch with Ahmed Hamdy Musallam — Product Designer based in Cairo, Egypt.',
};

const channels = [
  {
    label: 'Email',
    value: 'ahmed.hamdy.musallam@gmail.com',
    href: 'mailto:ahmed.hamdy.musallam@gmail.com',
    note: 'Fastest way · Reply within 24h on weekdays',
  },
  {
    label: 'LinkedIn',
    value: 'in/ahmmusallam',
    href: 'https://www.linkedin.com/in/ahmmusallam/',
    note: 'Best for recruiters and intro requests',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-x">
          <p className="mono-label mb-6">Contact</p>
          <h1 className="text-display font-medium text-ink-50 tracking-tight text-balance max-w-4xl">
            Let&apos;s make something <span className="text-ink-400">useful</span> together.
          </h1>
          <p className="mt-8 text-xl text-ink-300 max-w-2xl text-pretty leading-snug">
            I&apos;m open to senior product design roles, contract work, and collaborations on AI-powered tools, dev products, and fintech platforms.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-px bg-ink-800 border border-ink-800">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block bg-ink-950 p-10 md:p-14 hover:bg-ink-900 transition-colors duration-500"
              >
                <p className="mono-label mb-6">{c.label}</p>
                <p className="text-2xl md:text-3xl font-medium text-ink-50 tracking-tight break-all link-underline inline-block">
                  {c.value}
                </p>
                <p className="mt-6 mono-label text-ink-500">{c.note}</p>
                <div className="mt-10 flex items-center gap-2 mono-label text-ink-100">
                  <span>Open</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 max-w-3xl">
            <p className="mono-label mb-4">Based in</p>
            <p className="text-2xl md:text-3xl text-ink-200 font-light tracking-tight">
              Cairo, Egypt · GMT+2
            </p>
            <p className="mt-3 text-ink-400">Open to remote, hybrid, or relocation for the right team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
