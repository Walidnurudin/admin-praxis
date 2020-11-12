import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.1.38:3000'
    // baseURL: 'https://api-praxisacademy.netlify.app'
})

export default Api;