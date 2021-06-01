module.exports = {
  siteMetadata: {
    title: 'The loving+kindness podcast',
    description: 'The Maitri podcast',
    author: '@rodriguesmyron',
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
  ],
};
