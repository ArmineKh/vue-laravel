import Home from './Pages/Home.vue';
import Register from './Pages/Register.vue';
import Login from './Pages/Login.vue';
import Dashboard from './Pages/Dashboard.vue';

import Company from './Pages/Company/Company.vue';
import CreateCompany from './Pages/Company/CreateCompany.vue';
import EditCompany from './Pages/Company/EditCompany.vue';

import Employe from './Pages/Employe/Employe.vue';
import CreateEmloye from './Pages/Employe/CreateEmloye.vue';
import EditEmploye from './Pages/Employe/EditEmploye.vue';

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);


 const routes  = [
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
export const router = new VueRouter({
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
