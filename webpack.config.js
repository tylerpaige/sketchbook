const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  mode : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: [
          {
            loader :'babel-loader',
            options : {
              presets : [
                ['@babel/preset-env']
              ],
              plugins : [
                ['@babel/plugin-transform-react-jsx', { pragma: 'h' }]
              ]
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use : [
          {
            loader : 'style-loader',
            options : {
              singleton : true
            }
          },
          {
            loader : 'css-loader',
            options : {
              modules : true
            }
          },
          {
            loader : 'sass-loader'
          },
          {
            loader : 'postcss-loader'
          }
        ]
      }
    ]
  },
  devtool : 'source-map',
  devServer : {
    contentBase : path.join(__dirname, 'src'),
    compress : true,
    historyApiFallback : true
  }
};
