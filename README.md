# Webpack
Руководство webpack.
Сайт: https://webpack.js.org

## О webpack
Webpack понимает только JavaScript и JSON файлы.

- index.js - центральный файл
- режимы webpack
    - `mode: "development"` - режим разработки
        - файлы не сжаты, можно вносить правки
        - можно использовать локальный сервер devServer
            - при изменении файлов, они в папку dist не компилируются
    - `mode: "production"` - режим продакшена
        - файлы сжаты, для передачи в рабочий проект
- webpack.config.js - пользовательская настройка webpack

## Части webpack
- loaders (функция) - устанавливают через npm, прописывают в webpack.config.js
- плагины (класс) - более мощный инструмент чем лоадеры, бывают:
    - предустановленные - установленные по умолчанию
    - сторонние плагины
- модули ресурсов - отдельные JavaScript модули, заменяют ранее используемые лоадеры, извлекают изображения и шрифты из файлов стилей

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
- MiniCssExtractPlugin - работает со файлами стилей
- HTMLWebpackPlugin - работает с файлами HTML

## Mode и первый запуск
Создаём режимы запуска webpack в development и production, проверяем работу webpack.

- `npm install --save-dev cross-env` - плагин для работы с переменной NODE_ENV

В src/index.js помещаем код:

    const userStack = {
        language: 'JavaScript',
        framework: 'Vue'
    }

    const user = {
        name: 'Ivan',
        age: '23',
        ...userStack
    }

    console.log(user)

В package.json пишем код:

    "scripts": {
        "start": "set NODE_ENV=development&&webpack serve --open", // dev + local server
        "dev": "set NODE_ENV=development&&webpack",   // dev, компиляция не оптимизированных файлов
        "build": "cross-env NODE_ENV=production webpack"  // prod
    },

    "scripts": {
        "start": "cross-env NODE_ENV=development webpack serve --open",
        "dev": "cross-env NODE_ENV=development webpack",
        "build": "cross-env NODE_ENV=production webpack"
    },

    // без установки `cross-env`
    "scripts": {
        "start": "webpack serve --open", // dev + local server
        "dev": "webpack",   // dev, компиляция не оптимизированных файлов
        "build": "webpack --node-env=production" // так тоже сработает
    },

    // и так сработает
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

Создастся папка `dist`. Чтобы в консоли не было предупреждений о `mode`. Настроим файл конфигурации.

## IMG
- создаём src/images
