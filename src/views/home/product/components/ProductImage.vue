<template>
  <div>
    <div class="title">
      <span class="words">商品详情</span>
      <span class="line"></span>
    </div>
    <div class="img-info"
         v-for="(item,index) in productDescribe.imgSrc"
         :key="index">

      <img :src="item"
           class="product-img">
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    productDescribe: {
      type: Object,
      require: true
    }
  }
}

</script>
<style lang='less' scoped>
.product-img {
  width: 100%;
}
.title {
  position: relative;
  height: 50px;
  margin-top: 20px;
}
.words {
  display: inline-block;
  background-color: #fff;
  position: absolute;
  font-size: 18px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  height: 20px;
  width: 150px;
  text-align: center;
}
.line {
  width: 300px;
  height: 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(202, 202, 202);
  display: inline-block;
}
</style>
