<template>
  <div>
    <div class="item" v-for="(item,index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
        <span class="iconfont right-icon">&#xe624; </span>
       
      </div>
      <div v-if="item.children" class="item-children">
       
      </div>
    </div>
  </div>
</template>
<script>
// import Detail from '../../../../../goWhere/src/pages/detail/Detail.vue'
export default{
 
name:"DetailList",
data(){
  return{
    categoryList: [{
        "title": "成人票",
        "children": [{
          "title": "成人三馆联票",
          "children": [{
            "title": "成人三馆联票 - 某一连锁店销售"
          }]
        },{
          "title": "成人五馆联票"
        }]
      }, {
        "title": "学生票"
      }, {
        "title": "儿童票"
      }, {
        "title": "特惠票"
      }]
  }
}
}
</script>

<style lang="less" scoped>
.item{
  width: 100%;
  line-height: 2rem;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
  .item-title{
    position: relative;
    padding-left: 1rem;
    .item-title-icon{
  position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
    
  .item-title{
    line-height :.8rem;
    font-size :.32rem;
    padding:0 .2rem;
  }
  
  .item-children{
    padding:0 .2rem;
  }
    
}
.right-icon{
  position: absolute;
  top: 0rem;
  right:1rem ;
  color:#fff;
 font-size:.6rem;
 transform: rotateY(180deg);
color: #3fbdd6;
font-weight: 600;
}
  }
  
}

  

</style>