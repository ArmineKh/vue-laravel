
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

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode:'history'
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('user')) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})


const app = new Vue({
    router,
    store,
    render: h => h(Main),
}).$mount("#app");
