const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.tsx",
  devServer: {
    hot: true,
    proxy: {
      '/v3/graphql': {
         target: 'http://localhost:8080/',
         router: () => 'https://api.yelp.com',
         changeOrigin: true
      },
      '/v3': {
        target: 'http://localhost:8080/',
        router: () => 'https://api.yelp.com',
        changeOrigin: true
     }
   }
  },
  target: "web",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          plugins: [
            isDevelopment && require.resolve("react-refresh/babel"),
          ].filter(Boolean),
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};