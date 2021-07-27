import axios from 'axios';
import api from '@/config/api';
const instance = axios.create({
    baseURL: `${api.domain}/api/`,
    timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    if(token){
        config.headers.Authorizations = token;
    }
    if(config.url.indexOf('upload') > -1){
        config.headers.ContentType = 'multipart/form-data'
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (res) {
    const { data, status } = res;
    if(data && status === 200) {
        return data;
    }else{
        Promise.reject(data);
    }
}, function (error) {
    console.log(error);
});


export default instance;
