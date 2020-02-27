import axios from 'axios';
import {getComp} from '../../../Services/companyServices';
import {addComp} from '../../../Services/companyServices';
import {deleteComp} from '../../../Services/companyServices';
import {editComp} from '../../../Services/companyServices';
import {updateComp} from '../../../Services/companyServices';

export default {
    getCompanyes({commit, state}){
        return new Promise((resolve, rej)=>{
            getComp('/api/company').then(res=>{
                commit('SET_COMPANYES', res.data)
                resolve(res.data)
            }).catch(err=>{reject(err)})
        })
    },

    addCompany({commit, state}, payload) {
        return new Promise((resolve, rej)=>{
            addComp(payload).then(res=>{
                commit({
                    type:'ADD_COMPANY',
                    data: payload
                });
                resolve(res.data)
            }).catch(err=>{reject(err)})
        })
    },

    deleteCompany ({commit}, id){
        return new Promise((resolve, rej)=>{
            deleteComp(id).then(res=>{
                commit('DELETE_COMPANY', id);
            }).catch(err=>{reject(err)})
        })
    },

    updateCompany({commit}, payload) {
        return new Promise((resolve, rej)=>{
            updateComp(payload).then(res=>{
                commit('EDIT_COMPANY', payload);
                resolve(res.data);
            }).catch(err=>{reject(err)})
        })
    }
}
