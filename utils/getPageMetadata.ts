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
    type?: string;
  }>;
  meta: Array<{
    name: string;
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
      { rel: 'canonical', href: 'https://www.ybram.me' }
    ],
    meta: [
      { name: 'robots', content: 'index, follow' },
      { name: 'og:title', content: _meta['og']['title'] },
      { name: 'twitter:title', content: _meta['og']['title'] },
      { name: 'description', content: _meta['description'] },
      { name: 'og:description', content: _meta['og']['description'] },
      { name: 'twitter:description', content: _meta['og']['description'] },
      { name: 'og:type', content: _meta['og']['type'] },
      { name: 'og:url', content: _meta['og']['url'] },
      { name: 'og:image', content: _meta['og']['image'] },
      { name: 'twitter:image', content: _meta['og']['image'] },
      { name: 'twitter:handle', content: '@yarabram' },
      { name: 'twitter:site', content: '@yarabram' }
    ]
  };
}
