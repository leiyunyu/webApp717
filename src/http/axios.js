import Vue from 'vue';
import axios from 'axios';
import { getCookie } from '../until/until.js';
if(process.env.NODE_ENV=="development"){
    axios.defaults.baseURL = 'http://localhost:3000';
};
if(process.env.NODE_ENV=="production"){
    axios.defaults.baseURL = 'http://www.lb717.com';
};
let httpPlugin = {
    install:function(Vue){
        let axiosCase1 = axios.create();
        let axiosCase2 = axios.create({
            headers: {'Authorization': ''}
        });
        axiosCase2.interceptors.request.use(function(config){
            let token = getCookie('token');
            config.headers.Authorization = token;
            // console.log(config);
            return config;
        }, function (error) {
            return Promise.reject(error);
        })
        Object.defineProperty(Vue.prototype, '$http', {
            value: axiosCase1
        })
        Object.defineProperty(Vue.prototype, '$http_token', {
            value: axiosCase2
        })
    }
};
Vue.use(httpPlugin);