import Vue from 'vue/dist/vue'
import HcHaulerApp from './App.vue'

Vue.config.productionTip = false

Vue.use(HcHaulerApp, {
  providers: window.providers
})

new Vue().$mount('#app')
