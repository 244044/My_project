<template>
  <div>
     <router-link tag="div" to="/" class="header-abs" >
      <div class="iconfont back-icon">&#xe624;</div>
     </router-link>
     <div class="header-fixed">
      <router-link to ="/">
        <div class="iconfont back-home">&#xe624;</div>
      </router-link>
     </div>
  </div>
</template>
<script>
export default{
name:'DetailHeader',
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/reset.css";
.header-abs{
  position :absolute;
    left :.2rem;
    top:.2rem;
    width :.8rem;
    // height :.8rem;
    // line-height :.8rem;
    text-align :center;
    border-radius: .4rem;
    background: rgba(0,0,0,.8);
    .back-icon{
      color:#fff;
      font-size:.8rem;
    }
      
}
    
  .header-fixed{
    position :fixed;
    top:0;
    left :0;
    right :0;
    height :2rem;
    line-height :1rem;
    text-align :center;
    color:#fff;
    background-color:#3fbdd6;
    font-size :.32rem;
    .back-home{
      position :absolute;
      top :0.5rem;
      left :0.4rem;
      width :.64rem;
      text-aligh:center;
      font-size :.8rem;
      color :#fff;
    }
    
  }
   
</style>