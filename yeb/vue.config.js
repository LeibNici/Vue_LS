module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            ['/']: {
                ws:false,
                target: `https://console-mock.apipost.cn/app/mock/project/916f248a-1033-44e7-9170-337f4c72a33d/`,
                changeOrigin: true,
                pathRewrite: {
                    ["^/"]: "/"
                }
            }
        }
    }
}