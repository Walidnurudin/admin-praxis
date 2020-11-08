import Api from './index';

export const login = function(data){
    return Api.post('/api/users/login', data)
}

export const deletePeserta = function(id, headers){
    return Api.delete(`/praxis/murid/delete/${id}`, headers)
}

export const getPeserta = function(){
    return Api.get('/api/peserta/get')
}

export const getFiles = function(headers){
    return Api.get('/praxis/data/list/files', headers)
}

export const downloadFiles = function(id, headers){
    return Api.post(`/praxis/data/download/${id}`, headers)
}
