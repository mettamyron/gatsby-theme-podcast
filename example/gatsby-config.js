module.exports = {
  siteMetadata: {
    title: 'Maitri',
    description: 'The Maitri podcast',
    author: '@rodriguesmyron',
    keywords: 'keyword1, keyword2, keyword3, keyword4',
    image: '/images/icon.png',
    siteUrl: 'https://maitri.fm',
  },
  plugins: [
    {
      resolve: '@rodriguesmyron/gatsby-theme-podcast',
      options: {
        rssUrl: 'https://api.substack.com/feed/podcast/12150.rss',
        disqusShortName: '',
        spotifyUrl: 'https://open.spotify.com/show/3eVt1HT08IzIm60b9QwqTg',
        googlePodcastsUrl: '',
        applePodcastsUrl: 'https://podcasts.apple.com/us/podcast/closing-the-circle/id1569773276',
        twitterID: 'https://twitter.com/itsjustmyron',
        instagramID: 'https://instagram.com/itsjustmyron',
        facebookID: 'https://facebook.com/itsjustmyron',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rozha One\:400`,
          `Montserrat\:100,100i,200,200i,300,300i,400,400i,700,700i,800,800i,900,900i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
};
