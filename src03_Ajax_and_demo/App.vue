<template>
  <div id="app">
    <div class="container">
      <Search></Search>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Search from "./components/Search.vue";
export default {
  components: {
    Main,
    Search,
  },
};
</script>

<style>
</style>