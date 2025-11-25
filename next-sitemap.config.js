module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bigdogfabs.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
