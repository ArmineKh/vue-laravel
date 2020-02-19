// import {routes} from '../../../router.js';
import axios from 'axios';

export default {

  addCompany({commit, state}, payload) {
    commit({
      type:'ADD_COMPANY',
      data: payload.data});
      axios.request({
        url: '/api/company',
        method: 'POST',
        data: payload.data,
        config:{
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem('Token'),
          }
        }
      }).then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
    },

    deleteCompany ({commit}, id){
      commit('DELETE_COMPANY', id);
      axios.delete(`/api/company/${id}`);
      // routes.push({path:'/api/company'});

    },

    updateCompany({commit}, payload) {
      commit('EDIT_COMPANY', payload);

      let config = {
        headers: {
           'Content-Type': 'multipart/form-data',
           'Authorization': localStorage.getItem('Token'),
         }
      }

      axios.post(`/api/company/${payload.id}`, payload.data, {emulateJSON: true})
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{console.log(err)});

      }
    }
