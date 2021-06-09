const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => ({
    mode: env.prod ? "production" : "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "../assets/js/dist")
    },
    resolve: {
        alias: {
            vue: "@vue/runtime-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: { limit: 8192 }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: !env.prod }
                    },
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        stats: "minimal",
        contentBase: __dirname,
        overlay: true,
        injectClient: false,
        disableHostCheck: true
    }
});
