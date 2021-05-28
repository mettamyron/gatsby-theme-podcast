# Gatsby Theme Podcast

## Usage

1. Install the theme

   ```
   npm install --save @luiskunz/gatsby-theme-podcast
   ```

1. Add the theme to your `gatsby-config.js`:

   ```
   module.exports = {
     plugins: [
       {
         resolve: '@luiskunz/gatsby-theme-podcast',
         options: {
           rssUrl: PODCAST_RSS_URL,
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

This theme was created originally from @vojtaholik

https://github.com/vojtaholik/gatsby-theme-simplecast