import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export function getEmployes(url){
    return new Promise((resolve, reject)=>{
        axios.get(url).then(res=>{
            if (res.status == 200) {
                resolve(res.data)
            }
        })
        .catch(err=>{reject(err)})
    })
}

export function addEmploye(payload){
    return new Promise((resolve, reject)=>{
        axios.request({
            url: '/api/employe',
            method:'POST',
            data: payload.data,
            config:{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('Token'),
                }
            }
        }).then(res=>{
            if (res.status == 201) {
                resolve(res.data)
            }
        }).catch(err=>{reject(err)})
    })
}

export function deleteEmploye(id){
    return new Promise((resolve, reject)=>{
        axios.delete(`/api/employe/${id}`)
        .then(res=>{
            if (res.status == 204) {
                resolve(res.data)
            }
        }).catch(err=>{reject(err)})
    })
}


export function updateEmploye(payload){
    return new Promise((resolve, reject)=>{
        axios.post(`/api/employe/${payload.id}`, payload.data)
        .then(res=>{
            if (res.status == 201) {
                resolve(res.data)
            }
        })
        .catch(err=>{reject(err)})
    })
}

export function getEmploye(url, id){
    return new Promise((resolve,reject)=>{
        axios.get(url).then(res=>{
            if (res.status == 200) {
                resolve(res.data)
            }
        }).catch(err=>{reject(err)})
    })
}
