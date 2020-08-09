import React, { Component } from 'react'
import querystring from "querystring"
import { connect } from "react-redux"
// 导入返回按钮
import GoBack from "../../component/goBack"
import { fenleigoods, requestgetFenleigoodsAction } from "../../store"
import "./fenleiDetail.css"
class FenleiDetail extends Component {
    constructor() {
        super()
        this.state = {
            catename: ""
        }
    }

    componentDidMount() {
        // 获取分类传过来的id,动态路由
        const id = this.props.match.params.id
        // 分类商品的动态标题
        const catename = this.props.match.params.catename
        this.setState({
            catename: catename
        })

        // ？传参
        // const id=querystring.parse(this.props.location.search.slice(1)).id
        // 发起请求
        this.props.requestFenleigoods(id)
    }

    // 点击跳到详情页
    toGoodsDetail(id){
        this.props.history.push("/goodsDetail/"+id)
    }
    render() {
        const { fenleigoods } = this.props

        const { catename } = this.state

        return (
            <div className="fenleigoods">
                <header>
                    <GoBack className="goback"></GoBack>
                    <h2>{catename}</h2>
                </header>
                {
                    fenleigoods.map((item, index) => {
                        return (
                            <div onClick={()=>this.toGoodsDetail(item.id)} className="list_box" key={item.id}>
                                <img src={item.img} alt="" />
                                <div className="con">
                                    <h3>{item.goodsname}</h3>
                                    <div className="b_con">
                                        <p>{"￥" + item.price}</p>
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
}

// 定义属性方法
const mapStateToProps = (state) => {
    return {
        fenleigoods: fenleigoods(state),
    }
}

// 定义函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestFenleigoods: (id) => dispatch(requestgetFenleigoodsAction(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FenleiDetail)
