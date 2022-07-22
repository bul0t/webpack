# Разное

## Регулярные выражения `regex`

    test: /\.html$/i,

`i` - берём HTML-файлы в любом регистре в расширении `.html`, `.HTML`

## LiveServer
Папку `dist` можно открыть через LiveServer и проверить работу конечных файлов проекта.

## Кеширование
https://webpack.js.org/guides/caching/  
Мы можем бороться с кешированием файлов, путем добавления к их именам кода `[contenthash]`.

    filename: '[name].[contenthash].js',
    filename: '[name].[contenthash].css',

Имя файла меняется каждый раз при его изменении.

## asset/resource
https://webpack.js.org/guides/asset-modules/

Перемещение изображений, шрифтов и других ресурсов. Ресурсы перемещаются в корень папки `dist`, для каждого ресурса можно создать свои настройки куда они будут перемещаться и какое название будет у их фалйов, также можно создать общую настройку для всех ресуссов.

Создадим настройку куда будут помещаться по-умолчанию все ресурсы, если у них в настройках не прописан `generator`:

    output: {
        assetModuleFilename: 'assets/[name][ext]',

- `[name][ext]` - сохраняет имя файла
- `[hash][ext]` - изменяет имя файла

## HTML
Что бы добавить вторую страницу html нужно создать еще один экземпляр HtmlWebpackPlugin в котором указать в качестве template шаблон например about.pug и выходной файл filename например about.html. Тогда у вас будет дополнительно компилироваться еще одна страница в папку dist.

## Сервер
    devServer: {
        open: true,
        hot: true, // уже можно не указывать с версии 4.0 и выше
        port: 'auto',
        static: { // это тоже скорее всего можно не указывать, потому что папка src/ по умолчанию, а файлы обновляются автоматически
            directory: './src',
            watch: true,
        },
    },

    и в скриптах 
    "start": "set NODE_ENV=development&&webpack serve",
    без --open

    "scripts": {
        "start": "NODE_ENV=development webpack serve",
        "dev": "NODE_ENV=development webpack",
        "build": "NODE_ENV=production webpack"
    }

    Запускайте сборку командами: npm run build (или "npm run dev"/"npm run start"
