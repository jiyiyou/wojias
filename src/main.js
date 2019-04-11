import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../config/ele'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import qs from 'qs'
import BaiduMap from 'vue-baidu-map'
Vue.prototype.$axios=Axios
// 全局网址http://www.wwtliu.com
//Axios.defaults.baseURL = 'http://www.wwtliu.com';
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
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'pdte5B83N8xwZnARmKqMZiF7Cu8b15YX'
})
new Vue({
  router,
  store,
  components: { 
   },
  render: h => h(App)
}).$mount('#app')
