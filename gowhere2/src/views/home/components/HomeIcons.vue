<template>
     <div class="icons">
    <ul class="icon-box">
        <li v-for="item of iconList" :key ="item.id">
        <p class="icon_img"><img :src="item.imgUrl"></p>
        <p class="icon_text">{{item.desc}}</p>
        </li>
      
    </ul>
         
     
  </div>
</template>

<script>
export default {
name:'HomeIcons',
props:{
   
},
data(){
    return{
        iconList:[
        {
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        "desc": "泡温泉"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      }]
    
    }
}

}
</script>
<style lang="less" scoped> 
.icons{
    width: 100%;
    height: 4.95rem;

.icon-box{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    // margin-top: 3%;
    li{
        width: 22%;
        height: 1.95rem;
        margin-top: 0.4rem;
       .icon_img{
        width: 33%;
        margin: 0 auto;
        img{
            width: 100%;
        }
       }
       .icon_text{
        font-size: 0.03rem;
        margin-top: 0.2rem;
       }
    }
}
}
</style>