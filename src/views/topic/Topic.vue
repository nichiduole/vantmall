<template>
  <div>

    <table>
      <tr style="font-weight:600">
        <td style="width:15%">编号</td>
        <td style="width:15%">名称</td>
        <td style="width:30%">时间</td>
        <td style="width:40%">操作</td>
      </tr>
      <tbody>
        <tr v-for="(item,index) in list"
            :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.time}}</td>
          <td>
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      list: [
        {
          id: 1,
          name: '西游',
          time: '2018'
        }, {
          id: 2,
          name: '三国',
          time: '2019'
        }, {
          id: 3,
          name: '水浒',
          time: '2020'
        }, {
          id: 4,
          name: '红楼',
          time: '2021'
        }
      ]
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style lang='less' scoped>
td {
  font-size: 20px;
  text-align: center;
}
</style>
