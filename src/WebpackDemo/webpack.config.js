'use strict';
var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');
let ENV = process.env.npm_lifecycle_event;
let isTestWatch = ENV === 'test-watch';
let isTest = ENV === 'test' || isTestWatch;
let atlOptions = '';
if (isTest && !isTestWatch) {
    // awesome-typescript-loader needs to output inlineSourceMap for code coverage to work with source maps.
    atlOptions = 'inlineSourceMap=true&sourceMap=false';
}

const config = {
    entry: {
        polyfills: './src/polyfills.js',
        vendor: './src/vendor.js',
        app: './src/main.js'
    },

    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: '[name].js'
    },

    module: {

        rules: [
           {
               test: /\.ts$/,
               loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader'],
               //exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
               exclude: [/node_modules\/(?!(ng2-.+|ngx-.+))/]
           },
           // Support for CSS as raw text
          // use 'null' loader in test mode (https://github.com/webpack/null-loader)
          // all css in src/style will be bundled in an external css file
          {
              test: /\.css$/,
              exclude: root('src', 'app'),
              loader: isTest ? 'null-loader' : ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader'] })
          },
          // all css required in src/app files will be merged in js files
          { test: /\.css$/, include: root('src', 'app'), loader: 'raw-loader!postcss-loader' },

          // support for .scss files
          // use 'null' loader in test mode (https://github.com/webpack/null-loader)
          // all css in src/style will be bundled in an external css file
          {
              test: /\.(scss|sass)$/,
              exclude: root('src', 'app'),
              loader: isTest ? 'null-loader' : ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader'] })
          },
          // all css required in src/app files will be merged in js files
          { test: /\.(scss|sass)$/, exclude: root('src', 'style'), loader: 'raw-loader!postcss-loader!sass-loader' },

           // support for .html as raw text
           // todo: change the loader to something that adds a hash to images
           { test: /\.html$/, loader: 'raw-loader', exclude: root('src', 'public') },

             // copy those assets to output
          //{
          //    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          //    loader: 'file-loader?name=images/[name].[ext]?'
          //},
          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'url-loader?limit=10000'
          },

        ]
    },

    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    output: {
        //        comments: false
        //    }
        //}),
        //new CommonsChunkPlugin({
        //    names: [
        //      'polyfills',
        //      'vendors',
        //    ],
        //    minChunks: 4, // names.length,
        //    filename: '[name].js'
        //}),
        new CommonsChunkPlugin({
            names: [
              'polyfills',
              'vendors'
            ],
            minChunks: 2, // names.length,
            filename: '[name].js',
        }),
          new HtmlWebpackPlugin({
              template: './src/index.html',
              chunks: [
                'polyfills',
                'vendors',
                'app',
              ],
          }),
        new ExtractTextPlugin({ filename: 'css/[name].css' }),
        new webpack.LoaderOptionsPlugin({
            options: {

                /**
                 * Sass
                 * Reference: https://github.com/jtangelder/sass-loader
                 * Transforms .scss files to .css
                 */
                sassLoader: {
                    //includePaths: [path.resolve(__dirname, "node_modules/foundation-sites/scss")]
                },
                /**
                 * PostCSS
                 * Reference: https://github.com/postcss/autoprefixer-core
                 * Add vendor prefixes to your css
                 */
                postcss: [
                  autoprefixer({
                      browsers: ['last 2 version']
                  })
                ]
            }
        })
    ],

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    }
};

module.exports = config;


// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}