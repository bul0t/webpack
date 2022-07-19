# Webpack
Руководство webpack.
Сайт: https://webpack.js.org

## О webpack
- index.js - центральный файл
- режимы работы webpack
    - `mode: "development serve"` - режим разработки с сервером, файлы не выгружаются
    - `mode: "development"` - режим разработки, выгрузка не сжатых файлов
    - `mode: "production"` - режим продакшена, выгрузка сжатых файлов
- webpack.config.js - настройка webpack

## Части webpack
- loaders (функция) - предварительная обработка файлов
- плагины (класс) - более мощный инструмент чем лоадеры, бывают:
    - предустановленные - установленные по умолчанию
    - сторонние плагины
- ресурсы - работаютс с изображениями, шрифтами и т.п.

## Loaders
Какие лоадеры работают с файлами расширений:
- CSS - style-loader css-loader postcss-loader
    - распознаёт испорты стилей
    - перфиксы стилей
- SCSS - sass-loader, преобразует SCSS в CSS
- Изображения встроенные в HTML, PUG - html-loader
- PUG - pug-loader
- JS - babel-loader

## Plugins
- MiniCssExtractPlugin - работает с файлами стилей
- HTMLWebpackPlugin - работает с файлами HTML

## Mode и первый запуск
Создаём режимы запуска webpack в development и production, проверяем работу webpack.

- `npm install --save-dev cross-env` - плагин для работы с переменной NODE_ENV

В package.json пишем код:

    // Не работает, потому что NODE_ENV не присваивается
    "scripts": {
        "start": "set NODE_ENV=development&&webpack serve --open", // dev + local server
        "dev": "set NODE_ENV=development&&webpack",                // dev, компиляция не оптимизированных файлов
        "build": "cross-env NODE_ENV=production webpack"           // prod, продакшн, компиляция оптимизированных файлов
    },

    // Сработает, если установить плагин cross-env
    "scripts": {
        "start": "cross-env NODE_ENV=development webpack serve --open",
        "dev": "cross-env NODE_ENV=development webpack",
        "build": "cross-env NODE_ENV=production webpack"
    },

    // Сработает
    "scripts": {
        "start": "webpack serve --open",         // dev + local server
        "dev": "webpack",                        // dev, компиляция не оптимизированных файлов
        "build": "webpack --node-env=production" // так тоже сработает
    },

    // Сработает, выяснить зачем нужен set или &&
    "scripts": {
        "start": "NODE_ENV=development webpack serve",
        "dev": "NODE_ENV=development webpack",
        "build": "NODE_ENV=production webpack"
    },

- `"start":`
    - нужно установить локальный сервер: `npm install webpack-dev-server --save-dev`
    - `--open` - открывает браузер
    - в консоли вводим `npm start`
    - `Ctrl + C` - выход из ожидания
- `"dev":`
    - в консоли вводим `npm run dev`
- `"build":`
    - в консоли вводим `npm run build`

Чтобы в консоли не было предупреждений о `mode`, нужно настроить файл конфигурации `webpack.config.js`.

## Разное
При запуске нового проекта `npm i`, помимо файла `package.json`, еще нужен файл `package-lock.json`.
