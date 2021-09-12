/* 
vuex最核心的模块--->store
*/

import Vue from 'vue'
import Vuex from 'vuex'

//声明使用插件
Vue.use(Vuex)

import state from './state'
import mutations from './mutaions'
import actions from './actions'
import getters from './getters'
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})