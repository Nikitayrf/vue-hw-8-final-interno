import Vue from "vue";
import Router from 'vue-router';
import Page1Home from "@/pages/Page1Home.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Page1Home,
        },
        {
            path: '/',
            name: 'home',
            component: Page1Home,
        },
        {
            path: '/blog',
            component: () => import('@/pages/Page2Blog.vue'),
        },
        {
            path: '/blog-details',
            component: () => import('@/pages/Page4BlogDetails.vue'),
        },
        {
            path: '/project',
            component: () => import('@/pages/Page3Project.vue'),
        },
        {
            path: '/project/:id',
            component: () => import('@/pages/Page5ProjectDetails.vue'),
            props: true,
        },
        {
            path: '*',
            redirect: '/404',
        },
        {
            path: '/404',
            component: () => import('@/pages/Page6NotFound.vue'),
        },
    ]
})