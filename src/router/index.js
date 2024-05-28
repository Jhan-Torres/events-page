import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      props: (route) => ({ page: parseInt((route.query.page)|| 1) }),
      component: () => import('../views/EventListView.vue'),
    },
    {
      path: '/events/:id', //":id" its like a placeholder for route params
      name: 'event-layout',
      props: true, //with this we can send in route params as component props
      component: () => import('../views/event/Layout.vue'),
      children: [ //here is where we have the nest components
        {
          path: 'details', //"" means the component will be loaded at the root of the parent (in this case "event/:id")
          name: 'event-details',
          component: () => import('../views/event/DetailsView.vue'),
        },
        {
          path: 'register',
          name: 'event-register',
          component: () => import('../views/event/RegisterView.vue')
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: () => import('../views/event/EditView.vue')
        },
      ],
    },
    // Redirect to events page "afterEvent(.*)" will capture everything else  
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent };
      }
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
