const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    // mode: 'production',
    // mode: 'none',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public/'),
        publicPath: '/', // must be defined any path, `auto` is not supported yet
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: './src/index.html', // используем свой HTML-файл
            template: './src/index.pug',
            filename: 'index.html',
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
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [{
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        },
                    }
                }],
                generator: {
                    filename: 'img/[name][ext]'
                },
            },
            {
                test: /\.ttf$/i,
                // type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
        ],
    },
}
