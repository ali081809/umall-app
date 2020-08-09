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

// 首页轮播图信息
export const requestBanner=()=>{
    return axios({
        url:"/api/getbanner",
    })
}
// 获取限时秒杀信息(首页)
export const requestgetseckill=()=>{
    return axios({
        url:"/api/getseckill",
    })
}
//获取商品信息(首页)
export const requestgetGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
    })
}

//获取分类树形结构
export const requestgetFenlei=()=>{
    return axios({
        url:"/api/getcatetree",
    })
}
//获取分类商品
export const requestgetFenleigoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params:params
    })
}
// 获取一个商品信息
export const requestgetGoodsinfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params:params
    })
}