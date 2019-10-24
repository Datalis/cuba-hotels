import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/views/Home'
import MontecarloText from "./views/MontecarloText";
import GaesaText from "@/views/GaesaText";
import BusinessText from "@/views/BusinessText";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/El-regreso-del-lujo-a-Cuba',
                    name: 'montecarlo',
                    component: MontecarloText
                },
                {
                    path: '/El-esquema-GAESA-para-construir-hoteles',
                    name: 'gaesa',
                    component: GaesaText
                },
                {
                    path: '/El-negocio-hotelero-en-Cuba',
                    name: 'negocio',
                    component: BusinessText
                }
            ]
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
