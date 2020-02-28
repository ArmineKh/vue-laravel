import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import store from '../store';
import EditCompany from '../Pages/Company/EditCompany.vue';

export default { title: 'EditCompany' };

export const asEditCompanyComponent = () => ({
  components: { EditCompany },
  template: `<EditCompany></EditCompany>`,
   store: store,

});
