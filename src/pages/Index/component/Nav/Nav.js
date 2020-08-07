import React from 'react'
import "./nav.css"
import logo from  "../../../../assets/img/img/home/logo.jpg"
export default function Nav() {
    return (
        <div className="nav">
            <img src={logo} alt=""/>
            <div className="findName">寻找商品</div>
        </div>
    )
}
