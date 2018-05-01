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
    // this is important to debug in google chrome
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                // use ts-loader or awesome-typescript-loader to load ts files
                use: ['babel-loader', 'ts-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Minimal React Webpack Babel Setup',
            template: 'index.html'
        }),
        // this is important to do the hot load
        new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        hot: true
    },
};