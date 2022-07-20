# dev-server
https://webpack.js.org/configuration/dev-server/  
Настраиваем локальный сервер.

    devtool: 'source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },

- port - 8080
- открывает браузер
- горячая перезагрузка стилей, если не работет то поставьте `false`

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
