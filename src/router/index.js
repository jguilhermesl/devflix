import  { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import InspectMovie from '../views/InspectMovieView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: HomeView,
            component: HomeView
        },
        {
            path: '/movies/:id',
            name: InspectMovie,
            component: InspectMovie
        }
    ]
})

export default router