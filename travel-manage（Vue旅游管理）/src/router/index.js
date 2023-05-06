import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

import Layout from '../components/Layout.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login.vue'
import Reg from '../views/Login/Reg.vue'
import Seft from '../views/Login/Seft.vue'

import spotRouter from './spot.js'
import hotelRouter from './hotel.js'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [{
            path: '/home',
            name: 'Home',
            component: Home
        }, ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/reg',
        name: 'Reg',
        component: Reg
    },
    {
        path: '/seft',
        name: 'Seft',
        component: Seft
    },
    // 景点相关的路由
    spotRouter,
    // 酒店相关的路由
    hotelRouter
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫：进入每个路由前执行这里的代码
router.beforeEach(function(to, from, next) {
    // 部分路由在路由跳转前先判断有没有token，有才允许用户进入，没有呢去到登录页登录。
    let token = localStorage.getItem('token') //获得token

    // 1.未登录且要去的路由是（除了登录页或注册页的其他页面），就强行让他去登录页
    if (!token && !(to.path === '/login' || to.path === '/reg')) {
        next({ path: '/login' })
    }
    // 2.登录了要去登录页，强行跳到首页
    else if (token && to.path === '/login') {
        next({ path: '/home' })
    }
    // 3.登录了要去非登录页（首页、景点。。。。）|| 未登录要去登录页
    else {
        // 面包屑
        if (to.path !== '/home') {
            // 在进入路由对应的组件前，先拿到路由需要经过的所有路径的title。
            // 为了在layout组件中的面包屑位置展示这些title
            let breadList = to.matched.map(function(item) {
                return item.meta.title
            })
            breadList = breadList.filter(function(item) {
                return item // filter方法中，item有值才会被返回出来。
            })
            store.commit('changeBreadList', breadList)
        }
        next()
    }
})

export default router