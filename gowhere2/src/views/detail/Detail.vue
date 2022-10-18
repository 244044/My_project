<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list></detail-list>
    </div>
</template>
<script>
// import DetailBanner from '../../../../goWhere/src/pages/detail/components/DetailBanner.vue'
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
export default{
name:'Detail',

components:{
   
    DetailBanner,
    DetailHeader,
    DetailList
},
data(){

},
}
</script>

<style lang="less" scoped>

</style>