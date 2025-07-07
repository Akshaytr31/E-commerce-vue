import { createRouter,createWebHistory,type RouteRecordRaw } from "vue-router";

import EcommerceHomePage from "@/pages/EcommerceHomePage.vue";
import EcommerceProductPage from "@/pages/EcommerceProductPage.vue";
import EcommerceCartPage from "@/pages/EcommerceCartPage.vue";
import About from "@/components/About.vue";
const routes: RouteRecordRaw[]=[
    {
        path:'/',
        name:'home',
        component:EcommerceHomePage
    },
    {
        path:'/product/:id',
        name:'product',
        component:EcommerceProductPage
    },
    {
        path:'/cart',
        name:'cart',
        component:EcommerceCartPage
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/contact',
        name:'contact',
        component:About
    },
    {
        path:'/customerSupport',
        name:'customerSupport',
        component:About
    },
    {
        path:'/privacyPolicy',
        name:'privacyPolicy',
        component:About
    },
    {
        path:'/service',
        name:'service',
        component:About
    },
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router