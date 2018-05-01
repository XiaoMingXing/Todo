const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ["*", ".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Minimal React Webpack Babel Setup',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};