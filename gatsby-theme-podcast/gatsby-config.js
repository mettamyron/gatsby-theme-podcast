const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Title',
    description: 'Description',
    author: '@rodriguesmyron',
    keywords: 'keyword1, keyword2, keyword3, keyword4',
    image: 'icon.png',
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Episode',
        imagePath: 'coverImgUrl',
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      name: 'images',
      options: {
        path: path.resolve(`./static/images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: path.resolve(`./static/images/icon.png`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
  ],
};
