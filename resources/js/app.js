
require('./bootstrap');
window.Vue = require('vue');
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {routes} from './router.js';
import store from './store';
import Main from './components/Main.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
window.VeeValidate = require('vee-validate');

window.Vue.use(window.VeeValidate);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

const app = new Vue({
    router,
    store,
    render: h => h(Main),
}).$mount("#app");
