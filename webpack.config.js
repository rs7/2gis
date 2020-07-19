const CopyPlugin = require('copy-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;
const ReactRefreshPlugin = require('@webhotelier/webpack-fast-refresh');

module.exports = {
    entry: [
        '@webhotelier/webpack-fast-refresh/runtime.js',
        './src/index.tsx',
    ],

    output: {
        filename: 'index.js'
    },

    plugins: [
        new ReactRefreshPlugin(),
        new ProvidePlugin({
            'React': 'react'
        }),
        new CopyPlugin({
            patterns: [
                'src/favicon.png',
                'src/index.css',
                'src/index.html',
            ],
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: ['node_modules', 'src'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    '@webhotelier/webpack-fast-refresh/loader.js',
                ],
            },
        ]
    }
}
