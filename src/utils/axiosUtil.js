import axios from 'axios'

//请求拦截
axios.interceptors.request.use((req) => {
    // console.log('req',req)
    const token = localStorage.getItem('token');
    // console.log(token)
    if (token) {//给所有需要token的接口统一在请求头上添加token
        req.headers.token = token;
    }
    return req;
})


// 响应拦截器
axios.interceptors.response.use((res) => {
    return res.data
})