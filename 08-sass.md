# SASS
Работаем с SCSS-файлами.

Переименовываем файл `src/index.css` в `src/index.scss`

В **src/index.js** заменяем `import './index.css';` на `import './index.scss';`

## Loaders
https://webpack.js.org/loaders/sass-loader/

Устанавливаем `sass-loader`, `sass`:

    npm install sass-loader sass --save-dev

## webpack.config.js

    test: /\.(c|sa|sc)ss$/i,
    use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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

