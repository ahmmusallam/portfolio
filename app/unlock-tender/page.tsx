import type { Metadata } from 'next';
import UnlockForm from './UnlockForm';

export const metadata: Metadata = {
  title: 'Unlock Tender Assist — Ahmed Hamdy Musallam',
  robots: { index: false, follow: false },
};

export default function Page({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const raw = searchParams.next ?? '/case-study/tender-assist';
  const next =
    raw.startsWith('/') && !raw.startsWith('//')
      ? raw
      : '/case-study/tender-assist';

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md text-center">
        <p className="mono-label mb-4">NDA · Protected case study</p>
        <h1 className="text-4xl md:text-5xl font-medium text-ink-50 tracking-tight text-balance mb-3">
          Unlock Tender Assist
        </h1>
        <p className="text-ink-300 mb-10 text-pretty">
          This case study is under NDA. Enter the PIN you were given to view it.
        </p>
        <UnlockForm next={next} />
      </div>
    </main>
  );
}
