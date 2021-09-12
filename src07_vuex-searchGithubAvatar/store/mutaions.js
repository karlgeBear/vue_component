/* 
一个包含n个用于直接更新状态数据的方法的对象
mutation方法不要包含异步操作和逻辑处理代码
*/
import {REQUESTING,REQ_SUCESS,REQ_ERROR} from './mutation-type.js'

export default {
  //请求中
  [REQUESTING](state){
    state.firstView = false
    state.loading =true
  },

  //请求成功
  [REQ_SUCESS](state,{users}){
    state.loading = false
    state.users = users
  },

  //请求失败
  [REQ_ERROR](state,{error}){
    state.loading = false
    state.errorMsg = '请求出错' + error
  }
}