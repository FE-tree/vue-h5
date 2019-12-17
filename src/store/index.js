import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        direction: 'forward' // 页面切换方向
    },
    mutations: {
        // 更新页面切换方向
        updateDirection(state, direction) {
            state.direction = direction
        }
    },
    actions: {},
    modules: {}
})