import Vue from 'vue'
import VueRouter from 'vue-router'
import PricingRoute from '../views/PricingRoute.vue'
import FormRoute from '../views/FormRoute.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'PricingRoute',
    component: PricingRoute
  },
  {
    path: '/form',
    name: 'FormRoute',
    component: FormRoute
  }
]

const router = new VueRouter({
  routes
})

export default router
