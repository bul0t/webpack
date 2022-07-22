# Изображения
Работаем с изображениями в HTML и CSS.  

## HTML
Создади в `src/` папку `img/` поместим туда изображения.

В файл `src/index.html` добавим тег:

    <img src="img/audi.png" width="400" alt="" />

## CSS
Добавим фон через CSS.

В файл `src/index.html` добавим тег `div` с классом `.image`:

    <div class="image"></div>

В файл `src/style/_common.scss` добавим правило для этого класса:

    .image {
        background-image: url('img/bmw.png');
        background-size: cover;
        width: 300px;
        height: 500px;
    }

Проверяем работу внедренных изображений:

    npm start
    npm run dev

После набора команды: `npm run dev`, в `dist` появятся изображения, но их имена будут состоять из букв и цифр.  
Также при сборке через `mode: production`, вебпак рекомендует сжать размер изображений. Решим эти проблеы.  

## generator
Создаём правило для изображений, чтобы они сохраняли свое имя и складывались в папку `dist/image/`:

    {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        generator: {
            filename: 'image/[name][ext]'
        }
    },

- `[name]` - текущее имя файла
- `[ext]` - текущее расширения

## Сжатие изображений
https://www.npmjs.com/package/image-webpack-loader  
Чтобы сжимать изобржанеия, нужно сначалал установить пакет:

    npm install image-webpack-loader --save-dev

Далее в настройки вебпак ввести следущие опции:

    {
        // test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
        generator: {
            filename: 'image/[name][ext]'
        },
        // type: 'asset/resource',
    },

Также можно порабоать с этим плагном: https://webpack.js.org/plugins/image-minimizer-webpack-plugin/  
Проверяем: `npm run dev`, `npm start`.

## Favicon
В файл `src/index.html` прописываем:

    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="img/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="img/favicon.png" type="image/png" />

## Assets
Подключаем изображения через JavaScript, в `src/index.js` прописываем:

    import audi from './img/audi.png';

    const img = new Image();
    img.src = audi;

Добавляем в файл `src/index.html` код `<div class="img"></div>`

В `src/index.js` дописываем:

    const imgWrap = document.querySelector('.img');
    const img = new Image();
    img.src = audi;
    img.width = 300;
    imgWrap.append(img);

Тут понадобиться прописать: `type: 'asset/resource'` в конфигурацию вебпак дял изображений.
