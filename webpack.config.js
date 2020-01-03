const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3100,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};