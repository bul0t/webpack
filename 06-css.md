## CSS
Работаем с CSS-файлами.

## Loaders: `style-loader`, `css-loader`
Автоматически обновляем браузер при изменении CSS-файла.

`style-loader` - добавляет стили с помощью JavaScript, прямо в HTML - https://webpack.js.org/loaders/style-loader/

    npm install --save-dev style-loader

`css-loader` - установить после style-loader

    npm install --save-dev css-loader

### webpack.config.js

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

### src/index.js

    import './index.css';

`run start` - при изменении CSS-файла, браузер автоматический обновляется, но CSS стили хранит в HEAD с помомщью JS и не создаёт файлы стилей при dev или prod. Чтобы создать файлы стилей нужен плагин **MiniCssExtractPlugin**

## MiniCssExtractPlugin
https://webpack.js.org/plugins/mini-css-extract-plugin/

    npm install --save-dev mini-css-extract-plugin

### webpack.config.js

    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],

    use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader'
    ],

Из-за этой строки `devMode...` в режиме разработки, файл CSS не создастся, поэтому в ней можно оставить только `MiniCssExtractPlugin.loader` если нужны файлы CSS.
