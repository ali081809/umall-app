import React, { Component } from 'react'
import { connect } from "react-redux"
import "./fenlei.css"
import { fenleis, requestFenleiAction } from "../../store"
class Fenlei extends Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    componentDidMount() {
        this.props.requestFenlei()
    }
    // 点击名称
    changeN(index) {
        this.setState({
            n: index
        })
    }

    // 点击跳到分类商品详情页
    toDetail(id,catename){
        this.props.history.push("/feileiDetail/"+id+"/"+catename)
    }

    render() {
        const { fenleis } = this.props
        const { n } = this.state

        return (
            <div className="fenlei">
                <header>分类</header>
                <div className="f_box">
                    <div className="f_p">
                        <ul>
                            {
                                fenleis.map((item, index) => {
                                    return (
                                        <li onClick={() => this.changeN(index)} className={n===index?"active":""} key={item.id}>{item.catename}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="f_c">
                        {

                            fenleis.length > 0 ? fenleis[n].children.map(i => {
                                return (
                                    <div onClick={()=>this.toDetail(i.id,i.catename)} className="f_img" key={i.id}>
                                        <img src={i.img} alt="" />
                                        <p>{i.catename}</p>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}


// 定义属性方法
const mapStateToProps = (state) => {
    return {
        fenleis: fenleis(state)
    }
}

// 定义函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestFenlei: () => dispatch(requestFenleiAction())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Fenlei)
