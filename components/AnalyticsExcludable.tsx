'use client';

import { Analytics } from '@vercel/analytics/next';

// Set `localStorage.setItem('va-disable', '1')` in DevTools on any browser
// where you want to exclude yourself from analytics. Reload to take effect.
const DISABLE_KEY = 'va-disable';

export default function AnalyticsExcludable() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (typeof window === 'undefined') return event;
        if (window.localStorage.getItem(DISABLE_KEY)) return null;
        return event;
      }}
    />
  );
}
