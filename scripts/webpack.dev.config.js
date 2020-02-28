const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const configBase = require('./webpack.base.config');

function resolve(v) {
  return path.join(__dirname, v);
}
const configDev = {
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: resolve('../src'),
    compress: true,
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(configBase, configDev);
