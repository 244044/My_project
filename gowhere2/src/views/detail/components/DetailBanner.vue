<template>
  <div>
      <div class="detail-banner">
        <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
        <div class="banner-info">
          <div class="banner-title">{{this.sightName}}</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe608;</span>
          
          </div>
        </div>
      </div>
      <fade-animation>

      </fade-animation>
  </div>
</template>
<script>
export default{
name:'DetailBanner',
data(){
  return{
 sightName:"大连圣亚海洋世界(AAAA景区)",
 
  }
},
methods:{

}
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/reset.css";
.detail-banner{
  overflow:hidden;
    position:relative;
    height:0;
    padding-bottom :55%;
    .banner-img{
      width:100%;
    }
     
    .banner-info{
      display:flex;
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      line-height :.6rem;
      color:#fff;
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
      .banner-title{
        flex:1;
        font-size:.32rem;
        padding:0 .2rem;
      }
       
      .banner-number{
        margin-top:.14rem;
        padding:0 .4rem;
        line-height :.32rem;
        height:.32rem;
        border-radius: 0.2rem;
        font-size:.24rem;
        background:rgba(0,0,0,.8);
        .banner-icon{
          font-size:.24rem;
        }
         
      }
        
    }
      
      
}
    
</style>