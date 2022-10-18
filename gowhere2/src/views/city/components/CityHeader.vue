<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-home">&#xe624;</div>
    </router-link>
    城市选择

  </div>
</template>

<script>


export default {
name:'CityHeader'

}
</script>
<style lang="less" scoped> 
@import "../../../assets/styles/reset.css";
.header{
  position :relative;
    height :2rem;
    line-height :2rem;
    overflow :hidden;
    text-align :center;
    color:#fff;
    background :#3fbdd6;
    font-size :.65rem;
    .back-home{
      position :absolute;
      top :0;
      left :.2rem;
      width :.64rem;
      text-aligh:center;
      font-size :.8rem;
      color :#fff;
    }
      
}
   


</style>