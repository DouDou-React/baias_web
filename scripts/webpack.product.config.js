const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const Copy = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const configBase = require('./webpack.base.config');

function resolve(v) {
  return path.join(__dirname, v);
}

const configProduct = {
  mode: 'production',
  output: {
    publicPath: './'
  },
  devtool: 'cheap-module-souce-map',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        // 多进程压缩
        cache: path.resolve('.cache'),
        parallel: 4, // 开启多进程压缩
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve('../src/index.html'), dlls: [] }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new OptimizeCSSAssetsPlugin(),
    new CleanWebpackPlugin()
  ]
};

module.exports = merge(configBase, configProduct);
