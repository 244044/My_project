<!-- 
  import *** from '相对路径' // 自定义模块
  import *** from '包名' // 引入包
 -->

```
// main.js 路由的配置
import Vue from 'vue'
import App from './App.vue'
// import router from './router/index.js'
// import store from './store'

import VueRouter from 'vue-router' // 1. 引入vue-router包
Vue.use(VueRouter) //2. 安装插件,两个全局组件 `<router-view>`、`<router-link>`

import Home from './views/Home.vue'

const router = new VueRouter({  //3.创建VueRouter路由实例对象({routes配置路由及对应组件的})
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

// vue-cli 选项 => vue-router、vuex
new Vue({
  router: router, // 4.把router实例注入到vue实例中
  // store: store,
  render: (h) => h(App)
}).$mount('#app')

Vue.config.productionTip = false



```