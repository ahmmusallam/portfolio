'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UnlockForm({ next }: { next: string }) {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/unlock-tender', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin }),
      });
      if (res.ok) {
        router.replace(next);
        router.refresh();
        return;
      }
      setError(
        res.status === 401
          ? 'Incorrect PIN. Please try again.'
          : 'Something went wrong. Please try again.',
      );
      setPin('');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-5">
      <input
        autoFocus
        type="password"
        inputMode="numeric"
        autoComplete="one-time-code"
        value={pin}
        onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
        placeholder="••••"
        aria-label="PIN"
        className="w-56 text-center font-mono tracking-[0.4em] text-2xl bg-ink-900/30 border border-ink-700 rounded-2xl py-4 text-ink-50 placeholder:text-ink-600 focus:outline-none focus:border-ink-400 transition"
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={loading || pin.length < 4}
        className="rounded-full bg-ink-50 text-ink-900 px-6 py-3 font-medium text-sm transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-ink-200"
      >
        {loading ? 'Checking…' : 'Unlock'}
      </button>
    </form>
  );
}
