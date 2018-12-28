const path = require('path');

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
      }
    ]
  },
  devtool : 'source-map',
  devServer : {
    contentBase : path.join(__dirname, 'src'),
    compress : true,
    historyApiFallback : true
  },
  resolve : {
    alias : {
      'react' : 'preact-compat',
      'react-dom' : 'preact-compat'
    }
  }
};
