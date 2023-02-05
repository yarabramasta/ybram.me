const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bucket.ybram.my.id', 'media.graphassets.com']
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ];
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

export default nextConfig;
