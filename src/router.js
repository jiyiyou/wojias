import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/details.vue'
import Housingsupply from './views/housingsupply.vue'
import Entrust from './views/Entrust.vue'
import New from './views/new.vue'
import News from './views/news.vue'
import Newcont from './views/newcont.vue'
import Buildingdetails from './views/buildingdetails.vue'
import Homelist from './views/homelist.vue'
import Mapbox from './views/mapbox.vue'
import SupplierAllBack from './views/supplierAllBack.vue'
import Collection from './views/Collection.vue'
import seachList from './views/seachList.vue'

Vue.use(Router)

//
//import New from "./views/new";
//import News from "./views/news";
////配置路由
//const routes = [
//{ path: "/new",component:New },
//{ path: "/news/:aid",component:News },/*  动态路由*/
//
//];

//const router = new VueRouter({
//  routes    // (缩写）相当于routes:routes
//})





export default new Router({
 // mode: 'history',
 // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/seachList',
      name: 'seachList',
      component: seachList
    },

    {
      path: '/mapbox',
      name: 'mapbox',
      component: Mapbox
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
       {
      path: '/homelist',
      name: 'homelist',
      component: Homelist
    },
    {
      path: '/Housingsupply',
      name: 'housingsupply',
      component: Housingsupply
    },
    {
      path: '/Entrust',
      name: 'entrust',
      component: Entrust
    },
    {
      path: '/newcont',
      name: 'newcont',
      component: Newcont
    },  
    {
      path: "/news",
      name: 'news',
      component: News
    }, 
       {
      path: "/supplierAllBack",
      name: 'supplierAllBack',
      component: SupplierAllBack
    },
    {
      path: '/buildingdetails',
      name: 'buildingdetails',
      component: Buildingdetails
    },
    {
      path: '/collection',
      name: 'Collection',
      component:Collection
    },

    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
     component: New
    },
  ]
})
