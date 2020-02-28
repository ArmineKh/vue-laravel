import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export function getEmployes(url){
    return axios.get(url);
}

export function addEmploye(payload){
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

export function deleteEmploye(id){
    return axios.delete(`/api/employe/${id}`);
}

export function editEmploye(id){
    return axios.get(`/api/employe/update/${id}/`, id)
}

export function updateEmploye(payload){
    return axios.post(`/api/employe/${payload.id}`, payload.data)
}
