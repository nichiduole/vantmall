<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon :icon="isClick? 'star':'star-o'"
                             :text="isClick? '已收藏':'未收藏'"
                             color="#ff5000"
                             @click="isClick = !isClick" />
      <van-goods-action-icon icon="cart-o"
                             text="购物车"
                             :badge="badge"
                             @click="$router.push('/cart')" />
      <van-goods-action-button type="warning"
                               text="加入购物车"
                               @click="changeShow" />
      <van-goods-action-button type="danger"
                               text="立即购买"
                               @click="changeShow" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'ProductGoodsAction',
  props: {
    badge: Number
  },
  data () {
    return {
      isClick: false
    }
  },
  methods: {
    changeShow () {
      this.$emit('changeShow')
    }
  }
}

</script>
<style lang='less' scoped>
div {
  z-index: 100;
}
</style>
