/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.ybram.me',
  generateRobotsTxt: true,
  priority: 0.9,
  exclude: ['/api']
};
