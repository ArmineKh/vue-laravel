// import companyPartial from '../../../partials/company'
import {routes} from '../../../router.js'
import axios from 'axios'
export default {
  getEmployees(ctx, url) {
    return

      axios.get('/api/employe').then(response => {
  			res(response);
  		}).catch(err => rej(err))

  },

addEmploye({commit}, data) {
    // console.log(data);
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
}
console.log(headers);


  return axios.post('/api/employe/store', data, {headers: headers})
  .then((data) => {
  console.log(data.data)
  commit('ADD_EMPLOYE', data.data);
  router.push({path:'/api/employe'});
}). catch((err) => console.log(err));


  },

  deleteEmploye({commit}, id) {
    console.log("hello from action");
    return

    // axios.delete('/api/company/' + id, id).then(response =>{
  axios.delete(`/api/employe/${id}`).then(response =>{
    routes.push({ path: '/api/employe'});
    commit('DELETE_EMPLOYE', data);
  }).catch(err => reject(err))


  },
  editEmploye(ctx, id) {
    return axios.get(`/api/employe/update/${id}/`, id).then(response =>{
      routes.push({ path: '/api/employe/update/' + id});
      commit('EDIT_EMPLOYE', data);
    }).catch(err => reject(err));
  },
  updateCompany(ctx, data) {
    return axios.post(`/api/employe/${data.id}`, data.data);
  }
}
