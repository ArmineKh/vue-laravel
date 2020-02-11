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
    // console.log(data);
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
}
console.log(headers);


  return axios.post('/api/company/store', data, {headers: headers})
  .then((data) => {
  console.log(data.data)
  commit('addCompany', data.data);
  routes.push({path:'/api/company'});
}). catch((err) => console.log(err));


  },

  deleteCompany({commit}, id) {
    console.log("hello from action");
    return

    // axios.delete('/api/company/' + id, id).then(response =>{
  axios.delete(`/api/company/${id}`).then(response =>{
    routes.push({ path: '/api/company'});
    commit('deleteCompany', data);
  }).catch(err => reject(err))


  },
  editCompany(ctx, id) {
    return axios.get(`/api/company/update/${id}/`, id).then(response =>{
      routes.push({ path: '/api/company/update/' + id});
      commit('editCompany', data);
    }).catch(err => reject(err));
  },
  updateCompany(ctx, data) {
    return axios.post(`/api/company/${data.id}`, data.data);
  }
}
