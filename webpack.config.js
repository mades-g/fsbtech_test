const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');

const isProdEnv = process.env.NODE_ENV === 'production' // true or false

const BaseConfig = {
  devtool: 'source-map',
  entry: {
    'app.bundle': './src/js/app.js',
    'css/main': './src/css/main.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].map',
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']
      },
    ]
  },
  devServer: {
    open: !isProdEnv
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: 'index.html'
    })
  ]
}

const extraProdPlugin = {
  plugins: [new CopyWebpackPlugin([
      { from: './service-mock-data' , to: 'service-mock-data'},
      { from: './assets' , to: 'assets'}
    ])
  ]
}

if(!isProdEnv) {
  module.exports = BaseConfig;
}
else {
  module.exports = merge(BaseConfig  , extraProdPlugin)
}
