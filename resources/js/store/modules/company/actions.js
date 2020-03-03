import axios from 'axios';
import * as companyServices from '../../../Services/companyServices';

export default {
    getCompanyes({commit, state}){
        companyServices.getCompanyes('/api/company').then(res=>{
            commit('SET_COMPANYES', res)
        }).catch(err=>{console.log(err)})
    },

    addCompany({commit, state}, payload) {
        companyServices.addCompany(payload).then(res=>{
            commit({
                type:'ADD_COMPANY',
                data: payload
            });
        }).catch(err=>{console.log(err)})
    },

    deleteCompany ({commit}, id){
        companyServices.deleteCompany(id).then(res=>{
            commit('DELETE_COMPANY', id);
        }).catch(err=>{console.log(err)})
    },

    updateCompany({commit}, payload) {
        companyServices.updateCompany(payload).then(res=>{
            commit('EDIT_COMPANY', payload);
        }).catch(err=>{console.log(err)})
    },

    getCompany({commit}, payload){
        companyServices.getCompany(payload.url, payload.id)
        .then((res)=>{
            commit('GET_COMPANY', res)
        }).catch(err=>console.error(err))
    }
}
