const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = 
{
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },     
    module: 
    {
        rules: 
        [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.xml$/,
                use: [ 'xml-loader' ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [{
                        loader: 'html-loader',
                        options: {
                        minimize: false,
                        removeComments: true,
                    }
                }],
            }   
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { verbose: true } ),       
        new HtmlWebpackPlugin({
            favicon: '',
            minify: true,
            cache: true,
            title: 'Cool daily Currency Converter',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        compress: false,
        open: true,
        host: 'localhost',
        port: 8080,
        watchOptions: {
            poll: true
        },
    }
}

