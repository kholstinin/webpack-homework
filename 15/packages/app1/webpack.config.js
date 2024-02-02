const path = require('node:path');

module.exports = {
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    devMiddleware: {
      writeToDisk: true
    }
  },
  output: {
    publicPath: "auto",
  },

  // your config
}
