// 将redux-thunk引入，注入到仓库的中间件中,applyMiddleware是中间件
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
// 引入请求接口
import { requestBanner, requestgetGoods, requestgetFenlei, requestgetFenleigoods, requestgetGoodsinfo, requestCartadd, requestCartList, requestCardelete, requestCaredit } from "../util/request"

// 初始化状态
const initStart = {
    // 轮播图列表
    banners: [],
    // 商品列表
    goods: [],
    // 分类列表
    fenleis: [],
    // 分类商品
    fenleigoods: [],
    // 一条商品信息
    goodsinfo: {},
    // 购物车添加
    Cartadd: {},
    //购物车列表
    CartList: [],
    // 购物车删除
    Cartdel: {},
    // 是否全选
    isAll: false
}

// 轮播图页面逻辑操作
const changeBannerAction = (arr) => {
    return { type: "changeBanner", bannerlist: arr }
}
// 商品列表页面逻辑操作
const changeGoodsAction = (arr) => {
    return { type: "changeGoods", goodsList: arr }
}
// 分类页面逻辑操作
const changeFenleiAction = (arr) => {
    return { type: "changeFenlei", fenleiList: arr }
}
// 分类商品页面逻辑操作
const changeFenleigoodsAction = (arr) => {
    return { type: "changeFenleigoods", fenleigoodsList: arr }
}
// 一条商品页面逻辑操作
const changeGoodsinfoAction = (obj) => {
    return { type: "changeGoodsinfo", goodsinfoList: obj }
}
// 购物车添加页面逻辑
const changeCartaddAction = (obj) => {
    return { type: "changeCartadd", CartaddList: obj }
}
// 购物车列表页面逻辑
const changeCartListAction = (arr) => {
    return { type: "changeCartList", CartList: arr }
}
// 购物车删除页面逻辑操作
const changeCartDelAction = (obj) => {
    return { type: "changeCartdel", CartdelList: obj }
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
export const requestGoodsAction = () => {
    return (dispatch, getState) => {
        requestgetGoods().then(res => {
            dispatch(changeGoodsAction(res.data.list[0].content))
        })
    }
}

// 分类列表发起请求
export const requestFenleiAction = () => {
    return (dispatch, getState) => {
        //缓存层  判断是否有数据，有数据了就不再二次发起请求
        const { fenleis } = getState()
        if (fenleis.length > 0) {
            return;
        }
        requestgetFenlei().then(res => {
            dispatch(changeFenleiAction(res.data.list))
        })
    }
}
// 分类商品发起请求
export const requestgetFenleigoodsAction = (id) => {
    return (dispatch, getState) => {
        requestgetFenleigoods({ fid: id }).then(res => {
            dispatch(changeFenleigoodsAction(res.data.list))
        })
    }
}
// 一条商品发起请求
export const requestgetGoodsinfoAction = (id) => {
    return (dispatch, getState) => {
        requestgetGoodsinfo({ id: id }).then(res => {
            const detail = res.data.list[0];
            detail.specsattr = JSON.parse(detail.specsattr)
            dispatch(changeGoodsinfoAction(detail))
        })
    }
}
// 添加购物车发起请求
export const requestCartaddAction = (params) => {
    return (dispatch, getState) => {
        requestCartadd(params).then(res => {
            dispatch(changeCartaddAction(res.data))
        })
    }
}
// 购物车列表发起请求
export const requestCartListAction = (uid) => {
    return (dispatch, getState) => {

        requestCartList({ uid: uid }).then(res => {
            const CartList = res.data.list;

            dispatch(changeCartListAction(CartList))
        })
    }
}
// 购物车删除发起请求
export const requestCartDelAction = (id, uid) => {
    return (dispatch, getState) => {
        requestCardelete({ id: id }).then(res => {
            dispatch(requestCartListAction(uid))
        })
    }
}
// 购物车修改发起请求
export const requestCartDitAction = (params, uid) => {
    return (dispatch, getState) => {
        requestCaredit(params).then(res => {
            dispatch(requestCartListAction(uid))
        })
    }
}

// 选中单个购物车
export const changeChecked = (index) => {
    return {
        type: 'changeChecked',
        index
    }
}

// 全选购物车
export const changeCheckedAll = () => {
    return {
        type: 'changeCheckAll',
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
            return {
                ...state,
                goods: action.goodsList
            }
        // 分类树
        case "changeFenlei":
            // {type:"changeFenlei",fenleiList:arr}
            return {
                ...state,
                fenleis: action.fenleiList
            }
        // 分类商品
        case "changeFenleigoods":
            // {type:"changeFenleigoods",fenleigoodsList:arr}
            return {
                ...state,
                fenleigoods: action.fenleigoodsList
            }
        // 一条商品信息
        case "changeGoodsinfo":
            // {type:"changeGoodsinfo",goodsinfoList:obj}
            return {
                ...state,
                goodsinfo: action.goodsinfoList
            }
        // 购物车添加
        case "changeCartadd":
            // {type:"changeCartadd",CartaddList:obj}
            return {
                ...state,
                Cartadd: action.CartaddList
            }
        // 购物车列表
        case "changeCartList":
            // {type:"changeCartList",CartList:arr}
            let CartList;//新的购物车列表
            if (action.CartList) {
                CartList = [...action.CartList]
            }
            // let CartList=[...action.CartList];
            let oldelist = [...state.CartList]//旧的购物车列表
            if (CartList) {
                CartList.forEach((item, index) => {
                    if (oldelist.length > index) {
                        item.checked = oldelist[index].checked;
                    } else {
                        item.checked = false;
                    }

                })
            }
            return {
                ...state,
                CartList: CartList ? CartList : []
            }

        // 修改购物车全选
        case "changeCheckAll":
            return {
                ...state,
                isAll: !state.isAll,
                CartList: state.CartList.map(item => {
                    item.checked = !state.isAll;
                    return item;
                })

            }

        //修改购物车单个选中
        case "changeChecked":
            let list = [...state.CartList]
            list[action.index].checked = !list[action.index].checked;
            // console.log("11wwww",list[action.index])//单个单选框的数据
            // console.log("22wwww",state.CartList)//全部单选框的数据
            return {
                ...state,
                CartList: list,
                isAll: list.every(item => item.checked)
            }

        // 购物车删除
        case "changeCartdel":
            // {type:"changeCartdel",CartdelList:obj}
            return {
                ...state,
                Cartdel: action.CartdelList
            }
        default:
            return state
    }
}

// 导出数据
// 轮播图
export const banners = (state) => state.banners
// 商品列表
export const goodsList = (state) => state.goods
// 商品分类树形
export const fenleis = (state) => state.fenleis
// 分类商品
export const fenleigoods = (state) => state.fenleigoods
// 一条商品信息
export const goodsinfo = (state) => state.goodsinfo
// 购物车添加
export const Cartadd = (state) => state.Cartadd
// 购物车列表
export const CartList = (state) => state.CartList
// 购物车删除
export const Cartdel = (state) => state.Cartdel
// 是否全选
export const isAll = state => state.isAll;

// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk))

// 导出仓库
export default store