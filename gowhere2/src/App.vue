<template>
  <div id="app">
    <!-- 例如切换 -->
    <!-- <home></home> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
   <!-- 整个页面的跳转要有占位符（必不可少） -->
    <keep-alive>
  		<router-view></router-view>
  	</keep-alive>
  </div>
</template>

<script>
import Home from './views/home/Home.vue'
export default{
  name:'APP',
  components:{
    Home
  }

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
