import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Calendar from '@/components/Calendar'
import Gallery from '@/components/Gallery'
import Store from '@/components/Store'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
