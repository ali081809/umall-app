import React, { Component } from 'react'
// 引入仓库 
import { goodsinfo, requestgetGoodsinfoAction, Cartadd, requestCartaddAction } from "../../store"
import { connect } from "react-redux"

// 引入返回组件
import GoBack from "../../component/goBack"
import one from "../../assets/img/1.jpg"
import xin from "../../assets/img/keep.png"
import "./goodsDetail.css"
class GoodsDetail extends Component {
    constructor() {
        super()
        this.state = {
            params: {
                uid: null,
                goodsid: null,
                num: 1
            }
        }
    }
    // 进入页面发起请求
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.requestGoodsinfo(id)
    }
    // 获取用户id

    // 点击加入购物车
    InputCart() {
        // const{uid,id}=this.state
        let uid = JSON.parse(localStorage.getItem("isLogin")).uid
        let id = this.props.match.params.id;

        this.setState({
            params: {
                ...this.state.params,
                uid: uid,
                id: id
            }

        })
        console.log("1122", this.state.params.uid)
        console.log(this.state.params)
        this.props.requestCartadd(this.state.params)

    }
    render() {
        const { goodsinfo } = this.props
        return (
            <div className="goodsDetail">
                <header>
                    <GoBack className="goback"></GoBack>
                    <h2>商品详情</h2>
                </header>
                <div className="con">
                    <div className="con_img">
                        <img src={goodsinfo.img} alt="" />
                    </div>
                    <div className="con_title">
                        <p className="con_title_p">{goodsinfo.goodsname}</p>
                        <div className="con_t_right">
                            <img src={xin} alt="" />
                            <p>收藏</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="price_one">{"￥" + goodsinfo.price}</span>
                        <span className="price_box">{goodsinfo.ishot === 1 ? "热卖" : ""}</span>
                        <span className="price_box">{goodsinfo.isnew === 1 ? "新品" : ""}</span>
                    </div>
                    <p className="noprice">{"￥" + goodsinfo.market_price}</p>
                </div>
                <hr />
                <div className="b_img">
                    {/* {JSON.parse(goodsinfo.description)} */}
                    <div dangerouslySetInnerHTML={{ __html: goodsinfo.description }}></div>
                </div>
                {/* 加入购物车 */}
                <div className="Incart">
                    <button onClick={this.InputCart.bind(this)}>加入购物车</button>
                </div>
            </div>
        )
    }
}

// 定义属性方法
const mapStateToProps = (state) => {
    return {
        goodsinfo: goodsinfo(state),
        Cartadds: Cartadd(state),
    }
}


// 定义函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestGoodsinfo: (id) => {
            dispatch(requestgetGoodsinfoAction(id))
        },
        requestCartadd: (params) => {
            dispatch(requestCartaddAction(params))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail)
