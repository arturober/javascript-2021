var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Raíz del servidor(directorio del proyecto)
        publicPath: '/', // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    mode: 'development',
    devtool: 'source-map',
    // mode: 'production',
    context: path.join(__dirname, 'js'),
    entry: {
        products: './products.js',
        'add-product': './add-product.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    }, // dist/product.bundle
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../products.html',
            chunks: ['products', 'vendors']
        }),
        new HtmlWebpackPlugin({
            filename: 'add-product.html',
            template: '../add-product.html',
            chunks: ['add-product', 'vendors']
        }), // Generates default index.html
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: { // Esto generará vendors.bundle.js
                    test: /[\\/]node_modules[\\/]/, // sólo código dentro de node_modules
                    name: "vendors", // Generará vendors.bundle.js
                    chunks: 'all'
                }
                    
            }
        }
    }  
}
