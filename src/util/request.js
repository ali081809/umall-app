import axios from "axios"
import qs from "qs"

// 响应拦截
axios.interceptors.response.use(res=>{
    console.log("本次路径为：",res.config.url)
    console.log(res)
    return res
})

// 会员登录
export const rqusestLogin=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}
// 会员注册
export const rqusestRegister=(data)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(data)
    })
}