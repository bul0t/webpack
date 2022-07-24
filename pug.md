# PUG
Устанавливаем пакет для работы совместно с `html-webpack-plugin`  
https://github__com.teameo.ca/trasherdk/pug-loader#using-html-webpack-plugin  

    npm install @webdiscus/pug-loader --save-dev

Создаём файл: `src/index.pug`  
Добавляем импорт в src/index.js: `import './index.pug';` - для автообновления браузера  
Конвертируем код из `index.html` в `index.pug` на сайте https://html2jade.org

## webpack.config.js
Минимальный код который конвертирует `.pug` в `.html` и обновляет струницу в браузере.

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        mode: 'development', // развернутый код
        output: {
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                // template: 'src/index.pug',
                filename: 'index.html',
            })
        ],
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: '@webdiscus/pug-loader',
                    options: {
                        // pretty: true,
                    }
                },
            ],
        },
    }

Более сложный код тут: https://github__com.teameo.ca/trasherdk/pug-loader#using-html-webpack-plugin  

## Работаем с изображениями
https://github__com.teameo.ca/trasherdk/pug-loader#usage-embedded-resources

В файл `index.pug` внедряем изображения через `require`:

        img(src=require('./img/bmw.jpg'))
        img(src=require('./img/bmw.png'))

В файл `webpack.config.js`, добавляем правила для обработки изображений:

    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name][ext]',
        },
    },

## Разное
- https://github__com.teameo.ca/trasherdk/pug-loader:
- https://www.npmjs.com/package/@webdiscus/pug-loader
- Чтобы не сжимать HTML посмотри это: https://www.npmjs.com/package/@webdiscus/pug-loader#method-html