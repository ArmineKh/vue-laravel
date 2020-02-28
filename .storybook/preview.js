
import { configure } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import { action } from '@storybook/addon-actions';

import Vue from 'vue';

// Import Vue plugins
import axios from 'axios';
import Vuex from 'vuex';
import store from '../resources/js/store';
import 'bootstrap/dist/css/bootstrap.css';

// Import your global components.
import Company from '../resources/js/Pages/Company/Company.vue';
import CreateCompany from '../resources/js/Pages/Company/CreateCompany.vue';
import EditCompany from '../resources/js/Pages/Company/EditCompany.vue';


// Install Vue plugins.
Vue.use(Vuex);

// Register global components.
Vue.component('Company', Company);
Vue.component('CreateCompany', CreateCompany);
Vue.component('EditCompany', EditCompany);

addDecorator(StoryRouter())

configure(require.context('../resources/js/Stories', true, /\.stories\.js$/), module);
