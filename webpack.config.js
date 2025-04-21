const path = require('path');
const HtmlWebPlugin = require("html-webpack-plugin");
const { watch } = require('fs');


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebPlugin({
            template: "./src/template.html",

        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.html$/i,
                use: "html-loader",

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"

            }
        ],
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"]
    }

}