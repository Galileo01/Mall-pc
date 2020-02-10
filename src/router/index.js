import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
//动态加载 组件
const Detail =()=>import('views/detail/Detail')
const Cart =()=> import('views/cart/Cart')
const Login =()=> import('views/login/Login')
const Index =()=> import ('views/index/Index')
const Category =()=> import ('views/category/Category')
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index,
    children:[
      {
        path:'home',
        component:Home
      },
      {
        path:'cart',
        component:Cart
      },
      {
        path:'detail/:iid',
        component:Detail
      },
      {
        path:'login',
        component:Login
      },{
        path:'category/:index',
        component:Category
      }
      ,{
        path:'/',
        redirect:'home'
      }
    ]
  },
  {
    path:'/',
    redirect:'/index'
  }
  
]

const router = new VueRouter({
  mode: 'history',//  部署到 码云 pages服务时，改成了 hash
  routes
})

export default router
