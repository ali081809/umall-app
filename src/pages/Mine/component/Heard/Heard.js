import React from 'react'
import "./heard.css"
import left from "../../../../assets/img/set.png"
import right from "../../../../assets/img/news.png"
import man from "../../../../assets/img/1.jpg"

export default function Heard() {
    return (
        <div className="head">
            <header>
                <img src={left} alt=""/>
                <h2>个人中心</h2>
                <img src={right} alt=""/>
            </header>
            <div className="man">
                <img src={man} alt=""/>
            </div>
           
        </div>
    )
}
