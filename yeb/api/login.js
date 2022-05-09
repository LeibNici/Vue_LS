import {api} from "@/utils/request";

export function getCaptcha() {
    return api({
        url: '/captcha',
        method: 'get'
    })
}

export function myLogin(username,password){
    return api({
        url: '/myLogin',
        method: 'post',
        data: {
            username,password
        }
    })
}

export function getRoute(){
    return api({
        url: '/getRoute',
        method: 'get'
    })
}