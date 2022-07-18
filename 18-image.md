# Изображения
Работаем с изображениями в CSS и в HTML.  
Сначала добавим фон через CSS.

## _style.scss
В файл `src/style/_style.scss` добавляем:

    .image {
        background-image: url('img/bmw.png');
        background-size: cover;
        width: 300px;
        height: 500px;
    }

## index.html
В файл `src/index.html` добавим блок `.image`:

    <img src="img/audi.png" width="400" alt="" />
    <div class="image"></div>

`npm start`
`npm run build-prod`

При сборке через продакшен, вебпак рекомендует сжать размер изображения.

## Перемещение изображений и других ресурсов
На данный момент, изображения помещаются в корень папки `dist` и имеют имя хэш.

Создаём настройку куда будут помещаться по-умолчанию все `assets` если у них в настройках не прописан `generator` как например у шрифтов:

    output: {
        assetModuleFilename: 'assets/[name][ext]',

- `[name][ext]` - сохраняет имя файла
- `[hash][ext]` - изменяет имя файла

## Разное
Подключаем изображения через JavaScript, в `src/index.js` прописываем:

    import audi from './img/audi.png';

    const img = new Image();
    img.src = audi;

`npm start` - появится ошибка в открытой странице

Чтобы вебпак не выводил сообщения об ошибке, нужно в `webpack.config.js` добавить правило:

    {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/resource',
    },

Можете также создать генератор как шрифтам и ложить изображения в отдельную папку.

Добавляем в файл `src/index.html` код `<div class="img"></div>`

В `src/index.js` дописываем:

    const imgWrap = document.querySelector('.img');
    const img = new Image();
    img.src = audi;
    img.width = 300;
    imgWrap.append(img);

## Сжатие изображений
Установите пакет:

    npm install image-webpack-loader --save-dev

    {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [{
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 75
                },
            }
        }],
        type: 'asset/resource',
    },

Для работы с SVG используется пакет SVGO.
