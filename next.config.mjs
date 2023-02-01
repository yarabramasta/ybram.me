import { remarkCodeHike } from '@code-hike/mdx';
import nextMdx from '@next/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import theme from './poimandres.js';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme, lineNumbers: true }]],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  }
});

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bucket.ybram.my.id', 'media.graphassets.com']
  },
  async redirects() {
    return [
      {
        source: '/socials/twitter',
        destination: 'https://twitter.com/yarabram',
        permanent: true
      },
      {
        source: '/socials/github',
        destination: 'https://github.com/yarabramasta',
        permanent: true
      },
      {
        source: '/socials/linkedin',
        destination: 'https://www.linkedin.com/in/yara-bramasta-a1b711263',
        permanent: true
      }
    ];
  }
});

export default nextConfig;
