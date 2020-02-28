import Vue from 'vue';
// import axios from 'axios';
import Vuex from 'vuex';
import store from '../store';
import CreateCompany from '../Pages/Company/CreateCompany.vue';

export default { title: 'CreateCompany' };


export const asCreateCompanyComponent = () => ({
  components: { CreateCompany },
  template: `<CreateCompany></CreateCompany>`,
   store: store

});
