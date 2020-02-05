import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import company from './modules/company';
import employe from './modules/employe';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		company,
		employe
	}
})
