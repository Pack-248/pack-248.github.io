/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Cub Scout Pack 248`,
    siteUrl: `https://www.pack248.org`,
    description: `Put a very description description here`
    },
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-image`, `gatsby-plugin-sitemap`, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      "icon": `src/images/logo/Pack 248 Logo.webp`
    }
  }, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`
    },
    __key: `images`
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`
    },
    __key: `pages`
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `docs`,
      path: `${__dirname}/src/docs/`
    },
    __key: "docs"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `dens`,
      path: `${__dirname}/src/dens/`
    },
    __key: "dens"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `packs`,
      path: `${__dirname}/src/packs/`
    },
    __key: "packs"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `news`,
      path: `${__dirname}/src/news/`
    },
    __key: "news"
  }, {
    resolve: `gatsby-transformer-remark`,
    options: {
      jsFrontmatterEngine: true,
    },
  }
]
};
/**
 * "gatsby-plugin-google-gtag", 
 */