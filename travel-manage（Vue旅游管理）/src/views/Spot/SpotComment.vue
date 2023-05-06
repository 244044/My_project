<template>
  <!-- <div class="spot-comment">
    spot-comment
  </div> -->
  <el-card header ="前8个热门景区游客访问人数">
    <div id="main">

    </div>
  </el-card>
</template>
<script>
import * as echarts from 'echarts'
import request from '@/api/index.js'

export default {
  name:'SpotComment',
  data(){
    return{
hotSpotList:[]
    }
  },
  created(){
   
  },
  // 生命周期--挂载节点
  mounted(){
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
 // 请求数据
    // () =>{}:箭头函数
    request.get('/spot/list').then(({data:res}) =>{
// console.log(res);
// sort（）：排序的方法
// 判断数据是否传递成功log
if(res.code ===200){
  this.hotSpotList = res.data.sort(function(a,b){
     return a.visitors-b.visitors
     })
}
  //  console.log(this.hotSpotList);
  // 前8条数据
  this.hotSpotList = this.hotSpotList.slice(0,8).map(function(item){
    return {value:item.visitors,name:item.name}
  })
  myChart.setOption({
  legend: {
    top: 'bottom'
  },

  series: [
    {
    
      type: 'pie',
      radius: [50, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      left:20,
      right:20,
      top:100,
      bottom:100,

      data: this.hotSpotList
    }
  ]
})
    })

// 让它在下一个时间节点在创建


  }
}
</script>
<style lang="scss" scoped>
#main{
  width: 100%;
  height: 500px;
  margin: auto;
}
</style>