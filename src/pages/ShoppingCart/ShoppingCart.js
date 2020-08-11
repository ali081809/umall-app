import React, { Component } from 'react'
import "./cart.css"
// 引入弹框
import Alter from "../../util/Alert"
import GoBack from "../../component/goBack"
import cart from "../../assets/img/tab_shopping_nor.png"
import one from "../../assets/img/editor_nor.png"
import one1 from "../../assets/img/editor_hig.png"
import chedN from "../../assets/img/radio_nor.png"
import chedY from "../../assets/img/radio_hig.png"
import store from "../../assets/img/store.png"
import { connect } from "react-redux"
import { CartList, requestCartListAction, Cartdel, requestCartDelAction, requestCartDitAction, changeChecked, changeCheckedAll, isAll } from "../../store"
class ShoppingCart extends Component {
    constructor() {
        super()
        this.state = {
            // 总价
            Totalprice: "",
            // 删除按钮
            delshow: false,
            // 修改接口的参数
            params: {
                type: "",
                id: ""
            }

        }
    }
    componentDidMount() {
        const uid = JSON.parse(localStorage.getItem("isLogin")).uid
        // const uid = "df64e090-d641-11ea-9a11-358a1b0f30dc"
        this.props.requestCartList(uid)
    }
    // 点击删除出现
    delisshow() {
        this.setState(prevState => ({
            delshow: !prevState.delshow
        }))
    }

    // 点击删除按钮
    CartDel(id) {
        const uid = JSON.parse(localStorage.getItem("isLogin")).uid
        this.props.requestCartDel(id, uid);

    }
    // 点击-
    sub(item) {
        if (item.num < 2) {
            Alter("宝贝不能再少啦")
            return;
        }
        const uid = JSON.parse(localStorage.getItem("isLogin")).uid
        this.props.requestCartDit({ id: item.id, type: 1 }, uid)
    }

    // 点击+
    add(item) {
        const uid = JSON.parse(localStorage.getItem("isLogin")).uid
        this.props.requestCartDit({ id: item.id, type: 2 }, uid)

    }
    // // 选中
    // changePrice(index) {
    // this.props.changeCheckedGood(index)
    // }
    // 全选
    // changeAllPrice(e,CartList){
    //     this.props.changeCheckedAll();
    //     const val=e.target.checked;
    //     let sum=0;
    //     if(val){
    //         CartList.forEach(item=>{
    //             sum=item.num * item.price
    //         })
    //         this.setState({
    //             Totalprice:sum
    //         })
    //     }

    // }

    computedAllPrice() {
        let price = 0
        // if (!this.props.CartList.length) {
        //     return price
        // }
        this.props.CartList.forEach(item => {
            if (item.checked)
                price += item.num * item.price
        })
        return price
    }

    render() {
        const { CartList, changeCheckedGood, changeCheckedAll, isAll } = this.props
        const { delshow } = this.state
        // console.log(CartList)
        let checkedAll = true;

        if (CartList.some(item => !item.checked)) {
            // console.log("为啥",item.checked)
            checkedAll = !checkedAll
        }

        return (
            <div className="cart">
                <header>
                    <GoBack className="goback"></GoBack>
                    <h2>购物车</h2>
                </header>
                <div className="cart_con">

                    {

                        CartList.length === 0 ? <div className="cart_con_nocart">
                            <img src={cart} alt="" />
                            <p>购物车还是空的</p>
                            <p>快去逛逛吧~</p>
                        </div> : CartList.map((item, index) => {
                            return (
                                <div className="haveCart" key={item.id}>
                                    <img src={store} alt="" />
                                    <span className="c_tit">杭州保税区仓</span>
                                    <div className="haveCart_con">

                                        <img src={item.checked ? chedY : chedN} onClick={() => changeCheckedGood(index)} className="checked" alt="" />

                                        <img src={item.img} alt="" />
                                        <div className="goodsinfo">
                                            <p className="goodsTit">{item.goodsname}</p>
                                            <button onClick={this.sub.bind(this, item)}>-</button>
                                            <button>{item.num}</button>
                                            <button onClick={this.add.bind(this, item)}>+</button>
                                            <p className="Total">总价:{item.num * item.price}</p>
                                        </div>
                                        <span className="r_price">{"￥" + item.price}</span>
                                        {/* 删除按钮 */}
                                        {
                                            delshow ? <button onClick={this.CartDel.bind(this, item.id)} className="del">删除</button> : null
                                        }
                                    </div>


                                </div>
                            )
                        })
                    }

                </div>
                {/* 去结算 */}
                {
                    CartList.length === 0 ? null : <div className="Gotocart">
                        <div>
                            <img src={isAll ? chedY : chedN} onClick={() => changeCheckedAll()} alt="" />
                            {/* <input type="checkbox" checked={checkedAll} onChange={() => changeCheckedAll()} />
                            <p>全选</p> */}
                        </div>
                        <div onClick={this.delisshow.bind(this)}>
                            {delshow ? <img src={one1} alt="" /> : <img src={one} alt="" />}
                            <p>编辑</p>
                        </div>
                        <div>
                            <p>合计：{this.computedAllPrice()}</p>
                            <p>(不含运费)</p>
                        </div>
                        <button>去结算</button>
                    </div>}
            </div>
        )
    }
}

// 定义属性方法
const mapStateToProps = (state) => {
    return {
        CartList: CartList(state),
        Cartdel: Cartdel(state),
        isAll: isAll(state),
    }
}
// 定义函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestCartList: (uid) => {
            dispatch(requestCartListAction(uid))
        },
        requestCartDel: (id, uid) => {
            dispatch(requestCartDelAction(id, uid))
        },
        requestCartDit: (params, uid) => {
            dispatch(requestCartDitAction(params, uid))
        },
        changeCheckedGood: (index) => dispatch(changeChecked(index)),
        changeCheckedAll: () => dispatch(changeCheckedAll()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
