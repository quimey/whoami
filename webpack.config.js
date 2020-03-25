module.exports = {
  entry: "./whoami/frontend/src/index.js",
  output: {
      path: __dirname + "/whoami/frontend/static/frontend/",
      filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
