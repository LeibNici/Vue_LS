import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Home from "@/views/Home";
import Test1 from "@/views/Test1";
import test2 from "@/views/Test2";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login,
        hidden: true
    },
    {
        path: '/home',
        name: '导航一',
        component: Home,
        children: [
            {
                path: '/test1',
                name: '选项一',
                component: Test1
            },
            {
                path: '/test2',
                name: '选项二',
                component: test2
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
