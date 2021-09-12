/* 
相当于data的对象
包含n个可变的属性数据
*/

export default {
  firstView: true, //是否显示第一个界面
  loading: false, //是否发送Ajax请求中显示第一个界面
  users: [], //用户信息
  errorMsg: "" //Ajax请求出错的提示信息
}