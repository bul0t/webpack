# Установка webpack
https://webpack.js.org/guides/getting-started

- переходим в папку проекта
- `npm init -y` - инициализируем проект
- `npm install webpack webpack-cli --save-dev` - устанавливаем вебпак
- `npm install webpack-dev-server --save-dev` - локальный сервер

Создаём структуру проекта, настраиваем конфигурацию режимов сборки `package.json`, проверяем работу webpack.

## Структура проекта
- `/src` - папка с исходными файлами, по-умолчанию
- `/dist` - папка со скомпилированными файлами, создаётся автоматически

    src/
        fonts/
        img/
        index.css
        index.html
        index.js
    webpack.config.js

index.css

    body {
        background-color: green;
    }

index.html

    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Title</title>
    </head>
    <body>
        <h1>Head</h1>
    </body>
    </html>

index.js

    console.log('hello')

Или по сложнее:

    const mult = (a, b) => a * b;
    console.log(mult(2, 4))

## Конфигурация режимов сборки
В файле `package.json` прописываем.

Самая простая конфигурация:

    "scripts": {
        "start": "webpack serve",
        "dev": "webpack"
    },

`npm start` - запуск проекта с локальным сервером, папка dist не создастся  
`npm run dev` - запуск проекта без локального сервера, папка dist создастся  

При переходе по адресу `http://localhost:8080/`нам покажет `Cannot GET /` (тобы этого не было нам нужно импортировать index.html в index.js)  
Также нам нужно настроить режиым работы webpack в конфигурационном файле: webpack.config.js


Конфигурация режимов сборки:
- `start` - запуск сервера, разработка в реальном времени, в папку `dist` ничего не складывается
    - `npm start`
- `build-dev` - собирает проект в папку `dist`, в режиме разработки, не сжимает файлы
    - `npm run build-dev`
    - `npm run build:dev`- так тоже вроде сработает
- `build-prod` - собирает проект в папку `dist`, в режиме продакшена, сжимает файлы
    - `npm run build-prod`
- `clear` - очищает папку `dist`
    - `"clear": "rm -rf dist"` - для Ubuntu
    - `"clear": "rd /s /q dist"` - для Windows

Пример:

    "scripts": {
        "start": "webpack serve",
        "build-dev": "webpack",
        "build-prod": "webpack --node-env=production",
        "clear": "rm -rf dist"
    },
