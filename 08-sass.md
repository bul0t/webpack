# Sass
Работаем с SCSS-файлами.

## Импортирвоание в index.js
В файле `src/index.js` заменяем:

    import "./index.css";
    на
    import "./index.scss";

Файл `src/index.css` переименовываем в `src/index.scss`

## Loaders
https://webpack.js.org/loaders/sass-loader/
Компилируют `sass` файлы в `css`.

Устанавливаем `sass-loader`, `sass`:

    npm install sass-loader sass --save-dev

## webpack.config.js

    test: /\.(c|sa|sc)ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ],

`npm start`

## Файловая структура

    src/style/
        _style.scss
        _var.scss


src/index.scss

    @import 'style/var';
    @import 'style/style';

## normalize.css
Скачиваем файл normalize.css и добавляем в папку `src/libs/`

src/index.scss

    @import 'libs/normalize'; // без расширения
    @import 'style/var';
    @import 'style/style';

Проверяем работу: `npm run dev`, `npm start`.
