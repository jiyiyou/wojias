import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
Vue.config.productionTip = false
import vshare from 'vshare'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import qs from 'qs'
import VueJsonp from 'vue-jsonp'



import BaiduMap from 'vue-baidu-map'
import VueAreaLinkage from 'vue-area-linkage';
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
Vue.use(VueAreaLinkage)
Vue.use(provinceAndCityData)
Vue.use(regionData)
Vue.use(provinceAndCityDataPlus)
Vue.use(regionDataPlus)
Vue.use(CodeToText)
Vue.use(TextToCode)
Vue.prototype.$axios=Axios
// 全局网址http://www.wwtliu.com
Axios.defaults.baseURL = 'http://192.168.1.116:8080/';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
 // console.log("请求"+config)
  if(config.method=="post"){
config.data=qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //console.log("响应"+response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'pdte5B83N8xwZnARmKqMZiF7Cu8b15YX'
})


Vue.use(require('vshare'))

router.beforeEach((to, form, next) => {
  // if(form.path=="/homelist"&&to.path=="/homelist"){
  //   router.go(0)
  // }
  // if(form.path=="/homelist"&&to.path=="/homelist"){
  //
  // }
  next();
})


new Vue({
  router,
  store,
  components: { 
   },
  render: h => h(App)
}).$mount('#app')
