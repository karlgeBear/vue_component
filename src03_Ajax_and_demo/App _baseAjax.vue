<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>moast star repo id <a :href="repoUrl">{{repoName}}</a></div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data (){
    return {
      repoName: '',
      repoUrl: ''
    }
  },

  mounted(){
    // 使用vue-resource发ajax请求
/*     this.$http.get('https://api.github.com/search/repositories?q=j&sort=stars')
    .then(response =>{
      const result = response.data
      const {name,html_url} = result.items[0]
      this.repoName = name
      console.log(html_url)
      this.repoUrl = html_url
    })
    .catch(error => {
      alert('请求出错')
    }) */
    // 使用axios发ajax请求
    axios.get('/api/repositories/vue')
    .then(response =>{
      const result = response.data //{status,data:{name,html_url}}
      const {name,html_url} = result.data
      this.repoName = name
      console.log(html_url)
      this.repoUrl = html_url
    })
    .catch(error => {
      alert('请求出错')
    })
  }
}
</script>

<style>

</style>