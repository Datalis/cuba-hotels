import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/views/Home'
import Interactive from "./components/home/Interactive";
import Building from "./views/Building";

Vue.use(Router)

export default new Router({
    mode: 'history',
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
                    path: '/',
                    name: 'building',
                    component: Building
                }
            ]
        },
        {
            path: '/map',
            name: 'comp',
            component: Interactive
        },
    ]
})