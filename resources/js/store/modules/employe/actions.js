import axios from 'axios';
import {getEmp} from '../../../Services/employeServices';
import {addEmp} from '../../../Services/employeServices';
import {deleteEmp} from '../../../Services/employeServices';
import {editEmp} from '../../../Services/employeServices';
import {updateEmp} from '../../../Services/employeServices';


export default {
    getEmployes({commit, state}){
        return new Promise((resolve, rej)=>{
            getEmp('/api/employe').then(res=>{
                commit("SET_EMPLOYES", res.data);
                resolve(res.data)
            }).catch(err=>{reject(err)})
        })
    },

    addEmploye({commit, state}, payload) {
        return new Promise((resolve, rej)=>{
            addEmp(payload).then(res=>{
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
            deleteEmp(id)
            .then(res=>{
                commit('DELETE_EMPLOYE', id);
            }).catch(err=>{reject(err)})
        })
    },

    updateEmploye({commit}, payload) {
        return new Promise((resolve, rej)=>{
            updateEmp(payload).then(res=>{
                commit('EDIT_EMPLOYE', payload);
                console.log(res.data)
                resolve(res.data);
            }).catch(err=>{reject(err)})
        })

    }
}
