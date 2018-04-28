const path = require('path');

const paths = {
    BUILD: path.resolve(__dirname, 'build'),
    JS: path.resolve(__dirname, 'js')
};

module.exports = {
    entry: path.join(paths.JS, 'index.js'),
    output: {
        path: paths.BUILD,
        publicPath: '/',
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              'babel-loader',
            ],
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
};