import React, { Component } from 'react'
import "./cart.css"
import GoBack from "../../component/goBack"
import cart from "../../assets/img/tab_shopping_nor.png"
import one from "../../assets/img/1.jpg"
import store from "../../assets/img/store.png"
import { connect } from "react-redux"
import { CartList, requestCartListAction } from "../../store"
class ShoppingCart extends Component {
    componentDidMount() {
        const uid=JSON.parse(localStorage.getItem("isLogin")).uid
        // const uid = "df64e090-d641-11ea-9a11-358a1b0f30dc"
        this.props.requestCartList(uid)
    }
    render() {
        const { CartList } = this.props
        console.log(CartList)
        return (
            <div className="cart">
                <header>
                    <GoBack className="goback"></GoBack>
                    <h2>购物车</h2>
                </header>
                <div className="cart_con">
                    <div className="haveCart">
                        <img src={store} alt=""/>
                        <span className="c_tit">杭州保税区仓</span>
                        <div className="haveCart_con">
                            <input type="checkbox"/>
                            <img src={one} alt=""/>
                            <div>
                                <p>是谁数据的</p>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <span>￥386.00</span>
                        </div>
                    </div>
                    {/* {
                        CartList ===null ?<div className="cart_con_nocart">
                            <img src={cart} alt="" />
                            <p>购物车还是空的</p>
                            <p>快去逛逛吧~</p>
                        </div>: <div></div>
                    } */}
                </div>
            </div>
        )
    }
}

// 定义属性方法
const mapStateToProps = (state) => {
    return {
        CartList: CartList(state)
    }
}
// 定义函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestCartList: (uid) => {
            dispatch(requestCartListAction(uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
