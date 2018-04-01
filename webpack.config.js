const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHTML = new HtmlWebpackPlugin({
    template: "./client/index.html"
});

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './server/public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [/client/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, './client/js')],
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        modules: true,
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                query: {
                  name: 'images/[name]-[hash].[ext]'
                }
              }
            ]
          }
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: path.resolve(__dirname, './client'),
        historyApiFallback: true,
    },
    plugins: [
        indexHTML
    ]
};