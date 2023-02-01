import '@code-hike/mdx/dist/index.css';
import 'mod/styles/globals.css';

import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { getAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import type { FC } from 'react';

import Layout from 'mod/components/Layout';
import defaultSeoConfig from 'mod/lib/next-seo.config';

const Head: FC = () => (
  <>
    <DefaultSeo {...defaultSeoConfig} />
  </>
);

const switzer = localFont({
  src: [
    { path: '../assets/switzer.woff2', style: 'normal' },
    { path: '../assets/switzer-italic.woff2', style: 'italic' }
  ],
  display: 'swap',
  preload: true,
  variable: '--font-switzer'
});

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
      <Head />
      <Layout fontFamily={switzer}>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
