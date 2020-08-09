// 将redux-thunk引入，注入到仓库的中间件中,applyMiddleware是中间件
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
// 引入请求接口
import { requestBanner,requestgetGoods,requestgetFenlei,requestgetFenleigoods,requestgetGoodsinfo } from "../util/request"

// 初始化状态
const initStart = {
    // 轮播图列表
    banners: [],
    // 商品列表
    goods:[],
    // 分类列表
    fenleis:[],
    // 分类商品
    fenleigoods:[],
    // 一条商品信息
    goodsinfo:{}
}

// 轮播图页面逻辑操作
const changeBannerAction = (arr) => {
    return { type: "changeBanner", bannerlist: arr }
}
// 商品列表页面逻辑操作
const changeGoodsAction=(arr)=>{
    return {type:"changeGoods",goodsList:arr}
}
// 分类页面逻辑操作
const changeFenleiAction=(arr)=>{
    return {type:"changeFenlei",fenleiList:arr}
}
// 分类商品页面逻辑操作
const changeFenleigoodsAction=(arr)=>{
    return {type:"changeFenleigoods",fenleigoodsList:arr}
}
// 一条商品页面逻辑操作
const changeGoodsinfoAction=(obj)=>{
    return {type:"changeGoodsinfo",goodsinfoList:obj}
}

// 轮播图页面请求
export const requestBannerAction = () => {
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch, getState) => {
        //  轮播图发起请求
        requestBanner().then(res => {
            dispatch(changeBannerAction(res.data.list))
        })
    }
}

// 商品列表页面请求
export const requestGoodsAction=()=>{
    return(dispatch, getState)=>{
        requestgetGoods().then(res=>{
            dispatch(changeGoodsAction(res.data.list[0].content))
        })
    }
}

// 分类列表发起请求
export const requestFenleiAction=()=>{
    return(dispatch,getState)=>{
        //缓存层  判断是否有数据，有数据了就不再二次发起请求
        const {fenleis}=getState()
        if(fenleis.length>0){
            return;
        }
        requestgetFenlei().then(res=>{
            dispatch(changeFenleiAction(res.data.list))
        })
    }
}
// 分类商品发起请求
export const requestgetFenleigoodsAction=(id)=>{
    return (dispatch,getState)=>{
        requestgetFenleigoods({fid:id}).then(res=>{
            dispatch(changeFenleigoodsAction(res.data.list))
        })
    }
}
// 一条商品发起请求
export const requestgetGoodsinfoAction=(id)=>{
    return(dispatch,getState)=>{
        requestgetGoodsinfo({id:id}).then(res=>{
            dispatch(changeGoodsinfoAction(res.data.list[0]))
        })
    }
}


// reducer
const reducer = (state = initStart, action) => {
    switch (action.type) {
        // 轮播图
        case "changeBanner":
            //{type:"requestBanner",bannerlist:[{},{}]}
            // 首先拷贝一份state
            return {
                ...state,//拷贝
                banners: action.bannerlist
            }
            // 商品列表
        case "changeGoods":
             //{type:"changeGoods",goodsList:[{},{}]}
            return{
                ...state,
                goods:action.goodsList
            }
            // 分类树
        case "changeFenlei":
            // {type:"changeFenlei",fenleiList:arr}
            return{
                ...state,
                fenleis:action.fenleiList
            }
            // 分类商品
        case "changeFenleigoods":
             // {type:"changeFenleigoods",fenleigoodsList:arr}
            return{
                ...state,
                fenleigoods:action.fenleigoodsList
            }
            // 一条商品信息
        case "changeGoodsinfo":
             // {type:"changeGoodsinfo",goodsinfoList:obj}
            return{
                ...state,
                goodsinfo:action.goodsinfoList
            }
        default:
            return state
    }
}

// 导出数据
// 轮播图
export const banners = (state) => state.banners
// 商品列表
export const goodsList=(state)=>state.goods
// 商品分类树形
export const fenleis=(state)=>state.fenleis
// 分类商品
export const fenleigoods=(state)=>state.fenleigoods
// 一条商品信息
export const goodsinfo=(state)=>state.goodsinfo

// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk))

// 导出仓库
export default store