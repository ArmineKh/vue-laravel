import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

import Company from './components/Company/Company.vue';
import CreateCompany from './components/Company/CreateCompany.vue';
import EditCompany from './components/Company/EditCompany.vue';

import Employe from './components/Employe/Employe.vue';
import CreateEmloye from './components/Employe/CreateEmloye.vue';
import EditEmploye from './components/Employe/EditEmploye.vue';


import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);


export const routes  = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    /* *********   *******  */
    {
        path: '/company',
        name: 'company',
        component: Company,
        meta: { requiresAuth: true }
    },
    {
        path: '/company/create',
        name: 'createCompany',
        component: CreateCompany,
        meta: { requiresAuth: true }
    },
    {
        path: `/company/:id`,
        name: 'deleteCompany',
        component: Company,
        meta: { requiresAuth: true }
    },
    {
        path: `/company/:id/edit`,
        name: 'editCompany',
        component: EditCompany,
        meta: { requiresAuth: true }
    },
    {
        path: `/company/:id`,
        name: 'updateCompany',
        component: Company,
        meta: { requiresAuth: true }
    },
    /* ********  ******* */
    {
        path: '/employe',
        name: 'employe',
        component: Employe,
        meta: { requiresAuth: true }
    },
    {
        path: '/employe/create',
        name: 'createEmloye',
        component: CreateEmloye,
        meta: { requiresAuth: true }
    },
    {
        path: `/employe/:id`,
        name: 'deleteEmloye',
        component: Employe,
        meta: { requiresAuth: true }
    },
    {
        path: `/employe/:id/edit`,
        name: 'editEmloye',
        component: EditEmploye,
        meta: { requiresAuth: true }
    },
    {
        path: `/employe/:id`,
        name: 'updateEmloye',
        component: Employe,
        meta: { requiresAuth: true }
    },

]
