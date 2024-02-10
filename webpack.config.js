const path = require('path');

// Webpack Plugins
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
//const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    externals: [nodeExternals()],
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
            "mongodb-client-encryption": false,
            "aws4": false,
            "kerberos": false,
            "@mongodb-js/zstd": false,
            "snappy": false,
            "@aws-sdk/credential-providers": false,
        },
    },
    plugins: [
//        new NodePolyfillPlugin(),
        // new webpack.ProvidePlugin({
        //     'process.hrtime': 'browser-process-hrtime'
        // }),
    ],
    stats: {
        warningsFilter: [
            /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
            /require\.extensions is not supported by webpack. Use a loader instead./,
            /Critical dependency: the request of a dependency is an expression/
        ],
    },
};
