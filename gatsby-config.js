/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Cub Scout Pack 248`,
    siteUrl: `https://www.pack248.org`
  },
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-image`, `gatsby-plugin-sitemap`, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      "icon": `src/images/icon.png`
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
  },
]
};
/**
 * "gatsby-plugin-google-gtag", 
 */