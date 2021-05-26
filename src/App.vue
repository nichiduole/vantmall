<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'

export default {
  components: {
    TabBar
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f1f1f1;
  box-sizing: border-box;
}
img {
  vertical-align: middle;
}
</style>
