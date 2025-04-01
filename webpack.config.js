const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const isProduction = process.env.NODE_ENV == 'production';
const outDir = isProduction ? './' : './dist';

const baseConfig = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'img'), to: path.resolve(__dirname, outDir, 'img') },
        { from: path.resolve(__dirname, 'src', 'css'), to: path.resolve(__dirname, outDir, 'css') }
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

module.exports = ({}, { mode }) => {
  const isProductionMode = mode === 'production';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
