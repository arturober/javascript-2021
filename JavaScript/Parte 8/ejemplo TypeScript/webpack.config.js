const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Raíz del servidor(directorio del proyecto)
        publicPath: '/', // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    mode: 'development',
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
    },
    output: {
        filename: '[name].bundle.js', // Aquí se deja la extensión .js
        path: path.join(__dirname, '/dist'),
        publicPath: '/', // Raíz del servidor web
    },
    resolve: {
        extensions: ['.ts', '.js'] // Se pueden quitar las extensiones al importar archivos
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../index.html',
            chunks: ['index'] // Inserta <script src="index.bundle.js">
        }), // Por defecto genera index.html 
    ]
};