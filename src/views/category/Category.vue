<template>
  <div>
    <button v-for="(tab,index) in tabs"
            :key="index"
            @click="currentTab = tab"
            :class="{active:isActive(tab)}">
      {{tab}}
    </button>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import TC1 from './tc/TC1.vue'
import TC2 from './tc/TC2.vue'
import TC3 from './tc/TC3.vue'
export default {
  name: '',
  data () {
    return {
      currentTab: 'TC1',
      tabs: ['TC1', 'TC2', 'TC3']
    }
  },
  components: {
    TC1,
    TC2,
    TC3
  },
  methods: {
    isActive (tab) {
      return this.currentTab === tab ? 1 : 0
    }
  }
}

</script>
<style lang='less' scoped>
.active {
  color: white;
  background-color: black;
}
</style>
