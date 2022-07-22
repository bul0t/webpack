# Sass
Работаем с SCSS-файлами.

## Импортирвоание в index.js
В файле `src/index.js` заменяем:

    import "./index.css";
    на
    import "./index.scss";

Файл `src/index.css` переименовываем в `src/index.scss`

## sass-loader, sass
https://webpack.js.org/loaders/sass-loader/
Компилируют `sass` файлы в `css`.

Устанавливаем `sass-loader`, `sass`:

    npm install sass-loader sass --save-dev

## webpack.config.js
В файл webpack.config.js помещаем:

    {
        test: /\.(c|sa|sc)ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
    }

Проверяем работу: `npm run dev`, `npm start`.

## Файловая структура Sass

    src/style/
        _common.scss
        _mixins.scss
        _variables.scss

В `src/index.scss` запишем:

    @import 'style/variables';
    @import 'style/mixins';
    @import 'style/common';

`@use` вместо импорт тоже попробуй.

## normalize.css
Скачиваем файл normalize.css и добавляем в папку `src/libs/`

В `src/index.scss` добавим:

    @import 'libs/normalize';
