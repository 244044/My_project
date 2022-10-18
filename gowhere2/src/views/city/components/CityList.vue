<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="list-area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="list-area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key ="item.id" @click="handleCityClick(item.name)" >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="list-area" v-for ="(item,key) of cities" :key ="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="city-list-content">
          <ul class="item-list">
            <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
             {{innerItem.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
name:'CityList',
props:{
  hotCities: Array,
    cities: Object,
    letter: String
},
methods:{
  handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
},
computed:{
  ...mapState({
    currentCity:'city'
  })
},
watch:{
  letter(){
    if(this.letter){
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}

}
</script>
<style lang="less" scoped> 
@import "../../../assets/styles/reset.css";
.border-topbottom{
  text-align: left;
  padding-left: 0.4rem;
  margin: 0.4rem 0;
  background-color: #eee;
  line-height: 0.8rem;
  &:before{
    border-color :#ccc;
  }
    
    &:after{
      border-color:#ccc;
    }
    
  .border-bottom{
    &:before{
      border-color :#ccc;
    }
      
  }
   
  .city-list{
    position:fixed;
    overflow :hidden;
    top:1.58rem;
    left:0;
    right :0;
    bottom:0;
    .title{
      line-height :.54rem;
      font-size:.26rem;
      background:#eee;
      padding-left:.2rem;
      color:#666;
    }
     
    .button-list{
      overflow:hidden;
      padding:.1rem .6rem .1rem .1rem;
      text-align: left;
      .button-wrapper{
        float :left;
        width:33.33%;
        .button{
          margin:.1rem;
          padding:0.1rem 0;
          text-align:left;
          border:0.02rem solid #ccc;
          border-radius:.06rem;
        }
         
      }
        
    }
      
    .item-list{
      .item{
        line-height :.76rem;
        padding-left:.2rem;
      }
        
    }
     
  }
    
}
  
</style>