const path = require('path')
var LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};