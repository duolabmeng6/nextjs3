import axios from 'axios'
import {c} from "./c";
import Router from "next/router";


const http = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000
})
// 添加请求拦截器
http.interceptors.request.use((config)=> {
    const token = c('token')
    console.log("token",token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.status === "success"){
        return response.data
    }else{
        if (response.data.code === 401001){
            Router.push('/login')
        }
        console.log(response.data.status)
        if (response.data.status === 0){
            return response.data
        }
        if (response.data.status === 200){
            return response.data
        }

        throw response
    }
}, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.status === 401) {
        // 删除token
        clearToken()
        // 跳转到登录页
        // history.push('/login')
    }
    return Promise.reject(error)
})

export { http }