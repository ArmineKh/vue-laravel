import {routes} from '../../../router.js'
import axios from 'axios'
export default {

addEmploye({commit, state}, payload) {
  commit({
    type: 'ADD_EMPLOYE',
    data: payload.data
  });
  axios.request({
    url: '/api/employe',
    method:'POST',
    data: payload.data,
    config:{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('Token'),
      }
    }
  })
  .then(res=>{
    // console.log(res)
  }).catch(err=>console.log(err))

  },

  deleteEmploye({commit}, id) {
    commit('DELETE_EMPLOYE', id);
    axios.delete(`/api/employe/${id}`);
    routes.push({path:'/api/employe'});


  },
  editEmploye(ctx, id) {
    return axios.get(`/api/employe/update/${id}/`, id).then(response =>{
      routes.push({ path: '/api/employe/update/' + id});
    }).catch(err => reject(err));
  },

  updateEmploye({commit}, payload) {

    commit('EDIT_EMPLOYE', payload);
    let  headers = {
        'Content-Type': 'multipart/form-data',
          'Authorization': localStorage.getItem('Token'),
      }
    axios.put(`/api/employe/${payload.id}`, {data: payload.data, headers: headers})
    .catch(err=>{console.log(err)})
  }
}
