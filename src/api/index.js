import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api-praxisacademy.herokuapp.com/'
})

export default Api;
