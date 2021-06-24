<template>
  <div class="recommend">
    <div class="left">
      <img class="img"
           src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29b39579739d82269d18f0e7c8f6c9da.jpg">
    </div>
    <div class="right">
      <img class="img"
           src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a12873ff30a6da401d74728878625c37.jpg">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b9af94e5c05bb2b4849cbb113eddb9d.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}

</script>
<style lang='less' scoped>
.recommend {
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  flex: 1;
}
.right {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.img {
  margin-bottom: 2px;
}
img {
  width: 100%;
}
</style>
