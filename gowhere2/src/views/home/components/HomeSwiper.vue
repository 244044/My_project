<template>
    <div class="swiper">
        <img src="../../../images/swiper1.jpg" alt="">
    </div>
</template>
<script>
export default {
    name:"HomeSwiper"

}
</script>
<style lang="less" scoped> 
// 导入样式的静态资源
@import "../../../assets/styles/reset.css";
.swiper{
    width: 100%;
    height: 6.5rem;
    img{
        width: 100%;
        height: 100%;
        
    }
}
</style>