import {routes} from '../../../router.js';
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
      console.log(this);
      commit('DELETE_COMPANY', id);
      axios.delete(`/api/company/${id}`);
      routes.push({path:'/api/company'});

    },

    updateCompany({commit}, payload) {
      // return axios.post(`/api/company/${data.id}`, data.data);
      console.log(payload.data);

      commit('EDIT_COMPANY', payload);

      let  headers = {
          'Content-Type': 'multipart/form-data',
          'Authorization': localStorage.getItem('Token'),
        }

      axios.put(`/api/company/${payload.id}`, {data: payload.data, headers: headers}).catch(err=>{console.log(err)});

        // axios.request({
        //   url: `/api/company/${payload.id}`,
        //   method: 'PUT',
        //   data: payload.data,
        //   config:{
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       'Authorization': localStorage.getItem('Token'),
        //     }
        //   }
        // }).then(res=>{
        //   // console.log(res.data.data)
        // }).catch(err=>console.log(err))


      }
    }
