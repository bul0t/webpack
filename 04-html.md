# HTML
Работаем с HTML-файлами.

## Плагин
https://webpack.js.org/plugins/html-webpack-plugin/  
Устанавливаем плагин **HtmlWebpackPlugin**:

    npm install --save-dev html-webpack-plugin

В `webpack.config.js` помещаем:

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    plugins: [new HtmlWebpackPlugin()],

При запуске `npm run dev`, файл `dist/index.html` создастся автоматически (не зависимо от того имеется ли он в `src/` или нет).

### Параметры плагина
Созданием файла `dist/index.html` можно управлять через параметры https://github.com/jantimon/html-webpack-plugin#options:

    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello', // изменяем title
            filename: 'main.html', // изменяем имя и путь
        }),
    ],

Можем использовать свой файл `src/index.html`:

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', // используем свой HTML-файл
            minify: false, // не сжимать файл в продакшен режиме
        }),
    ],

Template еще можно так: `template: path.resolve(__dirname, 'src', 'index.html'),`.

`npm start` - проверяем в браузере HTML и JS. Далее устанавливаем лоадеры для автообновления.

## Импортирвоание в index.js
Импортируем файл `src/index.html` в `src/index.js`:

    import './index.html';
    // import html from './file.html';

Чтобы импортированные файлы `.html` были обработаны нужно установить **loader**.

## html-loader
https://webpack.js.org/loaders/html-loader/
Автоматически обновляет браузер при изменении HTML-файла.

    npm install --save-dev html-loader

webpack.config.js:

    module: {
        rules: [
            {
                test: /\.html$/i,      // какие файлы используем
                loader: 'html-loader', // пакет
                options: {
                    minimize: false,   // не минимизировать при продакшене
                },
            },
        ],
    },

`npm start` - проверяет работу обновления сраниц при изменении `src/index.html`.

## Разное
Настройка без html-loader и импортирования:

    new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html',
    }),
