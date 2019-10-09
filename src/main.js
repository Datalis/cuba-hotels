import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify';
import store from './store'

var SocialSharing = require('vue-social-sharing')

Vue.config.productionTip = false
Vue.use(SocialSharing)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
