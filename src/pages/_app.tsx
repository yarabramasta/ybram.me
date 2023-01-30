import '@code-hike/mdx/dist/index.css';
import 'mod/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { getAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
import type { AppProps } from 'next/app';

import Layout from 'mod/components/Layout';

const app =
  getApps().length <= 0
    ? initializeApp({ ...JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CRED) })
    : getApp();

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    getAnalytics(app);
    getPerformance(app);
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
