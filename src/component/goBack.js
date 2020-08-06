import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class goBack extends Component {
    goBack(){
        // console.log(this.props)
        this.props.history.goBack(-1)
    }
    render() {
        return (
            <div>
                <button onClick={this.goBack.bind(this)}>返回</button>
            </div>
        )
    }
}
// withRouter让路由组件变成路由组件
export default withRouter(goBack)