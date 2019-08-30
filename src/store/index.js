import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        categories: require('@/data/categories.json'),
        managers: require('@/data/managers.json')
    },
    getters: {
        categories: state => state.categories,
        managers: state => state.managers
    }
})

export default store