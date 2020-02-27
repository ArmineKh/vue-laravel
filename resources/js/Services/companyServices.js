import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export function getComp(url){
    return axios.get(url);
}

export function addComp(payload){
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

export function deleteComp(id){
    return axios.delete(`/api/company/${id}`);
}


export function updateComp(payload){
    return axios.post(`/api/company/${payload.id}`, payload.data)
}
