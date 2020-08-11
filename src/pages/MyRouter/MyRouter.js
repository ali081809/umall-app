import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom"
export default class MyRouter extends Component {
    render() {
        let isLogin=localStorage.getItem("isLogin")
        return (
            <div>
                {
                    isLogin?<Route {...this.props}></Route>:<Redirect to="/login"></Redirect>
                }
            </div>
        )
    }
}
