<template>
  <div class="hot-phone">
    <img style="width:100%"
         src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b2fff7f7b8de6d371601caf3a827eed.jpg">
    <div class="hot-item"
         v-for="(item,index) in hotPhone"
         :key="index">
      <img :src="item.img">
      <div class="info">{{item.info}}</div>
      <div class="price">{{item.price | priceFormat}}
      </div>
      <van-button type="danger">立即购买</van-button>
    </div>
    <LearnMore :message="message"></LearnMore>
  </div>
</template>

<script>
import LearnMore from '@/components/LearnMore'
export default {
  name: 'HotSalePhone',
  props: {
    hotPhone: Array,
    message: String
  },
  filters: {
    priceFormat (val) {
      return '￥' + val
    }
  },
  components: {
    LearnMore
  }
}

</script>
<style lang='less' scoped>
.hot-phone {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 14px;
  text-align: center;
  // background-color: #cecece;
  .hot-item {
    margin-bottom: 10px;
    width: 49%;
    img {
      width: 100%;
    }

    .price {
      color: red;
      margin: 5px 0 5px 0;
    }
  }
}
.van-button {
  display: block;
  height: 28px;
  width: 100px;
  position: relative;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
