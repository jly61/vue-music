import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import {Swiper, Slide} from 'vue-swiper-component'
import 'style/reset.styl'

// bus总线
Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.component('Swiper', Swiper)
Vue.component('Slide', Slide)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
