let webpack = require("webpack");
let commonWebpackConfig = require("./webpack.config.js");
let CompressionPlugin = require('compression-webpack-plugin');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


let devtool = "source-map";
let plugins = [
  new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
  }),
  //new webpack.optimize.DedupePlugin(),
  //new webpack.optimize.UglifyJsPlugin(),
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