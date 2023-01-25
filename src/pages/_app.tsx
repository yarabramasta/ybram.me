import '@/styles/globals.css';

import localFont from '@next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

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
      <DefaultSeo
        titleTemplate="%s - Yara Bramasta"
        defaultTitle="Yara Bramasta"
        description="A college student & mobile app developer from Indonesia."
        themeColor="#0A0A0C"
        openGraph={{
          type: 'website',
          locale: 'en',
          url: 'https://www.ybram.me/',
          siteName: 'Yara Bramasta'
        }}
        twitter={{
          handle: '@yarabram',
          site: '@yarabram',
          cardType: 'summary_large_image'
        }}
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/icon/apple-touch-icon.png'
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/icon/favicon-32x32.png'
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/icon/favicon-16x16.png'
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest'
          }
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1, viewport-fit=cover, user-scalable=no'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent'
          }
        ]}
      />
      <main className={`${switzer.variable}`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
