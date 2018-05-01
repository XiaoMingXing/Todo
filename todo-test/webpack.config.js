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
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            },
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
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
        new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        hot: true
    },
};