import {getRoute} from "../../api/login";

export const initMenu = (router, store) => {
    if (store.state.routers.length > 0) {
        return;
    }
    getRoute().then(res => {
        if (res) {
            let fmtRoutes = formatRoutes(res);
            router.addRoutes(fmtRoutes);
            store.commit('initRoutes',fmtRoutes);
        }
    })
}

export const formatRoutes = (routes) => {
    let fmtRoutes = [];
    routes.forEach(router => {
        let {
            path,
            component,
            name,
            children
        } = router;
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            name: name,
            children: children,
            component: () => {
                import('../views/' + component + '.vue')
            }
        }
        fmtRoutes.push(fmRouter);
    })
    return fmtRoutes;
}