# Шрифты
Скачиваем шрифты, из гугл фонтс, напрмер `Ubuntu Mono`. Помещаем их в папку `src/fonts/`.  
У шрифтов скачанных из гугл фонтс расширение `.ttf`, `format('truetype')`.  
Их нужно через конвертор шрифтов преобразовать в `woff2` (в принципе и с ttf отработал).

## webpack.config.js

    {
        test: /\.ttf$/i,
        // test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]'
        }
    },

- `2?` - двойка может быть, а может и не быть
- `i` - любой регистр символов
- `generator` - генератор для названия файлов

## _fonts.scss
Создаём файл `src/style/_fonts.scss` благодаря ему webpack будет определять какие шрифты нужны, а какие нет.

    @font-face {
        font-family: 'Ubuntu Mono';
        src: url('fonts/UbuntuMono-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Ubuntu Mono Italic';
        src: url('fonts/UbuntuMono-Italic.ttf') format('truetype');
    }

## _fonts.scss
В файле `src/style/_fonts.scss` прописываем шрифт для body:

    body {
        color: $text-color;
        font-family: 'Ubuntu Mono';
        background-color: $bg-color;
        user-select: none;
    }

    p {
        font-family: 'Ubuntu Mono Italic';
    }

## index.scss
В файле `src/index.scss` импортируем шрифты:

    @import 'libs/normalize';
    @import 'style/fonts';

`npm start`
