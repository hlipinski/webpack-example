const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'target'),
    },

    module: {
        rules: [
            {test: /.js$/, exclude: /node_modules/, use: "babel-loader"},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader"},
            {test: /\.jade/, use: ["raw-loader", "pug-html-loader"]}
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['target']),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.jade'
        })
    ]
};