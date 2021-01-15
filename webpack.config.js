const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
module.exports = {
    entry : "./src/index.js",
    output : {
        path: path.resolve('./build'),
    filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }
            },
             {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
             use: [
                   'file-loader',
                 ],
               },
        ]
    },
    stats: {
        warningsFilter: [/Failed to parse source map/],
      },
    devServer: {
        historyApiFallback: true,
        contentBase: "./build"
      },
    plugins : [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}