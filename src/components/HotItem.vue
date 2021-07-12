<template>
  <div class="hot">
    <img style="width:100%"
         :src="itemData.img">
    <div v-if="itemData.list"
         class="hot-phone-item">
      <div class="hot-item"
           v-for="(item,index) in itemData.list"
           :key="index">
        <img :src="item.img">
        <div class="info">{{item.info}}</div>
        <div class="price">{{item.price | price}}
        </div>
        <van-button type="danger">立即购买</van-button>
      </div>
    </div>
    <LearnMore :message="itemData.info"
               :isShow="isShow"></LearnMore>
  </div>
</template>

<script>
import LearnMore from '@/components/LearnMore'
export default {
  name: 'HotItem',
  props: {
    itemData: Object,
    isShow: {
      type: Boolean,
      default: true
    }
  },
  components: {
    LearnMore
  }
}

</script>
<style lang='less' scoped>
.hot {
  padding-bottom: 5px;
}
.hot-phone-item {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 14px;
  text-align: center;
  background-color: #fff;
  .hot-item {
    padding-bottom: 10px;
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
