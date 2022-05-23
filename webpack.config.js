
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Chunk } = require('webpack');


module.exports = {
    mode:'development',

    entry: {
        index:'./index.js',
        second: './second.js'
    },
        
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    devServer: {

        static:{
            directory:path.resolve(__dirname,'dist'),
        },
         
            port:8080,
            open:true,
            hot:true,
            compress:true,
            historyApiFallback:true,
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject:'body',
            chunks:['index']
        }),
        
        new HtmlWebpackPlugin({
            filename: 'second.html',
            template: './second.html',
            inject:'body',
            chunks:['second']
        })
    ],  
    
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                  loader:'babel-loader',
                  options:{
                    presets:['@babel/preset-env']
                   }
                }
            }
        ]
    }  
    
}