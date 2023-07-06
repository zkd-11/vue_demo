const path = require('path');
//  插件 自动清除 dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack')
// webpack 插件 文件拷贝
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const PrettierPlugin = require('prettier-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // 设置模式
  //  development 开发阶段，会设置development
  //  production 准备打包上线的时候， 设置production
  mode: 'development',
  // 设置 source-map ， 建立js映射文件， 方便找到错误
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    //  module 内部fileName 可以省略
    // assetModuleFilename: 'img/[name]_[hash:6][ext]'
    assetModuleFilename: 'img/'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    // host: "0.0.0.0",
    port: 7777,
    // compress: true,
    // proxy  代理 绕同源策略
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        // 需要对路径进行重写, 127.0.0.1.7777/api/, 多出了api需要重写
        pathRewrite: {
          "^/api": ""
        },
        // secure: false  当需要访问协议为 https 时, 
        // 而网站无配置证书时, 需要配置为false ,忽略安全
        changeOrigin: true  
        // 修改源
      }
    }
  },
  resolve: {
    // 当找到文件时, 会自动解析加后缀
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tesx"],
    alias: {
      "js": path.resolve(__dirname, "./src/js"),
      "@": path.resolve(__dirname, "./src"),
    }
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
 
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: 'asset',
        generator: {
          // 不需要.  可以自动解析
          filename: 'img/[name]_[hash:7][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:7][ext]'
        }
      },
      {
        test: /\.js$/,
        // 将配置属性独立后 可直接use使用
        loader: "babel-loader"
        // use: {
        //   loader: 'babel-loader',
        //   // options: {
        //   //   // plugins: [
        //   //   //   "@babel/plugin-transform-arrow-functions",
        //   //   //   "@babel/plugin-transform-block-scopoing",
        //   //   // ]

        //   //   presets: [
        //   //     "@babel/preset-env"
        //   //   ]

        //   // }
        // }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },

    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      minify: false,
      title: '悟律-前端',
      
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       // 会自动在配置文件找出口， 文件出口为 build 则会在当前目录下生成
    //       to: './',
    //       globOptions: {
    //         ignore: [
    //           // 忽略此文件， 因为这个文件一般是用读取，并且需要对自定义模板数字进行解析
    //           '**/index.html',
    //         ]
    //       }
    //     }
    //   ]
    // }
    // ),
    new VueLoaderPlugin(),
  ]
}