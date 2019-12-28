const withWorkers = require('@zeit/next-workers')
module.exports = withWorkers({
  /* config options here */
  output: {
    globalObject: 'this'
  }
})
