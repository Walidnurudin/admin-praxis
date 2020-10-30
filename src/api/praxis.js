import Api from './index';

// ADMIN
export const getUser = function(headers){
    return Api.get('/api/auth/user', headers);
}

export const login = function(data){
    return Api.post('/api/auth/signin', data)
}

// PESERTA
export const postPeserta = function(data){
    return Api.post('/praxis/murid/post', data)
}

export const deletePeserta = function(id, headers){
    return Api.delete(`/praxis/murid/delete/${id}`, headers)
}

export const getPeserta = function(headers){
    return Api.get('/praxis/murid/get', headers)
}

// KARYA
export const getKarya = function(){
    return Api.get('/praxis/karya/get')
}

export const postKarya = function(data){
    return Api.post('/', data)
}


// FILE
export const postFile = function(data, headers){
    return Api.post('/praxis/data/upload', data, headers)
}

export const getFiles = function(headers){
    return Api.get('/praxis/data/list/files', headers)
}

export const downloadFiles = function(id, headers){
    return Api.post(`/praxis/data/download/${id}`, headers)
}

// multipart
export const postFiles = function(data, headers){
    return Api.post('/praxis/data/uploads', data, headers)
}
