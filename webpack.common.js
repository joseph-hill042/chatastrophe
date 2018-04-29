const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    entry:  './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loaders: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: 'images/[name].[text]'
                        }
                    },
                    'img-loader' // optional image compression remove this if img-loader binary build fails in your OS
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            FB_API_KEY: JSON.stringify(process.env.FB_API_KEY),
            DB_URL: JSON.stringify(process.env.DB_URL),
            MSG_SENDER_ID: JSON.stringify(process.env.MSG_SENDER_ID)
        })
    ]
};