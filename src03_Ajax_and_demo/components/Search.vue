<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" @keyup.enter="search" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchName:''
    }
  },
  methods: {
    search() {
      const searchName = this.searchName.trim()
      if (searchName){
        //分发事件
        this.$globalEventBus.$emit('search',searchName)
        this.searchName = ''
      }
      
      
    }
  },
};
</script>

<style>
</style>