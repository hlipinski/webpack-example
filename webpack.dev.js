const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const host = 'localhost';
const port = 8080;

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        host,
        port
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: {sourceMap:true}},
                        { loader: "stylus-loader", options: {sourceMap:true}}
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
});