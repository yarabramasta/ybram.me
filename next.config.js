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
      },
      {
        source: '/socials/linkedin',
        destination: 'https://www.linkedin.com/in/yara-bramasta-a1b711263',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
