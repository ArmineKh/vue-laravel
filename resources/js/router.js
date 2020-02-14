import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Company from './components/Company.vue';
import CreateCompany from './components/CreateCompany.vue';
import Emloye from './components/Emloye.vue';
import CreateEmloye from './components/CreateEmloye.vue';
import EditCompany from './components/EditCompany.vue';

import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

export const routes  = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  },
  {
    path: '/company',
    name: 'company',
    component: Company,
  },
  {
    path: '/company/create',
    name: 'createCompany',
    component: CreateCompany,
  },
  {
    path: `/company/:id`,
    name: 'deleteCompany',
    component: Company,
  },
  {
    path: `/company/update/:id`,
    name: 'editCompany',
    component: EditCompany,
  },
  {
    path: '/employe',
    name: 'employe',
    component: Emloye,
  },
  {
    path: '/employe/create',
    name: 'createEmloye',
    component: CreateEmloye,
  },
  {
    path: `/employe/:id`,
    name: 'deleteEmloye',
    component: Emloye,
  },
  {
    path: `/employe/update/:id`,
    name: 'editEmloye',
    // component: EditEmloye,
  },

]
