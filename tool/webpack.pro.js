
const base = require('./webpack.base')
const merge = require('webpack-merge')
const webpack = require('webpack')

const config = merge(base, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:18].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      minSize: 0,
      chunks: 'all'
    }
  }
})

config.plugins = [
  ...(config.plugins || []),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.EnvironmentPlugin(['NODE_ENV'])
]

module.exports = config
