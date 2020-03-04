import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Token');

export function getCompanyes(url){
    return new Promise((resolve, reject)=>{
        axios.get(url).then(res=>{
            if (res.status == 200) {
                resolve(res.data)
            }
        })
        .catch(err=>{reject(err)})
    })
}

export function addCompany(payload){
    return new Promise((resolve, reject)=>{
        axios.request({
            url: '/api/company',
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
        }).catch(err=>{reject("The company didn't created.. try again later.")})
    })
}

export function deleteCompany(id){
    return new Promise((resolve, reject)=>{
        axios.delete(`/api/company/${id}`).then(res=>{
            if (res.status == 204) {
                resolve(res.data)
            }
        })
        .catch(err=>{reject(err)})
    })
}

export function updateCompany(payload){
    return new Promise((resolve, reject)=>{
        axios.post(`/api/company/${payload.id}`, payload.data)
        .then(res=>{
            if (res.status == 201) {
                resolve(res.data)
            }
        })
        .catch(err=>{reject("The company didn't updated.. try again later.")})
    })
}

export function getCompany(url, id){
    return new Promise((resolve, reject)=>{
        axios.get(url).then(res=>{
            if (res.status == 200) {
                resolve(res.data)
            }
        }).catch(err=>{reject(err)})

    })
}
