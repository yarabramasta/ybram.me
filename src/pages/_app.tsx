import '@/styles/globals.css';
import '@code-hike/mdx/dist/index.css';

import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import useMeasure from 'react-use-measure';

import { AppBar, Head } from '@/components';

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
  const [ref, { height }] = useMeasure();

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
