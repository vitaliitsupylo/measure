const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: '/(node_modules|bower_components)/',
            loaders: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}