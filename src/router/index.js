import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/playlist',
        },
        {
            path: '/playlist',
            component: () => import('@/pages/playlist/playList.vue'),
        },
        {
            path: '/search',
            component: () => import('@/pages/search/search.vue'),
        },
        {
            path: '/recommend',
            component: () => import('@/pages/recommend/recommend.vue'),
        },
        {
            path: '/detail/:id',
            component: () => import('@/pages/detail/detail.vue'),
        }

    ]
})
