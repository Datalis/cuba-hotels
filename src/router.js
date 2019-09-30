import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/views/Home'
import Building from "./views/Building";
import Building1 from "./views/Building1";
import Building2 from "./views/Building2";

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
                    path: '/building',
                    name: 'building',
                    component: Building
                },
                {
                    path: '/gaesa',
                    name: 'building1',
                    component: Building1
                },
                {
                    path: '/building2',
                    name: 'building2',
                    component: Building2
                }
            ]
        }
    ]
})