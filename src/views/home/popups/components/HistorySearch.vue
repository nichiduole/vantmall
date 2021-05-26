<template>
  <div class="history-search"
       :class='{isDelete:isShow}'>
    <div class="title">
      <div class="title">历史搜索</div>
      <van-icon name="delete-o"
                class="icon"
                size="20px"
                @click="historyHidden" />
    </div>
    <div class="history-tag">
      <van-tag plain
               type="primary"
               color="grey"
               text-color="grey"
               class="tag"
               @click="historyEvent(item)"
               v-for="(item,index) in historySearch.historySearch"
               :key="index">{{item}}</van-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistorySearch',
  data () {
    return {
      isShow: false
    }
  },
  props: ['historySearch'],

  components: {},

  computed: {},

  methods: {
    historyEvent (item) {
      this.$emit('tagEvent', item)
    },
    historyHidden () {
      this.$toast.success('删除成功')
      setTimeout(() => {
        this.isShow = true
      }, 2000)
    }
  }
}

</script>
<style lang='less' scoped>
.history-search {
  padding: 7px 10px;
  margin: 1px 0 10px 0;
  background-color: #fff;
  .title {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }
  .tag {
    padding: 3px;
    margin-right: 10px;
  }
}
.isDelete {
  display: none;
}
</style>
