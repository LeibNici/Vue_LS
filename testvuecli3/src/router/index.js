//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home"
import About from "@/components/About"

//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routers = [
    {
        path: 'home',
        component: Home
    }, {
        path: 'about',
        component: About
    }
]
const router = new VueRouter({
    routers
})
export default router