<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="`/home/messages/MessageDetail/${message.id}`">{{ message.title }}</router-link>
      </li>
    </ul>
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
};
</script>
<style scoped>
</style>
