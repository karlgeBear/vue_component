<template>
    <h2 v-if="firstView">请搜索用户名</h2>
    <h2 v-else-if="loading">正在请求中...</h2>
    <h2 v-else-if="errorMsg">请求失败:{{ errorMsg }}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
</template>

<script>
import {mapState,mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['firstView','loading','errorMsg','users']),  //loading函数，返回值为this.$store.state.loading
  },
  beforeDestroy(){
    this.$globalEventBus.$off('search')
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>