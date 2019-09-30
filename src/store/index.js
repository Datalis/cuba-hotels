import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        categories: require('@/data/categories.json'),
        // regions: require('@/data/regions.json'),
        montecarlo: require('@/data/textos/montecarlo.json'),
        business: require('@/data/textos/business.json'),
        gaesa: require('@/data/textos/gaesa.json'),
        hotels: require('@/data/hoteles.json'),
        projects: require('@/data/hoteles-const.json')
    },
    getters: {
        categories: state => state.categories,
        managers: state => [...new Set(state.hotels.map(p=> p.oper_cu))],
        regions: state => [...new Set(state.hotels.map(p=> p.provincia.nombre))],
        montecarlo: state => state.montecarlo.textos,
        gaesa: state => state.gaesa.textos,
        business: state => state.business.textos,
        // regions: state => state.regions,
        hotels: state => state.hotels,
        projects: state => state.projects,
        years: state => [...new Set(state.projects.map(p=> parseInt(p.fecha_fin)))].filter(y=> !isNaN(y))
    }
})

export default store