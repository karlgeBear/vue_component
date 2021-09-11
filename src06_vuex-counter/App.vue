<template>
  <div>
    App
    <p>click {{count}}，count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment If odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>


</template>

<script>
/* 
store对象
  1.state：包含所有state数据的对象
  2.getters：包含所有getter计算属性的对象
  3.dispatch(mutationName, data)
  4.commit(mutationName, data)
*/

import {mapState,mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  mounted(){
    console.log(this.$store)
  },
  computed: {
/*     count(){
      return this.$store.state.count
    },
    evenOrOdd(){
      return this.$store.getters.evenOrOdd
    }, */

    /*前提： count 和 state.后的 count要相对应 */
    ...mapState(['count']),  //相当于count(){return this.$store.state['state']}
    ...mapGetters(['evenOrOdd'])  //evenOrOdd(){return this.$store.getters['evenOrOdd']}
  },

  methods: {
    // increment(){
    //   this.$store.commit('INCREMENT')
    // },
    // decrement(){
    //   this.$store.commit('DECREMENT')
    // },
    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync')
    // }
    ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}), //相当于increment(){this.$store.commit('DECREMENT')}
    ...mapActions(['incrementIfOdd','incrementAsync'])
  }
};
</script>

<style>
</style>