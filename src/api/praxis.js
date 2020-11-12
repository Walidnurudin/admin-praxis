import Api from './index';

export const login = function(data){
    return Api.post('/api/users/login', data)
}

export const getPeserta = function(headers){
    return Api.get('/api/peserta/get', headers)
}
export const deletePeserta = function(headers,id){
    return Api.delete(`/api/peserta/${id}/delete`,headers)
}
export const detailPeserta = function(id,headers){
    return Api.get(`/api/peserta/${id}`,headers)
}