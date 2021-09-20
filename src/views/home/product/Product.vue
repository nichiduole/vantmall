<template>
  <div class="product">
    <Swiper :banners="productDescribe.swiper"
            class="swiper">
    </Swiper>
    <ProductTop :productDescribe="productDescribe"></ProductTop>
    <div class="border"></div>
    <ProductImage :productDescribe="productDescribe"></ProductImage>
    <ProductBottom :productDescribe="productDescribe"></ProductBottom>
    <van-sku v-model="show"
             :sku="sku"
             :goods="goods"
             :quota="quota"
             ref="info"
             :hide-stock="sku.hide_stock"
             @buy-clicked="onBuyClicked"
             @add-cart="onAddCartClicked" />
    <ProductGoodsAction @changeShow="changeShow"
                        :badge="badge"></ProductGoodsAction>
  </div>
</template>

<script>
// 轮播图组件
import Swiper from '@/components/Swiper.vue'
// 顶部组件
import ProductTop from '@/views/home/product/components/ProductTop.vue'
// 产品详情组件
import ProductImage from '@/views/home/product/components/ProductImage.vue'
// 底部组件
import ProductBottom from '@/views/home/product/components/ProductBottom.vue'
// sku组件
import ProductGoodsAction from '@/views/home/product/components/ProductGoodsAction.vue'
export default {
  name: 'Product',
  data () {
    return {
      badge: 0,
      productDescribe: {},
      show: false,
      sku: {
        tree: [
          {
            k: '颜色',
            k_s: 's1',
            v: [{
              id: '11',
              name: '陶瓷黑',
              imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png'
            },
            {
              id: '12',
              name: '陶瓷白',
              imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png'
            }]
          },
          {
            k: '版本',
            k_s: 's2',
            v: [{
              id: '21',
              name: '8GB+256GB'

            },
            {
              id: '22',
              name: '12GB+256GB'

            },
            {
              id: '23',
              name: '12GB+512GB'

            }]
          },
          {
            k: '套餐',
            k_s: 's3',
            v: [{
              id: '31',
              name: '环保版'

            },
            {
              id: '32',
              name: '标准版'

            },
            {
              id: '33',
              name: '套装版'

            }]
          }
        ],
        list: [
          {
            id: 112131,
            s1: '11',
            s2: '21',
            s3: '31',
            price: 599900,
            stock_num: 100
          },
          {
            id: 112132,
            s1: '11',
            s2: '21',
            s3: '32',
            price: 599900,
            stock_num: 100
          },
          {
            id: 112133,
            s1: '11',
            s2: '21',
            s3: '33',
            price: 619800,
            stock_num: 100
          },
          {
            id: 112231,
            s1: '11',
            s2: '22',
            s3: '31',
            price: 649900,
            stock_num: 100
          },
          {
            id: 112232,
            s1: '11',
            s2: '22',
            s3: '32',
            price: 649900,
            stock_num: 100
          },
          {
            id: 112233,
            s1: '11',
            s2: '22',
            s3: '33',
            price: 669700,
            stock_num: 100
          }, {
            id: 112331,
            s1: '11',
            s2: '23',
            s3: '31',
            price: 699900,
            stock_num: 100
          },
          {
            id: 112332,
            s1: '11',
            s2: '23',
            s3: '32',
            price: 699900,
            stock_num: 100
          }, {
            id: 112333,
            s1: '11',
            s2: '23',
            s3: '33',
            price: 719800,
            stock_num: 100
          },
          {
            id: 122131,
            s1: '12',
            s2: '21',
            s3: '31',
            price: 599900,
            stock_num: 100
          },
          {
            id: 122132,
            s1: '12',
            s2: '21',
            s3: '32',
            price: 599900,
            stock_num: 100
          },
          {
            id: 122133,
            s1: '12',
            s2: '21',
            s3: '33',
            price: 619800,
            stock_num: 100
          },
          {
            id: 122231,
            s1: '12',
            s2: '22',
            s3: '31',
            price: 649900,
            stock_num: 100
          },
          {
            id: 122232,
            s1: '12',
            s2: '22',
            s3: '32',
            price: 649900,
            stock_num: 100
          },
          {
            id: 122233,
            s1: '12',
            s2: '22',
            s3: '33',
            price: 669800,
            stock_num: 100
          }, {
            id: 122331,
            s1: '12',
            s2: '23',
            s3: '31',
            price: 699900,
            stock_num: 100
          },
          {
            id: 122332,
            s1: '12',
            s2: '23',
            s3: '32',
            price: 699900,
            stock_num: 100
          },
          {
            id: 122333,
            s1: '12',
            s2: '23',
            s3: '33',
            price: 719800,
            stock_num: 100
          }
        ],
        hide_stock: false,
        stock_num: 1800,
        price: 5999
      },
      goods: {
        picture: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png'
      },
      quota: 10
    }
  },
  components: {
    Swiper,
    ProductTop,
    ProductBottom,
    ProductImage,
    ProductGoodsAction
  },
  created () {
    this.$API.productDetail('/product').then(res => {
      this.productDescribe = res.data
    })
  },
  methods: {
    changeShow () {
      const token = localStorage.getItem('vantmallToken')
      if (token) {
        this.show = true
      } else {
        this.$toast('请先登录')
        setTimeout(() => {
          this.$router.replace('/profile')
        }, 1000)
      }
    },
    onBuyClicked () {
      const token = localStorage.getItem('vantmallToken')
      if (token) {
        this.$toast('此功能尚未开放')
      }
    },
    onAddCartClicked () {
      const token = localStorage.getItem('vantmallToken')
      if (token) {
        console.log(this.$refs.info.getSkuData())
        this.badge += this.$refs.info.getSkuData().selectedNum
        this.$toast.success('加入购物车成功')
        setTimeout(() => {
          this.show = false
        }, 1000)
      } else {
        this.$toast('请先登录')
        setTimeout(() => {
          this.$router.replace('/profile')
        }, 1000)
      }
    }
  }
}

</script>
<style lang='less' scoped>
.swiper {
  width: 100vw;
  position: relative;
}
.border {
  width: 100vw;
  height: 1px;
  background-color: rgb(238, 237, 237);
  margin-top: 20px;
}
</style>
