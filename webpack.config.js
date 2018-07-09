var path = require('path');

module.exports = {
  entry: './public/js/unbundled.js',
  mode: 'production',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundled.js'
  }
}
