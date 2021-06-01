const merge = require(`deepmerge`)

module.exports = themeOptions =>
  merge(
    {
      manifest: {
        icon: `src/images/icon.png`,
        start_url: `/`,
      },
    },
    themeOptions
  )
