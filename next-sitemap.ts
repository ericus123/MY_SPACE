const siteUrl = "https://amanieric.com";

// eslint-disable-next-line no-undef
const sitemap = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  exclude: ["404"],
};

export default sitemap;