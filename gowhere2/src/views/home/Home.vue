<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons ></home-icons>
        <home-recommend ></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeWeekend from './components/HomeWeekend.vue'
export default {
name:'Home',
components:{
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeSwiper,
    HomeWeekend


},
data(){
    return{
lastCity:'',

weekendList:[],
    }
}

}
</script>
<style lang=" less" scoped> 

</style>