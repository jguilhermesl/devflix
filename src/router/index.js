import  { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import InspectMovieView from '../views/InspectMovieView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
            name: InspectMovieView,
            component: InspectMovieView
        },
        {
            path: '/favorites',
            name: FavoritesView,
            component: FavoritesView
        }
    ]
})

export default router