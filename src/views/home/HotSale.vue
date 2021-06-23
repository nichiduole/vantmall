<template>
  <div>
    <div v-for="(item,index) in hotSale"
         :key="index">
      <img :src="item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotSale',
  props: {
    hotSale: Array
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
img {
  height: 100%;
}
</style>
