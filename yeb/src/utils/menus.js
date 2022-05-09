import {api} from "@/utils/request";
import router from "@/router";
import store from "@/store";
import {getRoute} from "../../api/login";

export const initMenu = (router, store) => {
    if (store.state.routers.length > 0) {
        return;
    }
    getRoute().then(res=> {
        if (res){

        }
    })
}