// import companyPartial from '../../../partials/company'
import {routes} from '../../../router.js'
import axios from 'axios'
export default {
  getCompanies(ctx, url) {
    return

      axios.get('/api/company').then(response => {
  			res(response);
  		}).catch(err => rej(err))

  },
  changeRoute({commit, state}){
    // routes.push({path:'/api/dashboard'});
    this.$router.push('/api/dashboard')
  },

addCompany({commit, state}, payload) {
  console.log(payload.data);
commit({
  type:'ADD_COMPANY',
  data: payload.data});
routes.push({path:'/api/company'});
// axios.post('/api/company/store', payload.data);
axios.request({
  url: '/api/company',
  method: 'POST',
  data: payload.data,
  headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            'Content-Type': 'application/json;charset=UTF-8'
          }
})
  },

  deleteCompany ({commit}, id){
    commit('DELETE_COMPANY', id);
    axios.delete(`/api/company/${id}`);
    routes.push({path:'/api/company'});


  },
  editCompany(ctx, id) {

    return axios.get(`/api/company/update/${id}/`, id).then(response =>{
      commit('EDIT_COMPANY', data);
      routes.push({ path: '/api/company/update/' + id});
    }).catch(err => reject(err));
  },
  updateCompany(ctx, data) {
    return axios.post(`/api/company/${data.id}`, data.data);
  }
}
