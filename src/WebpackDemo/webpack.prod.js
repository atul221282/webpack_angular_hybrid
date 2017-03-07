//https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a#.irdy1mr2g

const webpack = require("webpack");
const commonWebpackConfig = require("./webpack.config.js");
const CompressionPlugin = require('compression-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

let devtool = "source-map";
let plugins = [
      new webpack.DefinePlugin({ //<--key to reduce React's size
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
      })
];

commonWebpackConfig.devtool = devtool;

plugins.forEach((x) => {
    commonWebpackConfig.plugins.push(x);
});

module.exports = commonWebpackConfig;