
const { join } = require('path')

const { distPath } = require('./config')

module.exports = {
  entry: {
    signin: join(__dirname, '../template/signin.js'),
    app: join(__dirname, '../template/app.js')
  },
  output: {
    path: distPath,
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: '#source-map'
}
