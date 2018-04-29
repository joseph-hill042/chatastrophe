const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "/public/index.html"),
            favicon: path.join(__dirname, "/public/favicon.ico")
        })
    ]
});