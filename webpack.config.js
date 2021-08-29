/* 
使用commonjs模块化语法
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 注意要解构赋值！！！(清空打包文件目录)
const { VueLoaderPlugin } = require('vue-loader')

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
                presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.css$/,
        use: [
          //vue-style-loder替换style-loader，是对style-loader一个增强
          'vue-style-loader',//3.将css转移到js中
          'css-loader' //2.将js中的css转移到html的<style>
        ]
      },
      {
        test: /\.png|jpe?g|gif|svg/,
        type: 'asset/resource'
      }
     ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
    }),
    new CleanWebpackPlugin(),  //清除dist文件夹，生成新命令
    new VueLoaderPlugin()      //配合vue-loader使用，不可或缺
  ],
  //配置自动化编译
  devServer: {
    open: true, //自动打开浏览器
    compress: true, //启动gzip压缩
    port: 3000,
    hot: true  //开启热模替换：HMR--哪里修改哪里更新（css支持，html不支持）
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
  }
}