// next-sitemap.js

module.exports = {
  siteUrl: "https://comments-navy.vercel.app/", // Replace with your site's URL
  generateRobotsTxt: true, // (Optional) Generates a `robots.txt` file
  sitemapSize: 7000, // Limit the number of URLs per sitemap file
  changefreq: "monthly", // How frequently the content is expected to change
  priority: 1.0, // Default priority for all URLs
  exclude: ["/admin/*"], // Exclude specific routes
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};
