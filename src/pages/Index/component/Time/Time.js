import React from 'react'
import "./time.css"
// 引入图片
import time from "../../../../assets//img/img/home/1.jpg"
export default function Time() {
    let arr = ["限时抢购", "积分商城", "联系我们", "商品分类"]
    return (
        <div className="time">
            {
                arr.map(item => {
                    return (
                        <div key={item} className="time_box">
                            <img src={time} alt="" />
                            <p>{item}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
