## postcss
https://webpack.js.org/loaders/postcss-loader/

Автоперфиксы, сжатие файла и многое другое.

    npm install --save-dev postcss-loader postcss postcss-preset-env

## webpack.config.js

    use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [require('postcss-preset-env')],
                },
            },
        },
        'sass-loader'
    ],

## Разное
Итого к этому моменту мы устанавливаем для работы со стилями, следующие плагины: 

    npm install 
        style-loader
        css-loader
        mini-css-extract-plugin
        sass-loader
        sass
        postcss-loader
        postcss
        postcss-preset-env
        --save-dev
