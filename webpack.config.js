const path = require('path');

module.exports = {
    context: __dirname,
    entry:  './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist/",
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
    }
};