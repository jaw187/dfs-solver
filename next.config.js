const withWorkers = require('@zeit/next-workers')
module.exports = withWorkers({
  webpack(config, options) {
    return config
  }
})
