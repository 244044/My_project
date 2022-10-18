<template>
  <div>
    <div class="city-search">
    <input class="search-input" type='text' placeholder="输入城市名或拼音" v-model="keyword" />
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item border-bottom" v-for="item of list"  :key = "item.id" @click="handleCityClick(item.name)">
      {{item.name}}
      </li>
      <li class="search-item border-bottom" v-show="!list.length">
          没有找到匹配数据
        </li>
    </ul>
  </div>
  </div>
 
</template>

<script>

import {mapMutations} from 'vuex'
export default {
name:'CitySearch',
props:{
cities:Object
},
data(){
  return{
       keyword:'',
      list:[],
      timer:null  
  }
 
}, 
methods:{
     handleCityClick(city){
         this.changeCity(city)
         this.$router.push('/')
     },
     ...mapMutations(['changeCity'])
  },
  watch:{
    keyword(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list =[]
        return
      }

      this.timer = setTimeout(() =>{
        const result =[]
        for(let i in this.cities){
          this.cities[i].forEach((val) =>{
            if(val.spell.indexOf(this.keyword) >-1 ||val.name.indexOf(this.keyword) >-1){
              result.push(val)
            }
          })
        }
        this.list = result
      },100)


    },

  },
  

}
</script>
<style lang="less" scoped> 
@import "../../../assets/styles/reset.css";
.city-search{
  width: 80%;
  height :.72rem;
    // background:#3fbdd6;
    border: 0.01rem solid #ccc;
    border-radius: 0.3rem;
    padding:0 .1rem;
    margin: 0.2rem auto;
    .search-input{
      box-sizing:border-box;
      width :100%;
      height :.62rem;
      padding:0 .1rem;
      line-height :.62rem;
      text-align :center;
      border-radius:.06rem;
      color:#666;
    }
      
}
   
  .search-content{
    overflow :hidden;
    position :absolute;
    top:1.58rem;
    left :0;
    right :0;
    bottom :0;
    background:#eee;
    z-index :1;
    .search-item{
      line-height :.62rem;
      padding-left :.2rem;
      background:#fff;
      color:#666;
    }
      
  }
    
</style>