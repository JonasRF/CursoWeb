const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [     
        new CssMinimizerPlugin({})
    ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
               test: /\.s?[ac]ss$/,
               use: [
                MiniCssExtractPlugin.loader,
                //"style-loader", //adicion CSS Aa DOM injetando a tag <styles>
                "css-loader", //interpreta @import, url()...
                "sass-loader"
               ] 
            }]
    }
}