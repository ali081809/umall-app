import React from 'react'
import "./my.css"
import xin from "../../../../assets/img/keep.png"
export default function My() {
    return (
        <div className="my">
            <div className="my_box">

                <div className="my_b">
                <img src={xin} alt="" /><span>我的收藏（5）</span>
                </div>
                </div>
        </div>
    )
}
