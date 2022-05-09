import axios from "axios";
import {Message} from "element-ui";

axios.interceptors.request.use(config => {
    if (window.sessionStorage.getItem("tokenStr")) {
        config.headers['Authorization'] = window.sessionStorage.getItem("tokenStr")
    }
    return config;
}, error => {
    console.log(error);
})

axios.interceptors.response.use(success => {
    const code = success.data.code;
    if (code === 500) {
        Message.error({message: success.data.message})
        return Promise.reject(data.message)
    }
    if (success.data.message) {
        Message.success({message: success.data.message})
    }
    return success.data;

}, error => {
    return Promise.reject(error)
})

export const api = (request) => {
    return axios({
        method: request.method,
        url: request.url,
        params: request.data
    })
}