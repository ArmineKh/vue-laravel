import Vue from 'vue';
import Vuex from 'vuex';
import store from '../store';
import Company from '../Pages/Company/Company.vue';

export default { title: 'Company' };


console.log(store.state.company.companiesList)
console.log(store)


export const asCompanyComponent = () => ({
  components: {Company },
  template: `<Company></Company>`,
   store: store,
   data(){
       return{
           companyes: []
       }
   }

});
