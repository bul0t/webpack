# HTML
Работаем с HTML-файлами.

- устанавливаем плагин `html-webpack-plugin`
- устанавливаем лоадер `html-loader`
- настраиваем `webpack.config.js`
- импортируем `index.html` в `index.js`

## Плагин
https://webpack.js.org/plugins/html-webpack-plugin/  
Устанавливаем плагин **HtmlWebpackPlugin**:

    npm install --save-dev html-webpack-plugin

В `webpack.config.js` помещаем:

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    plugins: [new HtmlWebpackPlugin()],

Если набрать `npm run dev`, то файл `dist/index.html` создастся автоматически (не зависимо от того имеется ли он в `src/` или нет).

### Параметры плагина
Используем свой файл `src/index.html`:

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // используем свой HTML-файл
            minify: false, // не сжимать файл в продакшен режиме
        }),
    ],

Созданием файла `dist/index.html` можно управлять через параметры https://github.com/jantimon/html-webpack-plugin#options:

    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello', // изменяем title
            filename: 'main.html', // изменяем имя и путь
        }),
    ],

Значение в `template:` еще можно выставить так: `path.resolve(__dirname, 'src', 'index.html'),`.

## Импортирвоание в index.js
Импортируем файл `src/index.html` в `src/index.js`:

    import './index.html';
    // import html from './file.html';

Чтобы импортированные файлы `.html` были обработаны нужно установить **loader**.

## html-loader
https://webpack.js.org/loaders/html-loader/
Автоматически обновляет браузер при изменении HTML-файла (только при `mode: developer or none`).

    npm install --save-dev html-loader

webpack.config.js:

    module: {
        rules: [
            {
                test: /\.html$/i,      // какие файлы используем
                loader: 'html-loader', // пакет
                options: {
                    minimize: false,   // не минимизировать при продакшене (сработает если и в плагине стоит отмена минимизации)
                },
            },
        ],
    },

`npm run dev` - проверяем работу, обработки `src/index.html` и перемещения его в папку `dist/`.  
`npm start` - проверяем работу сервера обновления страницы при изменении `src/index.html`.

## Разное
Настройка без html-loader и импортирования (автомаическое создание HTML):

    new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html',
    }),
