/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://dimamachina.com',
  changefreq: 'weekly',
  priority: '0.5',
  generateIndexSitemap: false,
  exclude: ['/blog/draft']
}
