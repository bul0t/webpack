# webpack.config.js
webpack.config.js - файл конфигурации webpack.

## Конфигурация `mode` режима

    let mode = 'development'
    // console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
        mode = 'production'
    }
    console.log(mode + ' mode')

    module.exports = {
        mode: mode
    }

После внедрения кода выше, команда `npm run build-dev` начнет собирать файл index.js правильно, с комментариями.

## Термины
- module.exports = {} - все настройки хранятся в объекте который нужно экспортировать
- entry - точка входа проекта, можно прописать `./src/index.js`
- output - куда складываем файлы
    - clean: true - очищаем папку dist
    - filename: 'index.js' - название конечного файла
- .browserslistrs - файл создаём в корне проекта
