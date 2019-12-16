import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ( /* webpackChunkName: "404" */ '../views/404.vue'),
        meta: {
            title: '404',
            keepAlive: true
        }
    }
]

routes = routes.concat({
    path: '*',
    redirect: '/404'
})

const router = new VueRouter({
    routes
})

export default router