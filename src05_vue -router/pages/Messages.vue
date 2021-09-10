<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="{ name: 'detail', params: { id: message.id }}">{{ message.title }}</router-link>
        --<button @click="pushShow(message.id)">push查看</button>
        --<button @click="replaceShow(message.id)">replaceShow查看</button>
      </li>
    </ul>

    <button @click="$router.back()">返回</button>
    <hr>
    <!-- 再次显示当前路由 -->
    <router-view></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //莫模拟AJAX请求
    setTimeout(() => {
      const messages = [
        { id: 1, title: "meessage001" },
        { id: 2, title: "meessage002" },
        { id: 4, title: "meessage003" },
      ];
      this.messages = messages;
    }, 1000);
  },
  methods: {
    pushShow(id){
      //编程式路由导航
      //this.$router.push(`/home/messages/MessageDetail/${id}`)
      //命名路线
      this.$router.push({ name: 'detail', params: { id: id }})
    },
    replaceShow(id){
      //编程式路由导航
      this.$router.replace(`/home/messages/MessageDetail/${id}`)
    }
  }
};
</script>
<style scoped>
</style>
