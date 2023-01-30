import '@code-hike/mdx/dist/index.css';
import 'mod/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { getAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
import { DefaultSeo, type DefaultSeoProps } from 'next-seo';
import type { AppProps } from 'next/app';

import Layout from 'mod/components/Layout';
import { FC } from 'react';

const app =
  getApps().length <= 0
    ? initializeApp({ ...JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CRED) })
    : getApp();

const defaultSeoConfig: DefaultSeoProps = {
  canonical: 'https://www.ybram.me/',
  defaultTitle: 'Yara Bramasta',
  titleTemplate: '%s • Yara Bramasta',
  description: 'A college student & mobile app developer from Indonesia.',
  themeColor: '#0a0a0c',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://www.ybram.me/',
    siteName: 'Yara Bramasta',
    images: [
      {
        url: 'https://bucket.ybram.my.id/assets/ybram.svg',
        type: 'image/svg+xml',
        alt: 'A college student & mobile app developer from Indonesia.'
      }
    ]
  },
  twitter: {
    handle: '@yarabram',
    site: '@yarabram',
    cardType: 'summary_large_image'
  },
  additionalLinkTags: [
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
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1, viewport-fit=cover, user-scalable=no'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    },
    {
      name: 'google-site-verification',
      content: 'g5Jypw7qhL9rKyiZ4-7hqifydSaFcO3REmVeyd2qij0'
    }
  ]
};

const Head: FC = () => (
  <>
    <DefaultSeo {...defaultSeoConfig} />
  </>
);

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    getAnalytics(app);
    getPerformance(app);
  }

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
