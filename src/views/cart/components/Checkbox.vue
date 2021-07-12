<template>
  <div class="cart">
    <van-checkbox-group v-model="result">
      <van-checkbox v-for="item in cartList"
                    :key="item.id"
                    class="cart-item"
                    :name="item.id"
                    @change="changeChecked(item,$event)"
                    label-disabled>
        <van-swipe-cell>
          <van-card :price="item.price.toFixed(2)"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.thumb"
                    class="van-ellipsis"
                    origin-price="9999" />
          <van-stepper class="stepper"
                       input-width="30px"
                       button-size="20px"
                       v-model="item.number"
                       v-if="isEdit"
                       @change="changeNumber(item)" />
          <template #right>
            <van-button square
                        text="删除"
                        type="danger"
                        class="delete-button"
                        @change="deleteItem(item)" />
          </template>
        </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    cartList: {
      type: Array,
      require: true
    },
    isEdit: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
      result: []
    }
  },
  // created和mounted里不能获取props数据，如果需要，可通过watch进行操作
  watch: {
    cartList: {
      deep: true,
      handler (newVal) {
        newVal.forEach(el => {
          if (el.checked - 0 === 1) {
            this.result.push(el.id)
          }
        })
      }
    }
  },
  methods: {
    commonMethod () {
    },
    changeChecked (item, e) {
      if (e.target === e.currentTarget) {
        console.log(item)
      } else {
        console.log(1)
      }
      // this.$API.logicData({
      //   method: 'post',
      //   params: {
      //     isChecked: item.checked ? 0 : 1,
      //     id: item.id
      //   }
      // }).then(res => {

      // })
    },
    deleteItem (item) {
      this.$API.logicData({
        id: item.id
      }
      ).then(res => {
        // 真实接口需要调用公共方法（此处为commonMethod）重新渲染购物车页面
        this.$toast(res.data.deleteItemData)
      })
    },
    changeNumber (item) {
      console.log(item.number)
    }
  }

}

</script>
<style lang='less' scoped>
.delete-button {
  height: 100%;
}
.cart {
  margin-bottom: 100px;
}
.stepper {
  position: relative;
  top: -29px;
  left: 225px;
}
/deep/ .cart-item {
  margin-bottom: 20px;
  padding: 5px;
  display: flex;
  /deep/ .van-card {
    width: 88vw;
    padding: 0;
  }
}

.delete-button {
  height: 100%;
}
</style>
