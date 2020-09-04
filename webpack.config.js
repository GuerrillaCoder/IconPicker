const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    entry: {
      'bundle': './src/index.tsx',
      // 'tailwind': './src/css/tailwind.css',
      // 'main': './src/css/main.css',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {

      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './dist',
      port: 3366,
      // hot: true,
      // writeToDisk: true
    },
  },
  {
    entry: {
      // 'bundle': './src/index.tsx',
      'tailwind': './src/css/tailwind.css',
      'main': './src/css/main.css',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        // chunkFilename: '[name].css',
      }),
    ],
    module: {

      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // // only enable hot in development
                hmr: process.env.NODE_ENV === 'development',
                // // if hmr does not work, this is a forceful method.
                // reloadAll: true,
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ],
        },
      ],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './dist',
      port: 3366,
      // hot: true,
      // writeToDisk: true
    },
  }
];