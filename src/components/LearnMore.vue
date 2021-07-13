<template>
  <div class="learn-more">
    <div class="hr"
         v-if="isShow"></div>
    <div class="more">
      {{message}}
      <van-icon name="arrow"
                style="vertical-align:-2px" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearnMore',
  props: {
    message: String,
    isShow: {
      type: Boolean,
      default: true
    }
  }
}

</script>
<style lang='less' scoped>
.learn-more {
  margin-bottom: 8px;
  background-color: #fff;
  text-align: center;
}
.hr {
  // margin-top: 10px;
  width: 100vw;
  height: 1px;
  background-color: #cecece;
}
.more {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
