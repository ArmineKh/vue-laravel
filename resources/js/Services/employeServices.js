import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export function getEmp(url){
    return axios.get(url);
}

export function addEmp(payload){
    return axios.request({
        url: '/api/employe',
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

export function deleteEmp(id){
    return axios.delete(`/api/employe/${id}`);
}

export function editEmp(id){
    return axios.get(`/api/employe/update/${id}/`, id)
}

export function updateEmp(payload){
    return axios.post(`/api/employe/${payload.id}`, payload.data)
}
