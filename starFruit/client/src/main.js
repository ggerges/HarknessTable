// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Buefy
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// Tabs.vue
import {Tabs, Tab} from 'vue-tabs-component'

Vue.use(Buefy, {
	defaultIconPack: 'mdi'
})
// <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">

// Tabs.vue
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
