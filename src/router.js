import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import project from './components/project'
import ContactMe from '@/components/ContactMe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/projects',
      name: 'project',
      component: project
    },
    {
      path: '/contact',
      name: 'ContactMe',
      component: ContactMe
    },


  ]
})
