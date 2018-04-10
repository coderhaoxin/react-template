
const { join } = require('path')

const { distPath } = require('./config')

module.exports = {
  entry: {
    signin: join(__dirname, '../template/signin'),
    app: join(__dirname, '../template/app')
  },
  output: {
    path: distPath,
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: '#source-map'
}
