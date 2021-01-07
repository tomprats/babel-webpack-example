const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, "src"),
  devServer: {
    publicPath: "/build/"
  },
  devtool: "source-map",
  entry: [
    "regenerator-runtime/runtime",
    "core-js/stable",
    "./index.js"
  ],
  mode: env = process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "example.js",
    library: "Example",
    libraryExport: "default",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: [
    new webpack.ProvidePlugin({"React": "react"})
  ],
  resolve: {
    extensions: [".jsx", ".js"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules")
    ]
  }
};
