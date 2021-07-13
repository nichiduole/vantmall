<template>
  <div @click="$router.push('/product')">
    <van-search v-model="value"
                placeholder="请输入搜索关键词"
                @click="$router.push('/popups')" />
    <div class="category-content">
      <div class="left">
        <van-sticky :offset-top="54">
          <van-list>
            <van-cell v-for="item in left"
                      :key="item.id"
                      :title="item.title"
                      class="list-cell" />
          </van-list>
        </van-sticky>

      </div>
      <div class="right">
        <img :src="right.topImg"
             class="top-img">
        <div class="second-title">
          <span>小米数字系列</span>
          <span>小米MIX系列</span>
          <span>小米手机配件</span>
        </div>
        <van-divider />
        <div class="right-list">
          <div class="number-string">
            <div class="number-title">
              小米数字系列
            </div>
            <div class="number-goods"
                 v-for="item in right.numberString.goods"
                 :key="item.id">
              <van-card :price="item.price"
                        :title="item.goodsName"
                        :thumb="item.img" />
            </div>
          </div>
          <van-divider />
          <div class="number-string">
            <div class="number-title">
              小米mix系列
            </div>
            <div class="number-goods"
                 v-for="item in right.mixString.goods"
                 :key="item.id">
              <van-card :price="item.price"
                        :title="item.goodsName"
                        :thumb="item.img" />
            </div>
          </div>
          <van-divider />
          <div class="number-string">
            <div class="number-title">
              小米mix系列
            </div>
            <van-grid :column-num="3"
                      border="false">
              <van-grid-item v-for="item in right.phoneParts"
                             :key="item.id"
                             :icon="item.img"
                             border="false"
                             :text="item.goodsName" />
            </van-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      value: '',
      left: [],
      right: {}
    }
  },
  created () {
    this.$API.categoryData().then(res => {
      this.left = res.data.categoryData.left
      this.right = res.data.categoryData.right
    })
  },
  components: {
  },
  methods: {
    onLoad () {
    }
  }
}
</script>
<style lang='less' scoped>
.category-content {
  display: flex;
  margin-bottom: 50px;
  .left {
    width: 90px;
    margin-top: 52px;
  }
  .right {
    width: 280px;
    margin-top: 54px;
  }
}
.van-search {
  background-color: #fff;
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  right: 0;
}
.van-list {
  width: 90px;
  font-size: 12px;
}
.list-cell {
  // background-color: red;
  height: 50px;
}
/deep/.van-search {
  // background-color: red;
  text-align: center;
}
.right {
  // background-color: #f3f3f3;
  margin-right: 10px;
  .top-img {
    width: 100%;
  }
  .second-title {
    font-size: 12px;
    margin: 10px 0;
    span {
      margin: 10px;
    }
  }
}
.right-list {
  padding: 0 10px;
}
.number-title {
  font-size: 16px;
  font-weight: 600;
}
.van-card {
  margin-top: 10px;
  border-radius: 5px;
  height: 100px;
  background-color: #f8f8f8;
}
</style>
