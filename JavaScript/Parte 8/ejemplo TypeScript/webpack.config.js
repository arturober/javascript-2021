const path = require("path");

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
        index: './index.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/', // Raíz del servidor web
    },
    module: {
        rules: [
            
        ]
    },
};