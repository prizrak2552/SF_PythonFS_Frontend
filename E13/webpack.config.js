const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const path = require('path')
const fs = require('fs')
const PATHS = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, './dist/'),
  build: path.join(__dirname, './build/'),
  assets: 'assets/',
}
const PAGES_DIR = `${PATHS.src}/pug/`
const rootPath = './src/'
const output = 'main'
module.exports = {
  entry: `${rootPath}scripts/index.ts`,
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: PATHS.dist,
    port: 3001,
    hot: true,
    open: true,
  },
  stats: 'summary',
  output: {
    filename: `${output}.js`,
  },
  plugins: [
    new MiniCssExtractPlugin(),
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
          // 'style-loader',
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
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true,
          //     config: { path: PATHS.build },
          //   },
          // },
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
