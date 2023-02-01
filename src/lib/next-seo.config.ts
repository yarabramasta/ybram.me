import { DefaultSeoProps } from 'next-seo';

const SITE_URL = process.env.SITE_URL ?? 'https://ybram.me';
const OG_IMAGE_URL = `${SITE_URL}/images/og.jpg`;
const OG_TITLE = 'Yara Bramasta';
const OG_DESCRIPTION =
  'A passionate software developer from Indonesia, focusing on mobile app development.';

const defaultSeoConfig: DefaultSeoProps = {
  canonical: SITE_URL,
  defaultTitle: OG_TITLE,
  titleTemplate: '%s • Yara Bramasta',
  description: OG_DESCRIPTION,
  themeColor: '#0a0a0c',
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    url: SITE_URL,
    siteName: OG_TITLE,
    defaultImageWidth: 1920,
    defaultImageHeight: 1080,
    description: OG_DESCRIPTION,
    title: OG_TITLE,
    images: [{ url: OG_IMAGE_URL, alt: OG_DESCRIPTION }]
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
    { rel: 'manifest', href: '/site.webmanifest' }
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
    { property: 'twitter:title', content: OG_TITLE },
    { property: 'twitter:description', content: OG_DESCRIPTION },
    { property: 'twitter:image', content: OG_IMAGE_URL }
  ]
};

export default defaultSeoConfig;
