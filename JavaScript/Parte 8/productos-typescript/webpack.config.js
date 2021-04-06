const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Raíz del servidor(directorio del proyecto)
        publicPath: '/', // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    // mode: 'production',
    mode: 'development',
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        'add-product': './add-product'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/', // Raíz del servidor web
    },
    resolve: {
        extensions: ['.ts', '.js'] // Se pueden quitar las extensiones al importar archivos
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "all",
                    name: "commons", // Generará commons.bundle.js
                    minChunks: 2, // Mínimo archivos deben importar módulo para que se incluya aquí
                    minSize: 0 // Tamaño mínimo del código compartido para que se genere el trozo
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../index.html',
            chunks: ['index', 'commons']
        }), // Por defecto genera index.html
        new HtmlWebpackPlugin({
            filename: 'add-product.html',
            template: '../add-product.html',
            chunks: ['add-product', 'commons']
        }),
    ],
};