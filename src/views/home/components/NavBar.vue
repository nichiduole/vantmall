<template>
  <div>
    <div class="nav-bar">
      <img :src="item"
           v-for="(item,index) in navBar"
           :key="index">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['navBar'],
  data () {
    return {
    }
  }
}

</script>
<style lang='less' scoped>
.nav-bar {
  display: flex;
}
img {
  width: 20%;
}
</style>
