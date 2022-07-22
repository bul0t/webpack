const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    // mode: 'production',
    // target: 'browserslist',
    devtool: 'source-map',
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: true,
    // },
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        // filename: 'common.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', // используем свой HTML-файл
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                },
            },
            {
                test: /\.(c|sa|sc)ss$/i,
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
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
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
                    filename: 'image/[name][ext]'
                }
            },
        ],
    },
}
