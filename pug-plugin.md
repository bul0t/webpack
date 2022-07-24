# pug-plugin
https://www.npmjs.com/package/pug-plugin  
https://github.com/webdiscus/pug-plugin#install-and-quick-start

`pug-plugin` уже содержит `pug-loader`.

Устанавливаем плагины:

    npm install pug-plugin --save-dev
    npm install css-loader sass sass-loader --save-dev

Входным файлом делаем `index.pug`:

    entry: {
        index: './src/index.pug'
    },

Изобрражения стили и скрипты подключаем в `index.pug` через `require()`

    img(src=require('./img/bmw.png'))
    link(href=require('./styles.scss') rel='stylesheet')
    script(src=require('./js/scripts.js'))

Структура проекта:

    src/
        img/
            bmw.jpg
            bmw.png
        js/
            scripts.js
        styles.scss
        index.pug

## webpack.config.js + img + scss + server

    const path = require('path');
    const PugPlugin = require('pug-plugin');

    module.exports = {
        mode: 'development',   // развернутый код
        // mode: 'production', // сжатый
        // mode: 'none',       // без режима
        devtool: 'source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            watchFiles: {
                paths: ['src/**/*.*'], 
                options: {
                    // usePolling: true, // false можно убрать параметр
                },
            },
        },
        entry: {
            index: './src/index.pug'
        },
        output: {
            clean: true,
            path: path.join(__dirname, 'dist/'),
            publicPath: '/',
            filename: 'js/common.js'
            // assetModuleFilename: 'assets/[name][ext]'
        },
        plugins: [
            new PugPlugin({
                pretty: true, // formatting HTML, should be used in development mode only
                extractCss: {
                    // output filename of CSS files
                    filename: 'common.css'
                },
            })
        ],
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: PugPlugin.loader, // pug-plugin already contain the pug-loader
                    options: {
                        method: 'render', // fast method to generate static HTML files
                    }
                },
                {
                    test: /\.(css|sass|scss)$/,
                    use: ['css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|svg|ico)/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[name][ext]',
                    },
                },
            ],
        },
    }
