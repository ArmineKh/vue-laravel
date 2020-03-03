import * as authServices from '../../../Services/authServices.js';
import {router} from '../../../router.js'
export default {
    login({commit}, payload){
        commit("LOGIN");
        authServices.login(payload)
        .then(res => {
            localStorage.setItem('Token', 'Bearer ' + res.access_token)
            commit('LOGIN_SUCCESS', res);
            router.push({path: '/dashboard'});
        })
        .catch(error => {
            commit("LOGIN_FAILED", {error});
        })
    },
    registerUser({commit}, payload){
        authServices.registerUser(payload)
        .then(res => {
            commit("REGISTER_SUCCESS", res);
            router.push({path: '/login'});
        })
        .catch(error => {
            commit("REGISTER_FAILED", {error});
        })
    }
};
