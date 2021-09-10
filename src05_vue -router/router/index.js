/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Messages from '@/pages/Messages'
import MessageDetail from '@/pages/MessageDetail'

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  //mode: 'hash',  //默认是此情况
  mode: 'history',  //去除路径中的#
  //应用中所有的路由
  routes: [
    // 路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',  //path最左边的 / 代表项目的根路径
      component: Home,
      children: [ //注册子路由
        {
          name:'news',  //命名路线，/home/news的name,
          path: '/home/news',
          component: News
        },
        {
          path: 'messages',  //相当于： /home/messages
          component:Messages,
          children: [
            {
              name:'detail',
              path: 'MessageDetail/:id',   //动态路由
              component: MessageDetail,
              //props: true    //内部自动将接收的params参数以标签属性传入路由组件
              //props: route => ({ query: route.query.id })
              props: route => ({ id: route.params.id, name: route.query.name }) //函数中的所有属性都会以标签属性传入组件
            }
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    
    //自动重定向的路由
    {
      path:'/',
      redirect: '/about'
    }

  ]
})