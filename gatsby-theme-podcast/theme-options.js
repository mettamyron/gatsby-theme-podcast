const merge = require(`deepmerge`)

module.exports = themeOptions =>
  merge(
    {
      manifest: {
        icon: `static/images/icon.png`,
        start_url: `/`,
      },
    },
    themeOptions
  )
