import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api-praxisacademy.netlify.app'
})

export default Api;
