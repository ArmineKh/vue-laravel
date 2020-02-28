import axios from 'axios';
import * as employeServices from '../../../Services/employeServices';


export default {
    getEmployes({commit, state}){
        return new Promise((resolve, rej)=>{
            employeServices.getEmployes('/api/employe').then(res=>{
                commit("SET_EMPLOYES", res.data);
                resolve(res.data)
            }).catch(err=>{reject(err)})
        })
    },

    addEmploye({commit, state}, payload) {
        return new Promise((resolve, rej)=>{
            employeServices.addEmploye(payload).then(res=>{
                commit({
                    type: 'ADD_EMPLOYE',
                    data: payload.data
                });
                resolve(res.data)
            }).catch(err=>{reject(err)})
        })
    },

    deleteEmploye({commit}, id) {
        return new Promise((resolve, rej)=>{
            employeServices.deleteEmploye(id)
            .then(res=>{
                commit('DELETE_EMPLOYE', id);
            }).catch(err=>{reject(err)})
        })
    },

    updateEmploye({commit}, payload) {
        return new Promise((resolve, rej)=>{
            employeServices.updateEmploye(payload).then(res=>{
                commit('EDIT_EMPLOYE', payload);
                resolve(res.data);
            }).catch(err=>{reject(err)})
        })

    }
}
