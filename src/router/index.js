import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      num: 0
    },
    children: [
      {
        path: 'popups',
        name: 'popups',
        component: () => import('@/views/home/popups/Popup.vue')
      }
    ]
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('@/views/topic/Topic.vue'),
    meta: {
      num: 1
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'),
    meta: {
      num: 2
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart.vue'),
    meta: {
      num: 3
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue'),
    meta: {
      num: 4
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/cart') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      Vue.prototype.$toast('请先登录')
      setTimeout(() => {
        next({ path: '/profile' })
      }, 1000)
    }
  } else {
    next()
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

export default router
