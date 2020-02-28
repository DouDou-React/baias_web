const path = require('path');
const webpack = require('webpack');
const os = require('os');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

const devMode = process.env.NODE_ENV !== 'production';

const env = process.env.NODE_ENV !== 'production';

function resolve(v) {
  return path.join(__dirname, v);
}

const configBase = {
  entry: {
    client: resolve('../src/index.js')
  },
  output: {
    path: resolve('../dist'),
    filename: env
      ? 'static/[name].[hash].js'
      : 'static/[name].[contenthash].js',
    chunkFilename: env
      ? 'chunks/[name].[hash:4].js'
      : 'chunks/[name].[contenthash].js'
  },
  resolve: {
    // 后缀
    extensions: ['.js', '.jsx', '.json'],
    // 别名
    alias: {
      '@': path.join(__dirname, '../src'),
      '@models': path.join(__dirname, '../src/redux/models'),
      '@coms': path.join(__dirname, '../src/components'),
      '@midd': path.join(__dirname, '../src/middleware'),
      '@views': path.join(__dirname, '../src/views'),
      '@confs': path.join(__dirname, '../src/configs'),
      '@style': path.join(__dirname, '../src/style')
    }
  },
  optimization: {
    usedExports: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      name: true,
      automaticNameDelimiter: '~',
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          // minChunks: 1,
          priority: -10, // 确定模块打入的优先级
          reuseExistingChunk: true, // 使用复用已经存在的模块
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happyBabel'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              reloadAll: devMode
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: resolve('../src/style/base.scss')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [resolve('../src/assets/img')],
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[hash:4].[ext]',
          outputPath: '/img'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ template: resolve('../src/index.html') }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/style.css' : 'css/style.[contenthash].css',
      chunkFilename: devMode
        ? 'css/style.[id].css'
        : 'css/style.[contenthash].[id].css'
    }),
    new HappyPack({
      id: 'happyBabel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          loader: 'eslint-loader'
        }
      ],
      threadPool: happyThreadPool,
      verbose: false
    }),
    new HappyPack({
      id: 'happyStyle',
      loaders: [
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: resolve('../src/style/base.scss')
          }
        }
      ],
      threadPool: happyThreadPool,
      verbose: false
    }),
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 60
    })
  ]
};

module.exports = configBase;
