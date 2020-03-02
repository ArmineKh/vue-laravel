
import { configure } from '@storybook/vue';
import {addons} from '@storybook/addon-actions/register';



import Vue from 'vue';

// Import Vue plugins
import axios from 'axios';
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.css';
// import withStoreDecorator from '@verkstedt/storybook-store-decorator';
// import store from '../resources/js/store';

// addDecorator(withStoreDecorator({
//   props: store,
//   globalStore: true,
//   reset: true
// }))


// Import your global components.
import Company from '../resources/js/Pages/Company/Company.vue';
import CreateCompany from '../resources/js/Pages/Company/CreateCompany.vue';
import EditCompany from '../resources/js/Pages/Company/EditCompany.vue';


// Install Vue plugins.
import user from '../resources/js/store/modules/user';
import company from '../resources/js/store/modules/company';
import employe from '../resources/js/store/modules/employe/index.js';
Vue.use(Vuex);
// var modules = {
// 	user,
// 	company,
// 	employe,
// };
// const store =  new Vuex.Store({
// 	modules: modules,
// })

// Register global components.
Vue.component('Company', Company);
Vue.component('CreateCompany', CreateCompany);
Vue.component('EditCompany', EditCompany);

configure(require.context('../resources/js/Stories', true, /\.stories\.js$/), module);
