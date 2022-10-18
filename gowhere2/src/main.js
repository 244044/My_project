import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './config/ajax'
// import vueAxios from 'vue-axios'
// 静态资源直接导入
import './config/rem'
import './assets/styles/iconfont.css'
// Vue.use(vueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')