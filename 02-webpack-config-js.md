# webpack.config.js
webpack.config.js - файл конфигурации webpack.

## Конфигурация `mode` режима
Самое простое:

    module.exports = {
        mode: 'development',   // развернутый код
        // mode: 'production', // сжатый
        // mode: 'none',       // без режима
    }

Набрав `npm run dev` в `dist` появится файл `main.js`

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

## Конфигурация вывода (стандартная)
Конфигурация source-map, browserslist, clean: true, ресурсов (и вывода файла index.js из src в dist)

    const path = require('path');

    module.exports = {
        mode: 'development',
        // mode: 'production',
        // mode: 'none',
        // devtool: 'source-map',
        // target: 'browserslist',
        // entry: './src/index.js',
        output: {
            clean: true,
            // filename: 'common.js',
            // path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: 'assets/[name][ext]'
        }
    }

Пояснения по коду:
- `module.exports = {}` - все настройки хранятся в объекте который нужно экспортировать
- `mode:` - режим сборки development/production/none
- `devtool:` - создать карту исходного кода, например для CSS или JavaScript
- `target:` - можно создать файл `src/.browserslist` и указать параметры поддерживаемых браузеров для CSS
- `entry:` - точка входа проекта, можно прописать:
    - `'./src/index.js'`
    - `path.resolve(__dirname, 'src', 'index.js')`
    - `entry: { bundle: path.resolve(__dirname, 'src/index.js'), },`
- `output:` - настройка вывода
    - `filename:` - название конечного файла, в папке dist, можно прописать так:
        - `custom-name.js`
        - `bundle.[name].js`
        - `[name].[contenthash].js`
    - `path:` - куда складываем файлы
    - `clean: true` - очищаем папку dist, работает только при запуске без сервера
    - `assetModuleFilename:` - куда складываем ресурсы: изображения, шрифты и т.п.

Пример с `entry`:

    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        // можно еще указать точки входа
    },
    output: {
        filename: [name].js, // на выходе будет bundle.index.js
    }

## .browserslistrs
В корне проекта можно создать файл `.browserslistrs`, с настройками для CSS:

    last 2 versions
    not dead
    > 0.5%

## Разное
### Проверяем работу модулей ES6
В `src/index.js` прописываем:

    import hello from './hello.js'
    console.log(hello())

В `src/generateJoke.js` прописываем:

    function hello() {
        return 'hello'
    }

    export default hello

В `dist/index.html` прописываем:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Заголовок</h1>

        <!-- <script type="module" src="../src/index.js"></script> -->
        <script src="main.js"></script>
    </body>
    </html>

Открываем LiveServer, запускаем webpack `npm run build` через mode: development/production/none, проверяем работу скрипта.  
Можно через npm устанавливать различные пакеты (jquery, bootstrap и т.п.) и импортировать их в `src/index.js`.  
