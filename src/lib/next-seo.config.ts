import { DefaultSeoProps } from 'next-seo';

const defaultSeoConfig: DefaultSeoProps = {
  canonical: 'https://www.ybram.me/',
  defaultTitle: 'Yara Bramasta',
  titleTemplate: '%s • Yara Bramasta',
  description:
    'A passionate software developer from Indonesia, focusing on mobile app development.',
  themeColor: '#0a0a0c',
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://www.ybram.me/',
    siteName: 'Yara Bramasta',
    defaultImageWidth: 1920,
    defaultImageHeight: 1080,
    description:
      'A passionate software developer from Indonesia, focusing on mobile app development.',
    title: 'Yara Bramasta',
    images: [
      {
        url: '/images/og.jpg',
        alt: 'A passionate software developer from Indonesia, focusing on mobile app development.'
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
    },
    {
      property: 'twitter:title',
      content: 'Yara Bramasta'
    },
    {
      property: 'twitter:description',
      content:
        'A passionate software developer from Indonesia, focusing on mobile app development.'
    },
    {
      property: 'twitter:image',
      content: `${
        process.env.NODE_ENV === 'production' ? 'https://ybram.me' : ''
      }/images/og.jpg`
    }
  ]
};

export default defaultSeoConfig;
