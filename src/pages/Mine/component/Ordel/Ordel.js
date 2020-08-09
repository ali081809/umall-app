import React from 'react'
import "./ordel.css"
import img from "../../../../assets/img/icon_refund.png"
export default function Ordel() {
    const arr = ["待发货", "待收货", "代签收", "代付款", "查看订单"]
    return (
        <div className="ordel">
            <div className="ordel_top">
                <p>我的订单</p>
                <a href="#">查看订单</a>
            </div>
            <hr />
            <div className="ordel_list">
                <ul>
                    {
                        arr.map(item => {
                            return <li key={item}>
                                <img src={img} alt="" />
                                <p>{item}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="address">
                收货地址管理
            </div>
        </div>
    )
}
