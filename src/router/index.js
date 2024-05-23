import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt((route.query.page)|| 1) }),
    },
    {
      path: '/event/:id', //":id" its like a placeholder for route params
      name: 'event-details',
      props: true, //with this we can send in route params as component props
      component: () => import('../views/EventDetailsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting for perfomance optimization (faster)
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue') //importing component when necessary only
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
