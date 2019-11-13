import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import {Swiper, Slide} from 'vue-swiper-component'
import './assets/stylus/reset.styl'


Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.component('Swiper', Swiper)
Vue.component('Slide', Slide)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
