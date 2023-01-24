/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bucket.ybram.my.id']
  }
};

module.exports = nextConfig;
