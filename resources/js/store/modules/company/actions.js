import axios from 'axios';
import store from '../../../store'
import {router} from '../../../router.js'
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
        }).then(res=>{
            router.push({path:'/company'});
        })
        .catch(err=>{
                if (err.response.status == 422) {
                    let errors = err.response.data.errors
                    commit('ADD_COMPANY_FAILED', {errors})
                }
        });

    },

    deleteCompany ({commit}, id){
        companyServices.deleteCompany(id).then(res=>{
            commit('DELETE_COMPANY', id);
        }).catch(err=>{console.log(err)})
    },

    updateCompany({commit}, payload) {
        companyServices.updateCompany(payload).then(res=>{
            commit('EDIT_COMPANY', payload);
        }).then(res=>{
            router.push({path:'/company'});
        })
        .catch(err=>{
                if (err.response.status == 422) {
                    let errors = err.response.data.errors
                    commit('UPDATE_COMPANY_FAILED', {errors})
                }
        });
    },

    getCompany({commit}, payload){
        companyServices.getCompany(payload.url, payload.id)
        .then((res)=>{
            commit('GET_COMPANY', res)
        }).catch(err=>console.error(err))
    }
}
