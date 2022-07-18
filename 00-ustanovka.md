# Установка webpack
https://webpack.js.org/guides/getting-started

- переходим в папку проекта
- `npm init -y` - инициализируем проект
- `npm install webpack webpack-cli --save-dev` - устанавливаем вебпак
- `npm install webpack-dev-server --save-dev` - локальный сервер
- `npm start` - запуск проекта

При запуске нового проекта `npm i`, помимо файла `package.json`, еще нужен файл `package-lock.json`.

## Структура проекта
- `/dist` - папка со скомпилированными файлами, создаётся автоматически
- `/src` - папка с исходными файлами

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

    болванка

index.js

    const mult = (a, b) => a * b;
    console.log(mult(2, 4))

## package.json 
Конфигурация режимов сборки:
- `start` - запуск сервера, разработка в реальном времени, в папку `dist` ничего не складывается
    - `npm start`
- `build-dev` - собирает проект в папку `dist`, в режиме разработки, не сжимает файлы
    - `npm run build-dev`
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
