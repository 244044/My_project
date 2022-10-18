import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/home/Home.vue')
    }, {
        path: '/city',
        name: 'City',
        component: () =>
            import ('../views/city/City.vue')
    },
    {
        // 路由参数使用：（冒号）绑定
        path: '/detail/:id',
        name: 'Detail',
        component: () =>
            import ('../views/detail/Detail.vue')
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router