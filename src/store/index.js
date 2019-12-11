import Vue from 'vue'
import Vuex from 'vuex'
/**
 * 使用vuex状态管理
 */
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapse:false
    },
    getters: {
        getCollapse: state => state.collapse
    },

    mutations: {
        setCollapse: (state, payload) => state.collapse = payload
    },

    actions: {
        changeCollapse: (context, payload) => context.commit('setCollapse', payload)
    }
})
