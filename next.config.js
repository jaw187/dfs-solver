const withWorkers = require('@zeit/next-workers')
module.exports = withWorkers({
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
    }
  }
})
