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
      ///**
      //     * Webpack plugin to optimize a JavaScript file for faster initial load
      //     * by wrapping eagerly-invoked functions.
      //     *
      //     * See: https://github.com/vigneshshanmugam/optimize-js-plugin
      //     */

      //new OptimizeJsPlugin({
      //    sourceMap: false
      //}),
      ///**
      // * Plugin: UglifyJsPlugin
      // * Description: Minimize all JavaScript output of chunks.
      // * Loaders are switched into minimizing mode.
      // *
      // * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // */
      //// NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
      // new UglifyJsPlugin({
      //     // beautify: true, //debug
      //     // mangle: false, //debug
      //     // dead_code: false, //debug
      //     // unused: false, //debug
      //     // deadCode: false, //debug
      //     // compress: {
      //     //   screw_ie8: true,
      //     //   keep_fnames: true,
      //     //   drop_debugger: false,
      //     //   dead_code: false,
      //     //   unused: false
      //     // }, // debug
      //     // comments: true, //debug


      //     beautify: false, //prod
      //     output: {
      //         comments: false
      //     }, //prod
      //     mangle: {
      //         screw_ie8: true
      //     }, //prod
      //     compress: {
      //         screw_ie8: true,
      //         warnings: false,
      //         conditionals: true,
      //         unused: true,
      //         comparisons: true,
      //         sequences: true,
      //         dead_code: true,
      //         evaluate: true,
      //         if_return: true,
      //         join_vars: true,
      //         negate_iife: false // we need this for lazy v8
      //     },
      // }),
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