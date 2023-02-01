import { DefaultSeoProps } from 'next-seo';
import { getOGImageUrl } from './utils';

const SITE_URL = process.env.SITE_URL ?? 'https://ybram.me';
const OG_IMAGE_URL = 'https://media.graphassets.com/CFNnQCOlTyiutEjZ0yLT';
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
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE_URL }]
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
    { property: 'twitter:image', content: OG_IMAGE_URL }
  ]
};

export const articleSeoConfig = (data: any, prefix = true) => {
  return {
    title: data['title'],
    description: data['description'],
    openGraph: {
      description: data['excerpt'],
      article: {
        authors: [data['author']['name']],
        publishedTime: data['publishedAt'],
        modifiedTime: data['updatedAt']
      },
      url: `${SITE_URL}/${prefix ? '/blog' : ''}${data['slug']}`,
      images: [{ url: getOGImageUrl(data) }]
    },
    additionalMetaTags: [
      { property: 'twitter:description', content: data['excerpt'] },
      { property: 'twitter:image', content: getOGImageUrl(data) }
    ]
  };
};

export default defaultSeoConfig;
