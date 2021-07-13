<template>
  <div class="topic">
    <Swiper :banners="banners"></Swiper>
    <img :src="recommend"
         style="width:100%">
    <img :src="popularGoodsTitle"
         style="width:100%">
    <div class="goods-container">
      <div class="popular-goods"
           v-for="(item,index) in popularGoods"
           :key="index">
        <div class="item-img">
          <img :src="item.img"
               class="img">
        </div>
        <div class="item-info">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="time">{{item.time}}</div>
          <div class="price">{{item.price | price}}</div>
          <div class="product-detail">去查看</div>
        </div>

      </div>
    </div>
    <div class="bottom">
      <div class="content">到底了</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'

export default {
  name: 'Topic',
  data () {
    return {
      banners: [],
      recommend: '',
      popularGoodsTitle: '',
      popularGoods: []
    }
  },
  created () {
    this.$API.topicData().then(res => {
      const { banners, recommend, popularGoods, popularGoodsTitle } = res.data
      this.banners = banners
      this.recommend = recommend
      this.popularGoodsTitle = popularGoodsTitle
      this.popularGoods = popularGoods
    })
  },
  components: {
    Swiper
  },
  filters: {
    price (val) {
      return `￥${val}`
    }
  }
}
</script>
<style lang='less' scoped>
.topic {
  padding-bottom: 60px;
  background-color: #f2f2f2;
}
.popular-goods {
  background-color: #fff;
  margin: 0 15px 15px 15px;
  padding-top: 20px;
  display: flex;
  height: 150px;
  .item-info {
    flex: 3;
    .title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 3px;
    }
    .desc {
      font-size: 12px;
      margin-bottom: 30px;
    }
    .time {
      border: 1px solid #e19f3e;
      border-radius: 5px;
      color: #e19f3e;
      width: 66px;
      text-align: center;
      font-size: 12px;
      margin-bottom: 15px;
    }
    .price {
      color: #ff5934;
      font-size: 18px;
    }
    .product-detail {
      font-size: 16px;
      position: relative;
      bottom: 24px;
      left: 120px;
      text-align: center;
      border-radius: 10px;
      border: 1px solid #ff5934;
      width: 60px;
      color: #ff5934;
    }
  }
  .item-img {
    flex: 2;
  }
}
.img {
  width: 95px;
}
.content {
  text-align: center;
}
.bottom {
  position: relative;
  height: 50px;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 16px;
  width: 80px;
  transform: translate(-50%, -50%);
  z-index: 10000000;
  background-color: #f2f2f2;
}
.line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 1px;
  background-color: black;
  text-align: center;
  z-index: 0;
}
</style>
