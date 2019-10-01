const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const ts = {
  test: /\.ts(x)?$/,
  use: [
    {
      loader: 'ts-loader',
    },
  ],
};

const staticFiles = {
  test: /\.(ttf|png)$/,
  use:[
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/static',
      }
    }
  ]
}

const config = {
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  module: {
    rules: [css, ts, staticFiles],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'C2 Profile JS',
      filename: 'index.html',
      inject: 'body',
      favicon: './assets/favicon.png',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      minify: /staging/.test(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    extensions: [' ', '.js', '.jsx', '.ts', '.tsx'],
  },
};
module.exports = config;
