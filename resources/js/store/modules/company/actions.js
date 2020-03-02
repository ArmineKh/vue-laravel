import axios from 'axios';
import * as companyServices from '../../../Services/companyServices';

export default {
    getCompanyes({commit, state}){
        return new Promise((resolve, rej)=>{
            companyServices.getCompanyes('/api/company').then(res=>{
                commit('SET_COMPANYES', res.data)
                resolve(res.data)
            }).catch(err=>{console.log(err)})
        })
    },

    addCompany({commit, state}, payload) {
        return new Promise((resolve, rej)=>{
            companyServices.addCompany(payload).then(res=>{
                commit({
                    type:'ADD_COMPANY',
                    data: payload
                });
                resolve(res.data)
            }).catch(err=>{console.log(err)})
        })
    },

    deleteCompany ({commit}, id){
        return new Promise((resolve, rej)=>{
            companyServices.deleteCompany(id).then(res=>{
                commit('DELETE_COMPANY', id);
            }).catch(err=>{console.log(err)})
        })
    },

    updateCompany({commit}, payload) {
        return new Promise((resolve, rej)=>{
            companyServices.updateCompany(payload).then(res=>{
                commit('EDIT_COMPANY', payload);
                resolve(res.data);
            }).catch(err=>{console.log(err)})
        })
    }
}
