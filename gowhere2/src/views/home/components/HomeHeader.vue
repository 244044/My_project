<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right"><span class="iconfont arrow-icon">&#xe64a;</span></div>

        </router-link>

        
    </div>
</template>
<script>
export default {
  name:'HomeHeader',
}
</script>
<style lang="less" scoped> 
@import "../../../assets/styles/reset.css";
.header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    line-height :50px;
    color :#fff;
    background :#3fbdd6;
    .header-left{
        width: .64rem;  
        .back-icon{
            text-align :center;
        font-size:.74rem;
        }   
    }
    .header-input{
        height :1rem;
      line-height :1rem;
      margin-top:0.54rem;
      margin-left :.2rem;
     padding: 0 0.74rem 0 0.3rem;
      background :#fff;
      border-radius:.5rem;
      color :#ccc;
      span{
        padding-right: 0.2rem;
      }
    }
    .header-right{
        min-width :1.04rem;
      padding:0 .1rem;
      float :right;
      text-align :center;
      color:#fff;
     
      .arrow-icon{
        font-size:.74rem;
      }
    }
}
</style>