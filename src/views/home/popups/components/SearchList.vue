<template>
  <div>
    <van-list :finished="finished"
              @load="onLoad">
      <van-cell v-for="item in searchList"
                :key="item"
                :title="item"
                @click="listEvent(item)" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  data () {
    return {
      list: [],
      finished: true
    }
  },
  props: ['searchList'],
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
      }, 1000)
    },
    listEvent (item) {
      this.$emit('listEvent', item)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
