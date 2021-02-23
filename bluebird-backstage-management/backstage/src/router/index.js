import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login/Login')
    },
    {
      // path: '/main',
      // name: 'main',
      // component: () => import('@/views/Main.vue'),
      // path: '/',
      // component: () => import('@/views/Main.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home/Home')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/UserManage/UserManage')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/Order/Order')
        },
        {
          path: '/video',
          name: 'video',
          component: () => import('@/views/VideoManage/VideoManage')
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('@/views/Account/Account')
        },
        {
          path: '/page1',
          name: 'page1',
          component: () => import('@/views/Other/PageOne')
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('@/views/Other/PageTwo')
        }
      ]
    },
    {
      path: '/addroom',
      name: 'addroom',
      component: () => import('@/views/AddRoom/AddRoom')
    }
  ]
})

export default router
