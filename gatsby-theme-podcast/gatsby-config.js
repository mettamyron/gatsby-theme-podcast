const path = require('path');
const withDefaults = require(`./theme-options`)

module.exports = themeOptions => {
  const { manifest } = withDefaults(themeOptions)

  return {
    siteMetadata: {
      title: 'Title',
      description: 'Description',
      author: '@rodriguesmyron',
      keywords: 'keyword1, keyword2, keyword3, keyword4',
      image: 'src/images/icon.png',
    },
    plugins: [
      `gatsby-plugin-advanced-sitemap`,
      'gatsby-plugin-robots-txt',
      {
        resolve: 'gatsby-plugin-react-helmet',
      },
      {
        resolve: 'gatsby-plugin-theme-ui',
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Rubik\:300,300i,400,400i,700,700i,900,900i`,
            `open sans pro\:300,400,400i,700`,
          ],
          display: 'swap',
        },
      },
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        name: 'images',
        options: {
          path: path.resolve(`./src/images`),
        },
      },
      {
        resolve: `gatsby-plugin-react-helmet-canonical-urls`,
        options: {
          siteUrl: `https://maitri.fm`,
          stripQueryString: true,
        },
      },
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: path.resolve(`./src/images`),
          },
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          ...manifest,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-offline`,
    ],
  }
}
