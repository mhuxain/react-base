var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: [ '.js', '.jsx']
  },

  devServer: {
    colors: true,
    devtool: 'inline-source-map',
    historyApiFallback: true,
    inline: false,
    port: 8088,
    hot: true,
    contentBase: './static/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
          
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              { loader: 'css-loader', query: {
                    sourceMap: true
                  } 
              },
              { loader: 'postcss-loader' },
              {
                loader: 'sass-loader',
                options: {
                  data: '@import "theme/_config.scss";',
                  includePaths: [path.resolve(__dirname, './src/app')]
                }

              }
            ]
          })
      }
    ]
  }
};
