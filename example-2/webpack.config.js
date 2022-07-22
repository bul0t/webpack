const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: 'development',
    mode: 'production',
    // mode: 'none',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // используем свой HTML-файл
        }),
        new MiniCssExtractPlugin({
            // filename: 'style.css', // переименуем index.css в style.css
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,      // какие файлы используем
                loader: 'html-loader', // пакет
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    'sass-loader'
                ],
            },
        ],
    },
}
