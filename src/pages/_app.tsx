import '@/styles/globals.css';
import '@code-hike/mdx/dist/index.css';

import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import { AppBar, Head } from '@/components';
import Script from 'next/script';

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
  return (
    <>
      <Head />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K8F7BQW');
      `}
      </Script>
      <AppBar />
      <main className={`${switzer.variable} h-full relative pt-[64px]`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
