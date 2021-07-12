<template>
  <keep-alive>
    <div class="popups">
      <van-search v-model="searchValue"
                  show-action
                  placeholder="请输入搜索关键词"
                  autofocus
                  @search="onSearch"
                  @cancel="onCancel"
                  @input="onInput" />
      <div v-if="show===1">
        <history-search :historySearch="popup"
                        @tagEvent='tagEvent'></history-search>
        <hot-search :hotSearch="popup"
                    @tagEvent='tagEvent'></hot-search>
      </div>
      <div v-else-if="show===2">
        <SearchList :searchList='searchList'
                    @listEvent='listEvent'></SearchList>
      </div>
      <div v-else-if="show===3">
        <search :list="list"
                :category="category"
                @priceSort="priceSort"
                @categorySort="categorySort"></search>
      </div>

    </div>
  </keep-alive>
</template>

<script>
import HistorySearch from '@/views/home/popups/components/HistorySearch'
import HotSearch from '@/views/home/popups/components/HotSearch'
import Search from '@/views/home/popups/components/Search'
import SearchList from '@/views/home/popups/components/SearchList'
export default {
  name: 'Popups',
  components: {
    HistorySearch,
    HotSearch,
    Search,
    SearchList
  },
  data () {
    return {
      searchValue: '',
      popup: {},
      list: [],
      category: [],
      categoryType: '',
      searchList: [],
      sort: 'id',
      show: 1
    }
  },
  mounted () {
    this.$API.popupData().then(res => {
      this.popup = res.data
    })
    this.$API.filterData().then(res => {
      const price = JSON.parse(JSON.stringify(res.data.price).replace(/name/g, 'text').replace(/id/g, 'value'))
      const category = JSON.parse(JSON.stringify(res.data.category).replace(/name/g, 'text').replace(/id/g, 'value'))
      this.category = { price, category }
    })
  },
  methods: {
    onSearch () {
      this.$API.searchData({
        keyword: this.searchValue,
        sort: this.sort,
        categoryType: this.categoryType
      }).then(res => {
        this.list = res.data.list
        this.show = 3
      })
    },
    onInput (val) {
      this.searchList = ['手机', '配件', '智能', '电视', '其他']
      this.show = 2
    },
    onCancel () {
      this.$router.go(-1)
    },
    priceSort (val) {
      this.sort = val
      this.onSearch()
    },
    categorySort (val) {
      this.categoryType = val
      this.onSearch()
    },
    tagEvent (item) {
      this.searchValue = item
      this.onSearch()
    },
    listEvent (item) {
      this.searchValue = item
      this.onSearch()
    }
  }
}
</script>
<style lang='less' scoped>
.popups {
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
