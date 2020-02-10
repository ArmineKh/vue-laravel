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
  addCompany({commit}, data) {

  return axios.post('/api/company/store').then((data) => {
  // console.log(data)
  commit('addCompany', data.data);
  routes.push({path:'/api/company'});
}). catch((err) => console.log(err));


  },

  deleteCompany(ctx, id) {
    console.log("hello from action");
    return

  // axios.delete(`/api/company/${id}`, id).then(response =>{
	axios.delete('/api/company/' + id, id).then(response =>{
    routes.push({ path: '/api/company'});
    commit('deleteCompany', data);
  }).catch(err => reject(err))


  },
  editCompany(ctx, id) {
    return axios.get(`/api/company/${id}/edit`, id);
  },
  updateCompany(ctx, data) {
    return axios.post(`/api/company/${data.id}`, data.data);
  }
}
