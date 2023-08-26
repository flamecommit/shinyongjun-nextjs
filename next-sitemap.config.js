/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shinyongjun.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: [],
  outDir: 'out',
  transform: async (config, path) => {
    if (path.startsWith('/score')) {
      // 악보 페이지는 sitemap에서 제외
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/score/'],
      },
    ],
  },
};
