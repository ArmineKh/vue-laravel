
require('./bootstrap');
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes.js';
import storeData from './Store';
import Main from './components/Main.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
window.Vue = require('vue');
window.VeeValidate = require('vee-validate');

window.Vue.use(window.VeeValidate);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAxios, axios);


const router = new VueRouter({
  routes,
  mode:'history'
});

const store = new Vuex.Store(storeData);

// Axios.interceptors.response.use(null,(error) => {
//   if (error.response.status == 401) {
//     store.commit('logout');
//     router.push('/login');
//   }
//   return Promise.reject(error);
// })

const app = new Vue({
    router,
    store,
    render: h => h(Main),
}).$mount("#app");
