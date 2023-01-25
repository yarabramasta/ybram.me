/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bucket.ybram.my.id']
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
      }
    ];
  }
};

module.exports = nextConfig;
