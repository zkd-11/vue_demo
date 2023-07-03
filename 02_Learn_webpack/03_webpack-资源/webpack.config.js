const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // 需要加 \ 进行转义
        test: /\.css$/,
        // css loader 语法糖
        // loader: 'css-loader',

        // 完整写法
        use: [
          // 完整写法
          //  {loader: 'css-loader', '其它参数'}
          //  参数从下往上 从右往左
            'style-loader',
           'css-loader',
           'postcss-loader',
          //  {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
          
        ]
      },
      {
        // 需要加 \ 进行转义
        test: /\.less$/,


        // 完整写法
        use: [

           'style-loader',
           'css-loader',
           'less-loader',
        ]
      }
    ]
  }
}