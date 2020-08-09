import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./login.css"
// 引入请求接口
import {rqusestLogin} from "../../util/request"
// 引入弹框
import Alert from "../../util/Alert"
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
            }
        }
    }
    // 修改表单
    changeUser(key,e){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    // 点击登录
    login(){
        rqusestLogin(this.state.user).then(res=>{
            if(res.data.code===200){
                // 设置登录的标志
                localStorage.setItem("isLogin",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            }else{
                Alert(res.data.msg)
            }
        })
    }
    render() {
        const {user}=this.state
        return (
            <div className="login">
                <header>
                    <h2>登录</h2>
                    <NavLink to="/reg">注册</NavLink>
                </header>
                <div className="userBox">
                    <div className="username">
                        账号：<input type="text" value={user.phone} onChange={this.changeUser.bind(this,"phone")} />
                    </div>
                    <div className="username">
                        密码：<input type="text" value={user.password} onChange={this.changeUser.bind(this,"password")} />
                    </div>
                    <div className="rember">
                        <a href="#" className="rember_a">忘记密码</a>
                    </div>
                </div>
                <div className="btn" onClick={this.login.bind(this)}>登录</div>
            </div>
        )
    }
}
