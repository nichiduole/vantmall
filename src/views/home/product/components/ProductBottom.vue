<template>
  <div class="bottom">

    <div class="others">
      <div class="others-title">
        <span class="words">猜你喜欢</span>
        <span class="line"></span>
      </div>
      <div class="others-goods">
        <div class="others-goods-item"
             v-for="(item,index) in productDescribe.others"
             :key="index">
          <img :src="item.imgSrc">
          <div style="margin-bottom:5px">{{item.info}}</div>
          <div style="color:red">{{item.price}}</div>
        </div>
      </div>
      <div class="nothing">
        没有更多商品了……
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProductBottom',
  props: {
    productDescribe: {
      type: Object,
      require: true
    }
  }
}

</script>
<style lang='less' scoped>
.others-title {
  position: relative;
  margin: 30px 0 10px 0;
  height: 50px;
  text-align: center;
}
.words {
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #fff;
  font-size: 20px;
  padding: 0 30px;
}
.line {
  display: inline-block;
  width: 300px;
  height: 4px;
  background-color: rgb(202, 202, 202);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
.others-goods {
  display: flex;
  padding-top: 7px;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  background-color: rgb(231, 230, 230);
  .others-goods-item {
    width: 48%;
    margin-bottom: 7px;
    padding-bottom: 2px;
    background-color: #fff;
    font-size: 14px;
    img {
      width: 100%;
    }
  }
}
.nothing {
  text-align: center;
  font-size: 18px;
  color: rgb(122, 122, 122);
  height: 80px;
  line-height: 80px;
  margin-bottom: 50px;
}
</style>
