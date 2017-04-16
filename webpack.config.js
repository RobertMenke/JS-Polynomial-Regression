/**
 * Created by rbmenke on 1/19/17.
 */
const webpack = require("webpack");
const path    = require("path");
const glob    = require("glob");

module.exports = {
    entry    : {
        // demo : './example/src/demo.js',
        PolynomialRegression: './src/PolynomialRegression.js'
    },
    cache    : true,
    output   : {
        path    : './dist/',
        // path : './example/build/',
        filename: '[name].js',
        libraryTarget : "umd"
    },
    module   : {
        loaders: [
            {
                test  : /\.js$/,
                loader: "babel-loader?presets[]=es2015"
            }
        ]
    },
    plugins  : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};