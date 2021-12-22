const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const path = require('path')

const PATHS = {
  src: path.join(__dirname, '../src/'),
  dist: path.join(__dirname, '../dist/'),
  build: path.join(__dirname, './build/'),
  assets: 'assets/',
}
const PAGES_DIR = `${PATHS.src}/pug/`

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: `${PATHS.src}scripts/index.ts`,
  },
  output: {
    filename: 'js/[name].[hash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({ template: `${PAGES_DIR}index.pug` }),
    new TerserWebpackPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new StylelintPlugin(),
  ],
  optimization: {
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              esModule: true,
            },
          },
          {
            loader: 'stylus-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
    ],
  },
}
