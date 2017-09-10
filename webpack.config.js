var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader',
var devConfiguration = {
  entry: {
    'index': './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'FadeImage'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(bower_components|node_modules)/,
        loader: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /(bower_components|node_modules)/,
        use: ['style-loader', 'css-loader?modules=true&importLoaders=1&localIdentName=[name]_[local][hash:3]']
        /*ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules=true&importLoaders=1&localIdentName=[name]_[local]'
        })*/
        /*{ loader: 'style-loader' },
        { 
          loader: 'css-loader', 
          options: { 
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]_[local]',
          }
        }*/
      }
    ],
  },
  plugins: [
    //new ExtractTextPlugin('index.css'),
  ],
  // module end
  resolve: {
    extensions: ['.js', '.es6', '.jsx'],
  },
  // React and ReactDOM should be present in global scope
  externals: {
    react: {
      root: 'React'
    },
    'react-dom': {
      root: 'ReactDOM'
    }
  }
};

var minify = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  output: {
    comments: false,
  },
  sourceMap: true,
  compress: { warnings: false, screw_ie8: true },
});


if (process.env.NODE_ENV === 'production') {
  devConfiguration.plugins.concat([new webpack.optimize.AggressiveMergingPlugin(), minify]);
}

module.exports = devConfiguration;