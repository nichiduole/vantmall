<template>
  <div>
    <div class="top">
      <van-row gutter="20"
               @click="close_hide">
        <van-col span="6">
          <img :src="avatar">
        </van-col>
        <van-col span="10">
          <span>{{isLogin? username : '点击登录'}}</span>
        </van-col>
        <van-col span="8">
          <i>></i>
        </van-col>
      </van-row>
      <div class="hidden"
           :class="{show:isShow}">
        <div class="hide"
             @click="open_hide"></div>
        <div class="login_form">
          <van-form @submit="onSubmit">
            <van-field v-model="username"
                       name="用户名"
                       label="用户名"
                       placeholder="用户名"
                       :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password"
                       type="password"
                       name="密码"
                       label="密码"
                       placeholder="密码"
                       :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
              <van-button round
                          block
                          type="info"
                          native-type="submit">提交</van-button>
            </div>
          </van-form>
        </div>
      </div>

    </div>
    <div class="grid">
      <van-grid :column-num="3"
                square>
        <van-grid-item icon="orders-o"
                       text="我的订单"
                       @click="iconClick" />
        <van-grid-item icon="coupon-o"
                       text="优惠券"
                       @click="iconClick" />
        <van-grid-item icon="gift-card-o"
                       text="礼品卡"
                       @click="iconClick" />
        <van-grid-item icon="goods-collect-o"
                       text="我的收藏"
                       @click="iconClick" />
        <van-grid-item icon="browsing-history-o"
                       text="我的足迹"
                       @click="iconClick" />
        <van-grid-item icon="gift-o"
                       text="会员福利"
                       @click="iconClick" />
        <van-grid-item icon="wap-home-o"
                       text="地址管理"
                       @click="iconClick" />
        <van-grid-item icon="warn-o"
                       text="账号安全"
                       @click="iconClick" />
        <van-grid-item icon="service-o"
                       text="联系客服"
                       @click="iconClick" />
        <van-grid-item icon="question-o"
                       text="帮助中心"
                       @click="iconClick" />
        <van-grid-item icon="envelop-o"
                       text="意见反馈"
                       @click="iconClick" />
        <van-grid-item icon="replay"
                       text="退出"
                       @click="quit" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      avatar: require('@/assets/images/default_avatar.jpg'),
      username: 'hkn',
      password: '123456',
      isShow: true,
      isLogin: false
    }
  },
  mounted () {
    if (localStorage.getItem('token')) {
      this.username = localStorage.getItem('username')
      this.avatar = require('@/assets/images/avatar.jpg')
    }
  },
  methods: {
    close_hide () {
      if (localStorage.getItem('token')) {
        this.$toast('您已经登录')
      } else {
        this.isShow = false
      }
    },
    open_hide () {
      this.isShow = true
    },
    iconClick () {
      this.$toast('该功能尚未开放')
    },
    quit () {
      const token = localStorage.getItem('vantmallToken')
      if (token) {
        this.$dialog.confirm({
          title: '提示',
          message: '是否退出账号？'
        })
          .then(() => {
            localStorage.removeItem('vantmallToken')
            localStorage.removeItem('username')
            this.$router.go(0)
            this.$toast('退出成功')
          })
          .catch(() => {
          })
      } else {
        this.$toast('你还没有登录，无需退出')
      }
    },
    onSubmit (values) {
      if (this.username === 'hkn' && this.password === '123456') {
        this.$toast({
          message: '登录成功',
          position: 'top'
        })
        this.avatar = require('@/assets/images/avatar.jpg')
        localStorage.setItem('vantmallToken', 'iamvantmalltoken')
        localStorage.setItem('username', this.username)
        setTimeout(() => {
          this.isShow = true
          this.isLogin = true
        }, 1000)
      } else {
        this.$toast('用户名或密码错误，请重试')
      }
    }
  }
}

</script>
<style lang='less' scoped>
.van-row {
  position: relative;
  height: 150px;
  background-color: #000;
  color: white;
}
img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 45px;
}
span {
  font-size: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
i {
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 24px;
  transform: translateY(-50%);
}
.hide {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
}
.show {
  display: none;
}
.login_form {
  width: 90%;
  border-radius: 5px;
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 165px;
}
</style>
