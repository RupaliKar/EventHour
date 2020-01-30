
require('./bootstrap');

window.Vue = require('vue');

import common from './common';
Vue.mixin(common);
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale });
import Vue from 'vue'
 


Vue.component('masterr', require('./layout/master.vue').default);
//Vue.component('admin', require('./layout/admin.vue').default);

const app = new Vue({
  router,
  store,
  el: '#app'
});
