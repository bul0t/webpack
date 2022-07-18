# HTML
Работаем с HTML-файлами.

## Плагин
https://webpack.js.org/plugins/html-webpack-plugin/  
Устанавливаем плагин **HtmlWebpackPlugin**:

    npm install --save-dev html-webpack-plugin

## webpack.config.js

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],

## loader
https://webpack.js.org/loaders/html-loader/  
Автоматически обновляем браузер при изменении HTML-файла.

    npm install --save-dev html-loader

webpack.config.js:

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },

Берём все файлы **html** в нижнем регистре.

## src/index.js

    import './index.html';

`npm start` - проверяет работу обновления сраниц при изменении `src/index.html`.
