import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, 
    {
        path: '/register',
        name: 'Register',
        component: Register
    }   
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
