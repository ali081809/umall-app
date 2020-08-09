import React from 'react'
import "./nav.css"
import logo from  "../../../../assets/img/img/home/logo.jpg"
export default function Nav() {
    let name="";
    // function changeFind(e,key){
    //     key=e.target.value
    // }
    return (
        <div className="nav">
            <img src={logo} alt=""/>
            <div className="findName"><button className="input">寻找商品</button></div>
        </div>
    )
}
