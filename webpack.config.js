/* 
使用commonjs模块化语法
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 注意要解构赋值！！！(清空打包文件目录)
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css成单独文件

/* 
  返回指定目录的绝对路径
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  //入口
  entry: './src/index.js',//入口
  //出口
  output: {
    path: path.resolve('dist'),
    filename: './js/[name].index.js',  //打包后的路径和名字
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  //模式
  mode: 'development',
  //模块打包器
  module:{
    rules: [  //内部 配置loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      //js语法转换(es6 --> es5)
      {
        test: /\.m?js$/,  //只检测js文件
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'] //预设包含多个常用插件包的一个大包
            }
        }
      },
      {
        test: /\.css$/,
        use: [
          //vue-style-loder替换style-loader，是对style-loader一个增强
          'vue-style-loader',//3.将css转移到js中
          //MiniCssExtractPlugin.loader,
          'css-loader' //2.将js中的css转移到html的<style>
        ]
      },
      {
        test: /\.png|jpe?g|gif|svg/,
        type: 'asset/resource'
      },
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/,
        type: 'asset/resource',
        generator: {  //使用此配置，所有 eot|svg|woff|woff2|ttf|mp3|mp4|avi 文件都将被发送到输出目录中的 media目录中
            filename: 'media/[hash][ext][query]'
        }
    }
     ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({  //自动在html里注入js和css文件
      template: './index.html' // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
    }),
  //   new MiniCssExtractPlugin({  //将css文件放到指定文件夹(配合MiniCssExtractPlugin.loader使用)
  //     filename: 'static/css/[hash:5].[ext].css'
  // }),
    new CleanWebpackPlugin(),  //清除dist文件夹，生成新命令
    new VueLoaderPlugin()      //配合vue-loader使用，不可或缺
  ],
  //配置自动化编译
  devServer: {
    open: true, //自动打开浏览器
    compress: true, //启动gzip压缩
    port: 3000,
    hot: true,  //开启热模替换：HMR--哪里修改哪里更新（css支持，html不支持）
    proxy: {  // http://localhost:3000/api
      //'/api': 'http://localhost:4000'    //==> http://localhost:4000/api/xxx
      '/api': {  //匹配处理以/api开头的请求
        target: 'http://localhost:4000',  //转发的目标地址
        pathRewrite: { '^/api': '' },  //在转发请求前去除路径中/api  //htpp://localhost:4000/xxx
        changeOrigin: true  //支持跨域，如果协议/主机也不相同，必须加上
      },

      //可匹配多个服务器
      '/3000': {  //匹配处理以/3000开头的请求
        target: 'http://localhost:3000',  //转发的目标地址
        pathRewrite: { '^/api': '' },  //在转发请求前去除路径中/3000  
        changeOrigin: true  //支持协议名的跨域
      }
    }
  },
  //模块引入解析
  resolve: {
    /* 
    1.简化模块路径
    2.加快打包速度
    */
    alias: {   //模块路径别名
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'  //表示精准匹配
    },
    extensions: ['.js','.vue'],//指定那些后缀的模块可以省略后缀
  },
  devtool: 'source-map'
}