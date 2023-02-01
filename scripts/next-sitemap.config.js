const SITE_URL = process.env.SITE_URL || 'https://ybram.me';
const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$'
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES
      }
    ]
  },
  priority: 0.9,
  exclude: ['/api', '/auth*']
};
