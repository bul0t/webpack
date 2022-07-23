# PUG

Устанавливаем пакеты
- https://github__com.teameo.ca/trasherdk/pug-loader:
- https://www.npmjs.com/package/@webdiscus/pug-loader

    npm install @webdiscus/pug-loader --save-dev

    может еще `pug` // npm install pug pug-loader --save-dev

Создаём файл:
    
    src/index.pug

Конвертируем код из `index.html` в `index.pug`:

    https://html2jade.org

    img(src=require('image/bmw.png')) // изображение

Добавляем в `src/index.js`:

    import './index.pug';

Добавляем в `webpack.config.js`:

    const path = require('path');

    output: {
        path: path.join(__dirname, 'public/'),
        publicPath: '/', // must be defined any path, `auto` is not supported yet
        clean: true,
    },

    new HtmlWebpackPlugin({
        // template: './src/index.html', // используем свой HTML-файл
        template: './src/index.pug',
        filename: 'index.html',
    }),

    {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
    },

    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

Чтобы не сжимать HTML посмотри это: https://www.npmjs.com/package/@webdiscus/pug-loader#method-html
