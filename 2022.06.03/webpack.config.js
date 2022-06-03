const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 번들링이 시작되는 파일
    entry: { react_app: './src/index.js' },
    // 번들링의 대상이 될 파일 확장자
    resolve: { extensions: ['.js', '.jsx', '.css'] },
    // 번들링이 완료되면 저장될 경로와 번들링 파일 이름
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    /* 
    webpack에 연결할 loader를 등록하는 객체
    파일들을 등록된 규칙에 맞게 모듈로 연결
    등록하는 loader의 순서가 중요
    */

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },

    // 번들링된 결과물에 특정 효과를 주는 도구
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

    // 객체의 조건에 맞게 개발 서버를 열어준다.
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        client: {
            overlay: true,
        },
        open: true,
    },
};
