# dev-server
https://webpack.js.org/configuration/dev-server/  
Настраиваем локальный сервер. По сути его настраивать и не нужно, благодаря строке `"start": "webpack serve",` в package.json.

    devtool: 'source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true, // уже можно не указывать с версии 4.0 и выше
    },

- port - 8080
- открывает браузер
- горячая перезагрузка стилей, если не работет то поставьте `false`

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
