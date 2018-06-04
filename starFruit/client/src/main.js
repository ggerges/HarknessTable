// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// VueDraggableResizeable
import VueDraggableResizable from 'vue-draggable-resizable'

// Buefy
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// Drag, Drop
import { Drag, Drop } from 'vue-drag-drop'

// Tabs.vue
import {Tabs, Tab} from 'vue-tabs-component'
// jQuery
import jQuery from 'jquery'
// VueDraggable
import VueDraggable from 'vue-draggable'

// bootStrap -- don't think we need this
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = jQuery // is this for bootstrap GG? -CM

Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.use(Buefy)
// <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">

Vue.component('drag', Drag)
Vue.component('drop', Drop)

// Tabs.vue
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

Vue.use(VueDraggable)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
