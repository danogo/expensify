const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const config = {
  // entry point for webpack
  entry: './src/app.js',
  // plac where it give us bundled file
  output: {
    // it has to be absolute path, we use __dirname - built-in node current path and path.join package(without installing, already available with node)
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    // place from what to serve via webpack-dev-server
    contentBase: path.join(__dirname, 'public'),
    // setting routing to be handled via client side code, and to serve our index.html with bundle.js to all 404 pages 
    historyApiFallback: true
  },
  module: {
    rules: [
      { 
        // loader: or use:
        loader: 'babel-loader', // transpiles jsx and ES6 into ES5 using babel-core package (installed via npm)
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/, // test for css or scss files
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings, injects that style element into our html
          {
            loader: 'css-loader', // translates CSS into CommonJS, result of that is used by style-loader
            options: {
              modules: false // it is false by default, global scss styles don't work if modules are true
            }
          },
          { loader: 'sass-loader' } // compiles Sass to CSS, using node-sass package by default (installed via npm)
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({template: './src/assets/index.html'})
  ]
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  if (isProduction) {
    config.devtool = 'source-map';
  }
  return config;
}