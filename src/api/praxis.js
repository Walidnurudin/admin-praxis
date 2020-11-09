import Api from './index';

export const login = function(data){
    return Api.post('/api/users/login', data)
}

export const getPeserta = function(headers){
    return Api.get('/api/peserta/get', headers)
}