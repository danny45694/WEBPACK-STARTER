const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devtool: 's['
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                ,
            },
            {
                text: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'bable-loader',
                    options: {
                        presets:['@babel/preset-env'],
                    },
                },
            },
        ],
    },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'Webpack App',
                    filename: 'index.html',
                    template: 'src/template.html'
                }),
            ],
    }

