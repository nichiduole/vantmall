<template>
  <div id="app">
    <tab-bar v-if="$route.meta.isShow"></tab-bar>
    <router-view />

  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
export default {
  name: 'App',
  components: {
    TabBar
  },

  data () {
    return {
      name: '我是胡康宁'
    }
  },
  provide () {
    return {
      app: this
    }
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
  background-color: #fff;
}
img {
  vertical-align: middle;
}
* {
  padding: 0;
  margin: 0;
}
</style>
