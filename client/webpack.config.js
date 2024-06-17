const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Ejemplo de plugin, puedes necesitar otros según tu configuración

module.exports = {
  entry: './src/index.js',  // Ruta de tu archivo de entrada principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Ruta de salida del archivo empaquetado
    publicPath: '/',
  },
  resolve: {
    fallback: {
      "fs": false,  // o puedes usar require.resolve("fs")
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    }
  },
  devServer:{
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Ejemplo de loader, puedes necesitar otros según tu configuración
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,  // Para procesar archivos CSS
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'],
      }
      // Más reglas de loaders según tus necesidades
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Ruta de tu archivo HTML de entrada
      filename: 'index.html'  // Nombre del archivo HTML de salida
    }),
    // Otros plugins según tus necesidades
  ]
};