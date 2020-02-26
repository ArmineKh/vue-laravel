import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export default {
    getCompanyes({commit, state}){
        axios.get('/api/company').then((response) => {
            commit('SET_COMPANYES', response.data)
        })
    },

    addCompany({commit, state}, payload) {
        commit({
            type:'ADD_COMPANY',
            data: payload
        });
        axios.request({
            url: '/api/company',
            method: 'POST',
            data: payload.data,
            config:{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('Token'),
                }
            },
        }).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    },

    deleteCompany ({commit}, id){
        commit('DELETE_COMPANY', id);
        axios.delete(`/api/company/${id}`);
    },

    updateCompany({commit}, payload) {
        commit('EDIT_COMPANY', payload);
        axios.post(`/api/company/${payload.id}`,payload.data)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{console.log(err)});

    }
}
