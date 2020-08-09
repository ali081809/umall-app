import React, { Component } from 'react'
// 引入路由
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
// 引入图片
import home1 from "../../assets/img/img/home.png"
import home2 from "../../assets/img/img/home_on.png"
import cart1 from "../../assets/img/img/cart.png"
import cart2 from "../../assets/img/img/cart_on.png"
import me1 from "../../assets/img/img/me.png"
import me2 from "../../assets/img/img/me_on.png"
import f1 from "../../assets/img/img/f.png"
import f2 from "../../assets/img/img/f_on.png"

import "./home.css"
// 引入二级路由的组件
import HomeI from "../Index/Index"
import Fenlei from "../Fenlei/Fenlei"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Mine from "../Mine/Mine"
export default class Home extends Component {
    render() {
        const{location}=this.props

        return (
            <div className="home">
                {/* 路由出口 */}
                <Switch>
                    <Route path="/index/home" component={HomeI}></Route>
                    <Route path="/index/fenlei" component={Fenlei}></Route>
                    <Route path="/index/shopcart" component={ShoppingCart}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    {/* 重定向 */}
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                {/* 底部固定的导航 */}
                <footer>

                    <NavLink to="/index/home" activeClassName="active">
                        {
                           location.pathname==="/index/home"? <img src={home2} alt="" /> : <img src={home1} alt="" />

                        }
                        首页
                        </NavLink>
                    <NavLink to="/index/fenlei" activeClassName="active">
                        {
                           location.pathname==="/index/fenlei"? <img src={f2} alt="" /> : <img src={f1} alt="" />

                        }
                        分类
                        </NavLink>
                    <NavLink to="/index/shopcart" activeClassName="active">
                    {
                           location.pathname==="/index/shopcart"? <img src={cart2} alt="" /> : <img src={cart1} alt="" />

                        }
                        购物车
                        </NavLink>
                    <NavLink to="/index/mine" activeClassName="active">
                    {
                           location.pathname==="/index/mine"? <img src={me2} alt="" /> : <img src={me1} alt="" />

                        }
                        我的</NavLink>
                </footer>
            </div>
        )
    }
}
