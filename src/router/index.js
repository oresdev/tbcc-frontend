import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './views/home.vue'
import blog from './views/blog.vue'
import post_1 from './views/posts/post-1.vue'
import post_2 from './views/posts/post-2.vue'
import post_3 from './views/posts/post-3.vue'
import post_4 from './views/posts/post-4.vue'
import post_5 from './views/posts/post-5.vue'
import token from './views/token.vue'
import wallet from './views/wallet.vue'
import team from './views/team.vue'

import _404 from './views/_404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/blog',
        name: 'blog',
        component: blog,
    },
    {
        path: '/blog/post/1',
        name: 'post_1',
        component: post_1,
    },
    {
        path: '/blog/post/2',
        name: 'post_2',
        component: post_2,
    },
    {
        path: '/blog/post/3',
        name: 'post_3',
        component: post_3,
    },
    {
        path: '/blog/post/4',
        name: 'post_4',
        component: post_4,
    },
    {
        path: '/blog/post/5',
        name: 'post_5',
        component: post_5,
    },
    {
        path: '/token',
        name: 'token',
        component: token,
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: wallet,
    },
    {
        path: '/team',
        name: 'team',
        component: team,
    },
    {
        path: '*',
        name: '_404',
        component: _404,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})

export default router
