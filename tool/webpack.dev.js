
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const { join } = require('path')

const isArray = Array.isArray

const config = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/dist/'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
})

Object.keys(config.entry).forEach((key) => {
  const a = isArray(config.entry[key]) ? config.entry[key] : [config.entry[key]]

  config.entry[key] = [
    join(__dirname, 'dev-client'),
    ...a
  ]
})

config.plugins = [
  ...(config.plugins || []),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: join(__dirname, '../public/index.html'),
    inject: true
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

module.exports = config
