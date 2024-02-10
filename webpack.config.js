const path = require('path');

// Webpack Plugins
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.hbs$/,
                use: 'handlebars-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        fallback: {
            "fs": false,
            "module": false,
            "tls": false,
            "net": false,
            "child_process": false,
            "dns": false,
            "nock": false,
            "aws-sdk": false,
            "mock-aws-s3": false,
            "async_hooks": false,
            "mongodb-client-encryption": false,
            "aws4": false,
            "npm": false,
            "node-gyp": false
        },
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
};
