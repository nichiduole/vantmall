<template>
  <div class="describe">
    <div class="price">
      <span class="price-number">￥5999</span>
      <span class="price-info">享24期免息</span>
    </div>
    <div class="tag">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84d5f1a65f4223e8fe1b076e93876441.png">
      来这里，发现属于你的新品
    </div>
    <div class="detail">
      小米11 Ultra
      <div class="title">
        「开门红！以旧换新享1000元定向补贴，买赠真无线耳机；+1元得小米定制T恤（15个工作日内发放1元包邮购买资格）」
      </div>
      <ul class="feature van-hairline--bottom">
        <li v-for="(item,index) in productDescribe.feature"
            :key="index"
            class="feature-item">{{item}}</li>
      </ul>
      <ul class="icons">
        <li class="icons-item"
            v-for="(items,index) in productDescribe.detail"
            :key="index">
          <img :src="items.icon">
          <div class="icons-item-title">{{items.title}}</div>
          <div class="icons-item-info">{{items.info}}</div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProductTop',
  props: {
    productDescribe: {
      type: Object,
      require: true
    }
  }
}

</script>
<style lang='less' scoped>
.describe {
  margin: 0 10px 0 10px;
  .price {
    padding-bottom: 0;
    position: relative;
    height: 50px;

    .price-number {
      font-size: 28px;
      color: #ff6700;
      position: absolute;
      bottom: 11px;
      left: 0px;
    }
    .price-info {
      font-size: 12px;
      color: #ff5934;
      display: inline-block;
      text-align: center;
      line-height: 16px;
      height: 16px;
      width: 70px;
      background-color: #fff2ef;
      position: absolute;
      left: 125px;
      bottom: 17px;
    }
  }
  .tag {
    font-size: 12px;
    margin-bottom: 10px;
    img {
      height: 24px;
      vertical-align: middle;
      margin-right: 8px;
    }
  }
  .detail {
    font-size: 18px;
    .title {
      font-size: 12px;
      margin-top: 15px;
    }
    .feature {
      margin-top: 10px;
      padding-bottom: 10px;
      // border-bottom: 1px solid rgb(230, 230, 230);
      .feature-item {
        font-size: 12px;
      }
    }
    .icons {
      display: flex;
      margin-top: 10px;
      flex-wrap: nowrap;
      justify-content: space-around;
      .icons-item {
        width: 20%;
        font-size: 12px;
        text-align: center;
        img {
          width: 20px;
        }
      }
    }
    .icons-item-title,
    .icons-item-info {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
