// const isDev = process.env.NODE_ENV === 'development'
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   mode: isDev ? 'development' : 'production',
  // entry: [
  //   '@babel/polyfill', // enables async-await
  //   './client/index.js'
  // ],
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader'
      // },
//       {
//         test: /\.scss$/,
//         use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({template: './public/index.html'}),
//     new MiniCssExtractPlugin({
//       filename: './public/style.css',
//     })
//   ]
// }

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './public/index.html',
      filename: "./public/index.html"
    }),
    new WebpackMd5Hash()
  ]
};
