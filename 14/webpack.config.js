const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: false,
  mode: 'development',
  devServer: {
    static: './lib/utils/dist'
  },

  // your config
}
