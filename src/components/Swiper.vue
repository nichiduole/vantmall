<template>
  <div>
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
      <van-swipe-item v-for="(banner,index) in banners"
                      :key="index"
                      @click="test($event,2)">
        <img :src="banner"
             style="width:100%">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: ['banners'],
  data () {
    return {
    }
  },

  methods: {
    test (a, b) {
      console.log(a)
      console.log(b)
    }
  }
}

</script>
<style lang='less' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>
