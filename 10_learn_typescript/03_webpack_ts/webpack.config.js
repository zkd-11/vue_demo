// 导入路径
const path = require('path');
// 从依赖中 取出 plugin配置
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: false,
  
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    // 对导入的文件自动加后缀  文件依赖， 需要为其进行补充
    extensions: [".ts", ".js", ".cjs", ".json"]
  },
  devServer: {
  },
  module: {
    // 使用ts编译器， 进行编译转换
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ]
}