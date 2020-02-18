import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import company from './modules/company';
import employe from './modules/employe/index.js';


var modules = {
	user,
	company,
	employe,
};

console.log(modules);

Vue.use(Vuex);
const store =  new Vuex.Store({
	modules: modules,
})
export default store
