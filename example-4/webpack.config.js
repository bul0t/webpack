const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',   // развернутый код
    // mode: 'production', // сжатый
    // mode: 'none',       // без режима
    devtool: 'source-map',
    output: {
        clean: true,
        // filename: 'common.js',
        // path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,      // какие файлы используем
                loader: 'html-loader', // пакет
            },
        ],
    },
}
