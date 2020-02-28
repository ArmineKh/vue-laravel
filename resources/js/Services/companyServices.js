import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export function getCompanyes(url){
    return axios.get(url);
}

export function addCompany(payload){
    return axios.request({
        url: '/api/company',
        method:'POST',
        data: payload.data,
        config:{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('Token'),
            }
        }
    })
}

export function deleteCompany(id){
    return axios.delete(`/api/company/${id}`);
}


export function updateCompany(payload){
    return axios.post(`/api/company/${payload.id}`, payload.data)
}
