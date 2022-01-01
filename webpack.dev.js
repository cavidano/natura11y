const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devDir = './dist/html';

// const devIndex = 'buttons.html';
const devIndex = 'form-validation.html';
// const devIndex = 'footers.html';
// const devIndex = 'alerts.html';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    target: 'web',
    devServer: {
        port: 8080, 
        static: {
            directory: path.resolve(__dirname, devDir),
            staticOptions: {
                index: devIndex
            },
        }
      
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${devDir}/${devIndex}`,
            filename: devIndex,
            inject: 'body'
        })
    ]
});