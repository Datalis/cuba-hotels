import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        categories: require('@/data/categories.json'),
        managers: require('@/data/managers.json'),
        regions: require('@/data/regions.json')
    },
    getters: {
        categories: state => state.categories,
        managers: state => state.managers,
        regions: state => state.regions
    }
})

export default store