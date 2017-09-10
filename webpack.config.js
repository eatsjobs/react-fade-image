var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var minify = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  output: {
    comments: false,
  },
  sourceMap: true,
  compress: { warnings: false, screw_ie8: true },
});

// loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader',
var devConfiguration = {
  entry: {
    'fade-image': './src/fade-image.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        use:
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules=true&importLoaders=1&localIdentName=[name]_[local]'
        })
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
    new ExtractTextPlugin('fade-image.css'),
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

if (process.env.NODE_ENV === 'production') {
  devConfiguration.plugins.push(minify);
}

module.exports = devConfiguration;