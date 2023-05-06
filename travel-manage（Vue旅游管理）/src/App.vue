<template>
  <div id="app">
    <!-- 根据不同的路由切换不同的组件==> 单页面 -->
    <router-view></router-view> 

    
  </div>
</template>
<script>
export default{
  name: 'app',
  // 2.注册局部组件
  components: {
    // 'todo-list': TodoList,
    // SlotTest
  }
}
</script>
<style lang="scss">
body{
  margin: 0;
}
</style>
