<template>
  <div>
    <van-tabbar v-model="active">
      <!-- <van-icon class-prefix="iconfont"
                name="icon-gouwuchefill" /> -->
      <van-tabbar-item icon="home-o"
                       to='/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="label-o"
                       to='/topic'>专题</van-tabbar-item>
      <van-tabbar-item icon="apps-o"
                       to='/category'>分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o"
                       to='/cart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="contact"
                       to='/profile'>我的</van-tabbar-item>
      <!-- <van-tabbar-item to="/mytest">
        <span>自定义</span>
        <template #icon="props">
          <i :class="props.active? `iconfont icon-shouyefill`:`iconfont icon-shouye`"></i>
        </template>
      </van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
    }
  },

  components: {},

  computed: {
    active: {
      get () {
        let tempActive
        switch (this.$route.path) {
          case '/home':
            tempActive = 0
            break
          case '/topic':
            tempActive = 1
            break
          case '/category':
            tempActive = 2
            break
          case '/cart':
            tempActive = 3
            break
          case '/profile':
            tempActive = 4
            break
        }
        return tempActive
      },
      set () { }
    }
  },
  methods: {}
}

</script>
<style lang='less' scoped>
.icon-shouye,
.icon-shouyefill {
  font-size: 20px;
}
</style>
