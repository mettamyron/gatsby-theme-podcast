# Gatsby Theme Podcast

## Usage

1. Install the theme

   ```
   npm install --save @rodriguesmyron/gatsby-theme-podcast
   ```

1. Add the theme to your `gatsby-config.js`:

   ```
   module.exports = {
     plugins: [
       {
         resolve: '@rodriguesmyron/gatsby-theme-podcast',
         options: {
           rssUrl: 'PODCAST_RSS_URL',
           disqusShortName: 'DISQUS_SHORTNAME',
           spotifyUrl: 'SPOTIFY_PODCAST_URL',
           googlePodcastsUrl: 'GOOGLE_PODCAST_URL',
           applePodcastsUrl: 'APPLE_PODCAST_URL',
         },
       },
     ],
   }
   ```

1. Start your site

   ```
   gatsby develop
   ```

1. Customize

   See [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) for details.

This theme was created originally from @vojtaholik and then forked by @sofa-boys and then by @luiskunz

https://github.com/vojtaholik/gatsby-theme-simplecast
https://github.com/sofa-boys/gatsby-theme-podcast
https://github.com/luiskunz/gatsby-theme-podcast