import getStaticAssetsUrl from './getStaticAssetsUrl';

export interface MetadataConfig {
  title: string;
  description: string;
  og: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
}

export interface Metadata {
  title: string;
  links: Array<{
    rel: string;
    href: string;
    sizes?: string;
    type?: string;
  }>;
  meta: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

export default function getPageMetadata(metadata?: MetadataConfig): Metadata {
  const title = 'Yara Bramasta';
  const description = 'A college student and mobile app developer.';

  const _meta = {
    title: metadata?.title ?? title,
    description: metadata?.description ?? description,
    og: {
      title: metadata?.og.title ?? title,
      description: metadata?.og.description ?? description,
      type: metadata?.og.type ?? 'website',
      image: metadata?.og.image ?? getStaticAssetsUrl('/images/og.jpg'),
      url:
        metadata?.og.url ??
        process.env.SITE_URL ??
        (process.env.NODE_ENV === 'production' ? 'https://ybram.me' : undefined)
    }
  };

  return {
    title: _meta['title'],
    links: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'apple-touch-icon', href: '/icon/apple-touch-icon.png' },
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
      { rel: 'canonical', href: 'https://www.ybram.me' }
    ],
    meta: [
      {
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      },
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
      { name: 'theme-color', content: '#0a0a0c' },
      { property: 'og:title', content: _meta['og']['title'] },
      { name: 'twitter:title', content: _meta['og']['title'] },
      { name: 'description', content: _meta['description'] },
      { property: 'og:description', content: _meta['og']['description'] },
      { property: 'og:site_name', content: 'Yara Bramasta' },
      { property: 'og:locale', content: 'en' },
      { name: 'twitter:description', content: _meta['og']['description'] },
      { property: 'og:type', content: _meta['og']['type'] },
      { property: 'og:url', content: _meta['og']['url'] },
      { property: 'og:image', content: _meta['og']['image'] },
      { name: 'twitter:image', content: _meta['og']['image'] },
      { property: 'twitter:url', content: _meta['og']['url'] },
      { property: 'twitter:domain', content: 'ybram.me' },
      { name: 'twitter:handle', content: '@yarabram' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@yarabram' }
    ]
  };
}
