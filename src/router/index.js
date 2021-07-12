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
      num: 0,
      isShow: true
    }
  },
  {
    path: '/popups',
    name: 'Popups',
    component: () => import('@/views/home/popups/Popups.vue')
  },
  {
    path: '/product_list',
    name: 'ProductList',
    component: () => import('@/views/home/popups/components/Search.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/home/product/Product.vue')
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('@/views/topic/Topic.vue'),
    meta: {
      num: 1,
      isShow: true
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'),
    meta: {
      num: 2,
      isShow: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart.vue'),
    meta: {
      num: 3,
      isShow: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue'),
    meta: {
      num: 4,
      isShow: true
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
