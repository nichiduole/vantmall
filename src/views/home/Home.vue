<template>
  <div class="home"
       v-if="sourceData">
    <div class="search">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"
           class="logo">
      <van-search v-model="searchValue"
                  shape="round"
                  background="#fff"
                  disabled
                  @click="$router.push('/popups')"
                  placeholder="请输入搜索关键词" />
    </div>
    <Swiper :banners="homeBanners"></Swiper>
    <NavBar :navBar="navBar"></NavBar>
    <Recommend></Recommend>
    <HotItem :itemData="phoneData"></HotItem>
    <HotItem :itemData="TVData"
             :isShow=false></HotItem>
    <HotItem :itemData="laptopData"
             :isShow=false></HotItem>
    <HotItem :itemData="AIData"
             :isShow=false></HotItem>
    <transition name="van-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import NavBar from '@/views/home/components/NavBar'
import Recommend from '@/views/home/components/Recommend'
import HotItem from '@/components/HotItem'
export default {
  name: 'Home',
  components: {
    Swiper,
    NavBar,
    Recommend,
    HotItem
  },
  data () {
    return {
      sourceData: {},
      searchValue: '',
      homeBanners: [],
      navBar: [],
      phoneData: {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b2fff7f7b8de6d371601caf3a827eed.jpg',
        list: [],
        info: '更多小米手机产品'
      },
      TVData: {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46763407ec689716610a7342b920bb1a.jpg',
        list: [],
        info: '更多小米电视产品'
      },
      laptopData: {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/393a90da633889384d35acb7c44eeb17.jpg',
        list: [],
        info: '更多小米笔记本产品'
      },
      AIData: {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5070349d6511ec431810d7528de020aa.jpg',
        list: [],
        info: '更多米家家电产品'
      }
    }
  },
  mounted () {
    this.$API.homeData().then(res => {
      this.sourceData = res.data
      this.homeBanners = res.data.banners
      this.navBar = res.data.navBar
      this.phoneData.list = res.data.hotPhone
      this.laptopData.list = res.data.hotLaptop
    })
  }
}
</script>

<style lang="less" scoped>
@search-input-width: 90%;
.home {
  position: relative;
  margin-bottom: 60px;
  background-color: #f5f5f5;
}
.search {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.van-search {
  width: @search-input-width;
}
.logo {
  width: 25px;
  height: 18px;
  vertical-align: middle;
  margin-top: 18px;
  margin-left: 10px;
}
</style>
