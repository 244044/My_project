<template>
    <div>
        <!-- 父组件 -->
        <!-- 父组件向子组件传递数据 -->
        <city-header></city-header>
       <city-search :cities ="cities"></city-search>
       <city-list :cities ="cities" :hotCities="hotCities" :letter="letter"></city-list>
      
    </div>
</template>

<script>
// import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CItySearch'
import CityList from './components/CityList'



export default {
name:"City",
components:{
    CityHeader,
    CitySearch,
    CityList
   
},
data(){
    return{
        cities:{},
        hotCities:[],
        letter:''

    }
},
methods:{
getCityInfo(){
    axios.get('../../static/mock/city.json').then(this.handleGetCityInfoSuccess)
},
handleGetCityInfoSuccess(res){
    res =res.data
    if(res.ret && res.data){
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
    }
},
handleLetterChange (letter) {
      this.letter = letter
    }
},
mounted(){
    this.getCityInfo()
}


}
</script>
<style lang="less" scoped> 

</style>