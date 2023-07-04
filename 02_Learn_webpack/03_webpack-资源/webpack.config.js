const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    //  module 内部fileName 可以省略
    // assetModuleFilename: 'img/[name]_[hash:6][ext]'
    assetModuleFilename: 'img/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css loader 语法糖
        // loader: 'css-loader',

        // 完整写法
        use: [
            'style-loader',
           'css-loader',
           'postcss-loader',
          
        ]
      },
      {
        // 需要加 \ 进行转义
        test: /\.less$/,
        use: [

           'style-loader',
           'css-loader',
           'less-loader',
        ]
      },
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // outputPath: 'img'
      //       name: 'img/[name]_[hash:7].[ext]'
      //     }
      //   }
      // },

      // 使用 url-loader, 是file-loader进阶， 可以对小文件进行base64编码， 好处是减少网络请求
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       // outputPath: 'img'
      //       name: 'img/[name]_[hash:7].[ext]',
      //       // 对要编码的图片进行限制
      //       limit: 100 * 1024
      //     }
      //   }
      // }，
      //  使用asset-module 模块 进行解释
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: 'asset',
        generator: {
          // 不需要.  可以自动解析
          filename: 'img/[name]_[hash:7][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  }
}