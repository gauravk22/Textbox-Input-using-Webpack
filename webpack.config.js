const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output: {
        filename: 'bundle.js',
      },
      module:{
          rules:[
              {test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/},
              {test:/\.html$/,use:'html-loader'},
              {test:/\.css$/,use:['style-loader','css-loader']}
          ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html",
        })
      ]
  };

