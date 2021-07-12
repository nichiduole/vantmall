<template>
  <div class="cart">
    <div class="top">
      <div class="title">购物车</div>
      <div class="edit"
           @click="isEdit=!isEdit">{{isEdit? '取消':'编辑'}}</div>
    </div>
    <van-checkbox-group v-model="result">
      <van-checkbox v-for="item in cartList"
                    :key="item.id"
                    class="cart-item"
                    :name="item.id"
                    @click="changeChecked(item)">
        <van-swipe-cell>
          <van-card :price="item.price.toFixed(2)"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.thumb"
                    @click.stop="goodsDetail(item)"
                    class="van-ellipsis"
                    origin-price="9999" />
          <div @click.stop="">
            <van-stepper class="stepper"
                         input-width="30px"
                         button-size="20px"
                         v-model="item.number"
                         @change="changeNumber(item)" />
          </div>
          <template #right>
            <van-button square
                        text="删除"
                        type="danger"
                        class="delete-button"
                        @click="deleteItem(item)" />
          </template>
        </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar :price="totalPrice()*100"
                    :button-text="isEdit? '删除':'提交订单'"
                    @submit="onSubmit"
                    class="submit">
      <van-checkbox v-model="allChecked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  components: {

  },
  data () {
    return {
      result: [],
      cartList: [],
      isShow: false,
      isEdit: false
    }
  },
  created () {
    this.$API.cartData()
      .then((res) => {
        // if (res.errno === 1) {
        this.commonMethod(res.data)
        // }
        // this.cartList = res.data.cartData
      })
  },
  computed: {
    // 全选和取消全选
    allChecked: {
      get () {
        return this.result.length === this.cartList.length
      },
      set (newVal) {
        if (this.isEdit) {
          return ''
        } else {
          this.$API.logicData({
            isChecked: newVal ? 1 : 0,
            // 调用collectChecked方法收集所有选中项的id，并通过toString方法转换成字符串传递给后台
            id: this.collectChecked().toString()
          }).then(res => {
            // if (res.errno === 1) {
            //   this.commonMethod(res.data)
            // }
            this.$toast('全选/取消全选成功')
          })
        }
      }
    }
  },
  methods: {
    // 抽离出来的公共方法，每次点击等操作之后会重新请求数据，请求数据之后会调用这个方法重新给data中的数据赋值
    commonMethod (resData) {
      this.cartList = resData.cartData
      // this.cartTotal = resData.cartTotal
      this.cartList.forEach(item => {
        if (item.checked) {
          this.result.push(item.id)
        }
      })
    },
    // 将所有选中的商品id添加到一个数组中，并将这个数组返回
    collectChecked () {
      const arr = []
      this.cartList.forEach(item => {
        if (item.checked === 1) {
          arr.push(item.id)
        }
      })
      return arr
    },
    // 复选框（选中/取消）点击事件（event对象是最后一个参数）
    changeChecked (item) {
      if (this.isEdit) {
        return ''
      } else {
        this.$API.logicData({
          params: {
            isChecked: item.checked ? 0 : 1,
            id: item.id
          }
        }).then(res => {
          // if (res.errno === 1) {
          //   this.commonMethod(res.data)
          // }
          this.$toast(res.data.changeCheckedData)
        })
      }
    },
    goodsDetail (item) {
      // this.$router.push('/product')
      if (this.isEdit) {
        return ''
      } else {
        console.log(`我是${item.id}号商品`)
      }
    },
    // 删除商品点击事件
    deleteItem (item) {
      this.$API.logicData({
        id: item.id
      }
      ).then(res => {
        // 真实接口需要调用公共方法（此处为commonMethod）重新渲染购物车页面
        // if (res.errno === 1) {
        //   this.commonMethod(res.data)
        // }
        this.$toast(res.data.deleteItemData)
      })
    },
    // 步进器数值发生改变的change事件
    changeNumber (item) {
      console.log(item.number)
      // this.$API.logicData({
      //   number: item.number,
      //   id: item.id
      // }).then(res => {
      // if (res.errno === 1) {
      //   this.commonMethod(res.data)
      // }
      // })
    },
    // 提交订单的点击事件
    onSubmit () {
      if (this.isEdit) {
        this.$API.deleteCheckedItem({
          id: this.collectChecked().toString()
        })
      } else {
        this.$toast('已提交（所有选中）')
      }
    },
    totalPrice () {
      return 46994
    }
  }
}
</script>
<style lang='less' scoped>
.title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.cart {
  margin: 10px 0 10px 5px;
}
.submit {
  margin-bottom: 50px;
}
.top {
  position: relative;
}
.edit {
  font-size: 14px;
  position: absolute;
  top: 5px;
  right: 20px;
}
.delete-button {
  height: 100%;
}
.stepper {
  position: relative;
  top: -20px;
  left: 225px;
}
.cart-item {
  margin-bottom: 20px;
  padding: 5px;
  display: flex;
  .van-card {
    width: 90vw;
    padding: 0;
  }
}

.delete-button {
  height: 100%;
}
</style>
