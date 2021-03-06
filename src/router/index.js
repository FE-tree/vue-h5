import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '@/store'
import getPageTitle from '@/utils/get-page-title'

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
        path: '/login',
        name: 'login',
        component: () => import ( '../views/user/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import ( '../views/user/register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import ( '../views/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import ('../views/404.vue'),
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
    // mode: 'history',
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes
})

const storage = window.sessionStorage
storage.clear()
let historyCount = storage.getItem('count') * 1 || 0
storage.setItem('/', 0)

router.beforeEach((to, from, next) => {
    // 设置页面标题
    document.title = getPageTitle(to.meta.title)

    if (to.params.direction) {
        store.commit('updateDirection', to.params.direction)
    } else {
        const toIndex = storage.getItem(to.path)
        const fromIndex = storage.getItem(from.path)
        // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
        if (toIndex) {
            if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
                store.commit('updateDirection', 'forward')
            } else {
                store.commit('updateDirection', 'back')
            }
        } else {
            ++historyCount
            storage.setItem('count', historyCount)
            to.path !== '/' && storage.setItem(to.path, historyCount)
            store.commit('updateDirection', 'forward')
        }
    }
    next()
})

export function resetRouter() {
    router.replace('/login')
}

export default router