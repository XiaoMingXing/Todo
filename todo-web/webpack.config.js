const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        "webpack-dev-server/client/?http://localhost:8081",
        "webpack/hot/only-dev-server",
        "./src/index"],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ["react-hot", "awesome-typescript-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
        ]
        // rules: [
        //     {
        //         test: /\.(ts|tsx)$/,
        //         use: [
        //             {loader: "react-hot-loader"},
        //             {loader: "awesome-typescript-loader"},
        //         ]
        //     },
        //     {
        //         test: /\.css$/,
        //         use: [
        //             {
        //                 loader: 'style-loader',
        //             },
        //             {
        //                 loader: 'css-loader',
        //             },
        //         ],
        //     },
        // ]
    },
};