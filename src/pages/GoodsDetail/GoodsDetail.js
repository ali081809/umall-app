import React, { Component } from 'react'
// 引入仓库 
import { goodsinfo, requestgetGoodsinfoAction, Cartadd, requestCartaddAction } from "../../store"
import { connect } from "react-redux"
// 引入弹框
import Alter from "../../util/Alert"

// 引入返回组件
import GoBack from "../../component/goBack"
import one from "../../assets/img/1.jpg"
import xin from "../../assets/img/keep.png"
import "./goodsDetail.css"
class GoodsDetail extends Component {
    constructor() {
        super()
        this.state = {
            n: 0,
            isshow: false,
            params: {
                uid: "",
                goodsid: "",
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
    // 点击购物车显示
    show() {
        this.setState({
            isshow: true
        })

    }
    // 规格属性变色
    changeN(index) {
        this.setState({
            n: index
        })
    }
    // 点击取消
    hide() {

        this.setState({
            isshow: false
        })
    }
    // 点击蒙版层消失
    maskClick(e) {
        e.stopPropagation()
    }



    // 点击加入购物车
    InputCart() {
        let uid = JSON.parse(localStorage.getItem("isLogin")).uid
        let id = this.props.match.params.id;
        this.setState({
            params: {
                ...this.state.params,
                uid: uid,
                goodsid: id
            }

        }, () => {
            this.props.requestCartadd(this.state.params);
            this.setState({
                isshow:false
            })
            Alter("添加成功！")
        })


    }
    render() {
        const { goodsinfo } = this.props
        const { isshow, n } = this.state
        // console.log(goodsinfo.specsattr)
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
                    <button onClick={this.show.bind(this)}>加入购物车</button>
                </div>
                {/* 详情加入购物车 */}
                {/* 蒙版层 */}
                {
                    isshow ? (<div className="Incart_con" onClick={() => this.hide()}>
                        <div className="Incart_con_main" onClick={this.maskClick.bind(this)}>
                            <div className="In_b_tit">
                                <img src={goodsinfo.img} alt="" />
                                <p>{goodsinfo.goodsname}</p>
                            </div>
                            <p className="specsname">{goodsinfo.specsname}</p>
                            <ul>
                                {
                                    goodsinfo.specsattr ? goodsinfo.specsattr.map((item, index) => {
                                        return <li onClick={() => this.changeN(index)} className={n === index ? "active" : ""} key={item}>{item}</li>

                                    }) : null
                                }
                            </ul>
                            <button onClick={this.InputCart.bind(this)}>加入购物车</button>
                        </div>

                    </div>) : null
                }
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
