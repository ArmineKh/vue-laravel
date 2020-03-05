import axios from 'axios';
import {router} from '../../../router.js'
import * as employeServices from '../../../Services/employeServices';


export default {
    getEmployes({commit, state}){
        employeServices.getEmployes('/api/employe').then(res=>{
            commit("SET_EMPLOYES", res);
        }).catch(err=>{console.log(err)})
    },

    addEmploye({commit, state}, payload) {
        employeServices.addEmploye(payload).then(res=>{
            commit({
                type: 'ADD_EMPLOYE',
                data: payload.data
            });
        }).then(res=>{
            router.push({path: '/employe'})
        }).catch(err=>{
            if (err.response.status == 422) {
                let errors = err.response.data.errors
                commit('ADD_EMPLOYE_FAILED', {errors})
            }
        })
    },

    deleteEmploye({commit}, id) {
        employeServices.deleteEmploye(id)
        .then(res=>{
            commit('DELETE_EMPLOYE', id);
        }).catch(err=>{console.log(err)})
    },

    updateEmploye({commit}, payload) {
        employeServices.updateEmploye(payload).then(res=>{
            commit('EDIT_EMPLOYE', payload);
        }).then(res=>{
            router.push({path:'/employe'});
        }).catch(err=>{
            if (err.response.status == 422) {
                let errors = err.response.data.errors
                commit('UPDATE_EMPLOYE_FAILED', {errors})
            }
        })
    },

    getEmploye({commit}, payload){
        employeServices.getEmploye(payload.url, payload.id)
        .then(res=>{
            commit('GET_EMPLOYE', res)
        }).catch(err=>{console.log(err)})
    }
}
