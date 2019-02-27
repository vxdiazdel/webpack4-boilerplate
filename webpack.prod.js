  const merge = require('webpack-merge');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      })
    ]
  });