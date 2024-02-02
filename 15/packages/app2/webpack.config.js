const path = require('node:path');

module.exports = {
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    devMiddleware: {
      writeToDisk: true
    }
  },
  output: {
    publicPath: "auto",
  },

  // your config
}
