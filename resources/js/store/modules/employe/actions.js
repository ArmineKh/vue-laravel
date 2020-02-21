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
    console.log(res)
  }).catch(err=>console.log(err))

  },

  deleteEmploye({commit}, id) {
    commit('DELETE_EMPLOYE', id);
    axios.delete(`/api/employe/${id}`);
  },
  editEmploye(ctx, id) {
    return axios.get(`/api/employe/update/${id}/`, id).then(response =>{
        console.log(response);
    }).catch(err => reject(err));
  },

  updateEmploye({commit}, payload) {
    commit('EDIT_EMPLOYE', payload);
    axios.post(`/api/employe/${payload.id}`, payload.data)
    .catch(err=>{console.log(err)})
  }
}
