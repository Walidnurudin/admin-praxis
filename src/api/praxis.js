import Api from './index';

export const getUser = function(headers){
    return Api.get('/api/auth/user', headers);
}

export const login = function(data){
    return Api.post('/api/auth/signin', data)
}

export const deletePeserta = function(id, headers){
    return Api.delete(`/praxis/murid/delete/${id}`, headers)
}

export const getPeserta = function(headers){
    return Api.get('/praxis/murid/get', headers)
}

export const getFiles = function(headers){
    return Api.get('/praxis/data/list/files', headers)
}

export const downloadFiles = function(id, headers){
    return Api.post(`/praxis/data/download/${id}`, headers)
}
