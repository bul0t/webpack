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
            template: 'src/index.pug',
            // filename: 'index.html',
            // minify: false,
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
                options: {
                    // pretty: true,
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
        ],
    },
}
