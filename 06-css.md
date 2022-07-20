# CSS
Работаем с CSS-файлами.

## Плагин
https://webpack.js.org/plugins/mini-css-extract-plugin/
Устанавливаем плагин **MiniCssExtractPlugin**:  

    npm install --save-dev mini-css-extract-plugin

Плагин извлекает CSS в отдельные файлы, создает файл CSS, поддерживает загрузку CSS и исходных карт (по требованию). Нужно устаовить `css-loader`.

## css-loader
https://webpack.js.org/loaders/css-loader/  
Извлекает CSS-ввиде файла.

    npm install --save-dev css-loader

## webpack.config.js

В `webpack.config.js` помещаем:

    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css', // переименуем index.css в style.css
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },

## Импортирвоание в index.js
В `src/index.js` помещаем:

    import "./style.css";

Проверяем работу: `npm run dev`, `npm start`.

## Разное
`style-loader` - добавляет стили с помощью JavaScript, прямо в HTML - https://webpack.js.org/loaders/style-loader/

    npm install --save-dev style-loader
