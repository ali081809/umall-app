import React from 'react'
import "./list.css"
// 引入过滤器
import { filtersPirce } from "../../../../filter/filter"

export default function List(props) {
    const { goods, toDetail} = props;
    return (
        <div className="list">
            {
                goods.map(item => {
                    return (
                        <div onClick={()=>toDetail(item.id)} className="list_box" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="con">
                                <h3>{item.goodsname}</h3>
                                <div className="b_con">
                                    <p>{"￥"+item.price}</p>
                                    <button>立即抢购</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
