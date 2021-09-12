/* 
一个包含n个用于间接更新状态数据的方法的对象
mutation方法可以包含异步操作和逻辑处理代码
*/
import {REQUESTING,REQ_SUCESS,REQ_ERROR} from './mutation-type'
import axios from 'axios'

export default {
  /* 
  搜索的异步action:包含了异步代码action
  */
 search({commit},searchName) {
    //在发请求前，提交请求中的mutation
    commit(REQUESTING)

    //发异步请求获取数据
    //发搜索的的ajax
    axios.get('https://api.github.com/search/users',{
          params: {
            q: searchName
          }
        }).then(response => {//如果成功了，提交请求成功的mutation
            const result = response.data
            const users = result.items.map(item => ({
              userName: item.login,
              url: item.html_url,
              avatar_url: item.avatar_url
            }))
            // commit(REQ_SUCESS,users)  //传递的是数据本身
             commit(REQ_SUCESS,{users})  //传递的是包含数据的对象
        }).catch(error => {//如果失败了，提交请求失败的mutation
            commit(REQ_ERROR,{error})
        })

 }
}