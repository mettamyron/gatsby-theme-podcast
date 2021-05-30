# Gatsby Theme Podcast

This theme is a port of the [gatsby-theme-simplecast](https://gatsby-theme-simplecast.netlify.app) for generic podcast feeds with a bit of sprucing-up and updating for Gatsby v3.

## Usage

1. Install the theme

   ```
   yarn add @rodriguesmyron/gatsby-theme-podcast --save
   ```

2. Add the theme to your `gatsby-config.js`:

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

3. Start your site

   ```
   yarn develop
   ```

4. Customize

   See [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) for details.

## Additional notes

This theme was created originally from @vojtaholik and then forked by @sofa-boys and then by @luiskunz

Source links:

- https://github.com/vojtaholik/gatsby-theme-simplecast
- https://github.com/sofa-boys/gatsby-theme-podcast
- https://github.com/luiskunz/gatsby-theme-podcast

## Known issues and possible improvements
- Since it is impossible to retrieve a unique `num` value (might work for Anchor podcasts), this theme creates pages with the `id` instead, which looks unwieldy. Could possibly use `contentDigest` instead.
- Had no luck with [gatsby-plugin-remote-images](https://github.com/graysonhicks/gatsby-plugin-remote-images), so a possible alternative is to create a new [file node](https://egghead.io/lessons/gatsby-optimize-remote-images-in-a-gatsby-source-plugin) while creating the node pages, which can then be optimized using gatsby-image.