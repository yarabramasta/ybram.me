'use client';

import { Analytics } from '@vercel/analytics/react';

export default function AnalyticsWrapper() {
  return (
    <Analytics
      mode={'production'}
      beforeSend={(event: any) => (event.url.includes('/api') ? null : event)}
    />
  );
}
