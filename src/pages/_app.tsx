import '@code-hike/mdx/dist/index.css';
import 'mod/styles/globals.css';

import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import type { AppProps } from 'next/app';

import { AppBar, Head } from 'mod/components';
import app from 'mod/lib/firebase_client';

const switzer = localFont({
  src: [
    { path: '../assets/switzer.woff2', style: 'normal' },
    { path: '../assets/switzer-italic.woff2', style: 'italic' }
  ],
  display: 'swap',
  preload: true,
  variable: '--font-switzer',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    "'Segoe UI'",
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    "'Open Sans'",
    "'Helvetica Neue'",
    'sans-serif'
  ]
});

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // if (typeof window !== 'undefined') {
    getAnalytics(app);
    getPerformance(app);
  }

  return (
    <>
      <Head />
      <AppBar />
      <main className={`${switzer.variable} h-full relative pt-[64px]`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
