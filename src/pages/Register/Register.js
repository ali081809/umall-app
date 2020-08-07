import React, { Component } from 'react'
// 引入请求接口
import { rqusestRegister } from "../../util/request"
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import GoBack from "../../component/goBack"
import "./register.css"
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        }
    }
    // 修改表单
    changeUser(key, e) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    // 重置
    empty() {
        this.setState({
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        })
    }
    // 弹框
    showToast(msg) {
        Toast.info(msg, 1);
    }
    // 点击注册
    register() {
        if (this.state.user.phone === "" || this.state.user.nickname === "" || this.state.user.password === "") {
            alert("属性不能为空！");
            return;
        }
        rqusestRegister(this.state.user).then(res => {
            console.log(this.state.user)
            if (res.data.code === 200) {
                this.empty()
                alert(res.data.msg);
                // this.showToast(res.data.msg)
                this.props.history.push("/login")
            }else{
                alert(res.data.msg)
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div className="reg">
                <header>
                    <h2>注册</h2>
                    <a href="#">返回</a>
                </header>
                <div className="userBox">
                    <div className="username">
                        手机号：<input type="text" value={user.phone} onChange={this.changeUser.bind(this, "phone")} />
                    </div>
                    <div className="username">
                        昵称：<input type="text" value={user.nickname} onChange={this.changeUser.bind(this, "nickname")} />
                    </div>
                    <div className="username">
                        密码：<input type="text" value={user.password} onChange={this.changeUser.bind(this, "password")} />
                    </div>
                </div>
                <div className="btn" onClick={this.register.bind(this)}>注册</div>
            </div>
        )
    }
}
