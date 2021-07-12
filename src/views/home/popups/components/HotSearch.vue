<template>
  <div class="hot-search">
    <div class="title">热门搜索</div>
    <div class="hot-tag">
      <div class="history-tag">
        <van-tag plain
                 type="primary"
                 color="grey"
                 text-color="grey"
                 class="tag"
                 @click="hotEvent(item)"
                 v-for="(item,index) in hotSearch.hotSearch"
                 :key="index">{{item}}</van-tag>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HotSearch',
  data () {
    return {
    }
  },
  props: ['hotSearch'],
  components: {},
  computed: {},
  methods: {
    hotEvent (item) {
      this.$emit('tagEvent', item)
    }
  }
}
</script>
<style lang='less' scoped>
.hot-search {
  padding: 7px 10px;
  background-color: #fff;
}
.title {
  font-size: 20px;
}
.tag {
  padding: 3px;
  margin-right: 10px;
}
</style>
