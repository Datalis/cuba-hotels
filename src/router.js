import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/views/Home'
import MontecarloText from "./views/MontecarloText";
import GaesaText from "@/views/GaesaText";
import BusinessText from "@/views/BusinessText";

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
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
                    path: '/montecarlo',
                    name: 'montecarlo',
                    component: MontecarloText
                },
                {
                    path: '/gaesa',
                    name: 'gaesa',
                    component: GaesaText
                },
                {
                    path: '/negocio',
                    name: 'negocio',
                    component: BusinessText
                }
            ]
        }
    ]
})