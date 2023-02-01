const { remarkCodeHike } = require('@code-hike/mdx');
const theme = require('shiki/themes/poimandres.json');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme,
          lineNumbers: true
        }
      ]
    ]
  }
});

/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;
