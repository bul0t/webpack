# webpack.config.js
webpack.config.js - файл конфигурации webpack.

## Конфигурация `mode` режима
Самое простое:

    module.exports = {
        mode: 'development'
    }

По сложнее:

    let mode = 'development'
    // console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
        mode = 'production'
    }
    console.log(mode + ' mode')

    module.exports = {
        mode: mode
    }

## Конфигурация вывода файлов из src в dist

    const path = require('path');

    module.exports = {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'common.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        }
    }

Пояснения по коду:
- module.exports = {} - все настройки хранятся в объекте который нужно экспортировать
- mode: 'development' - устанавливаем режим сборки самостоятельно
- entry - точка входа проекта, можно прописать `./src/index.js`
- output - настройка вывода
    - path - куда складываем файлы
    - clean: true - очищаем папку dist, работает только при запуске без сервера
    - filename: 'index.js' - название конечного файла, в папке dist

## .browserslistrs
.browserslistrs - в корне проекта можно создать файл, с настрйокаи для CSS:

    last 2 versions
    not dead
    > 0.5%
