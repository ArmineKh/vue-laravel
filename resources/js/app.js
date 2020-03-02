require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {router} from './router.js';
import store from './store';
import Main from './Layouts/Main.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { ValidationProvider } from 'vee-validate';

Vue.use(VueRouter);

const app = new Vue({
    router,
    store,
    render: h => h(Main),
}).$mount("#app");
