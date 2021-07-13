<template>
  <div class="search">
    <van-dropdown-menu>
      <van-dropdown-item title="综合"
                         disabled />
      <van-dropdown-item v-model="value1"
                         :options="category.price"
                         title="价格"
                         overlay="false"
                         @change="priceSort" />
      <van-dropdown-item v-model="
                         value2"
                         :options="category.category"
                         overlay=false
                         @change="categorySort" />
    </van-dropdown-menu>
    <div class="product"
         v-if="show===1">
      <ul>
        <li v-for="item in list"
            :key="item.id"
            @click="goProduct(item.id)">
          <img :src="item.img">
          <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="describe van-ellipsis">{{item.describe}}</div>
            <div class="price">{{item.price | price}}</div>
            <div class="buy">立即购买</div>
          </div>
        </li>
      </ul>
    </div>
    <van-empty image="search"
               v-if="show===2"
               description="您搜索的内容不存在" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      show: 1,
      value0: 0,
      value1: 0,
      value2: 2
    }
  },
  inject: ['app'],
  mounted () {
    console.log(this.app.name)
  },
  props: ['list', 'category'],
  methods: {
    priceSort (val) {
      this.$emit('priceSort', val)
    },
    categorySort (val) {
      this.$emit('categorySort', val)
    },
    goProduct (id) {
      this.$router.push({
        path: '/product',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 7px 7px 0 7px;
  justify-content: space-between;
  background-color: #efefef;
}
li {
  width: 49%;
  margin-bottom: 7px;
  background-color: #fff;
  img {
    width: 100%;
  }
  .content {
    font-size: 14px;
    text-align: center;
    padding-bottom: 15px;
    .name {
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 5px;
    }
    .describe {
      padding: 0px 10px 5px 15px;
      font-size: 12px;
    }
    .price {
      padding-bottom: 5px;
      color: red;
    }
    .buy {
      background-color: red;
      width: 60%;
      height: 30px;
      margin-left: 20%;
      line-height: 30px;
      color: white;
    }
  }
}
</style>
