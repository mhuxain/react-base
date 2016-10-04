var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8088',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/assets/js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.jsx']
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 8088,
    hot: true,
    contentBase: './static/'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }]
  }
};
