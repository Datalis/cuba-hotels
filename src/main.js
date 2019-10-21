import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify';
import store from './store'
import Meta from 'vue-meta';
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-54853009-1',
  autoTracking: {
    screenview: true
  }
})
var SocialSharing = require('vue-social-sharing')

Vue.config.productionTip = false
Vue.use(SocialSharing)
Vue.use(Meta);


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
