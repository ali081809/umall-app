import React, { Component } from 'react'
// 引入仓库
import { banners, requestBannerAction, goodsList, requestGoodsAction } from "../../store"
// react-redux
import { connect } from "react-redux"
import "./index.css"
import Nav from "./component/Nav/Nav"
import List from "./component/List/List"
import Banner from "./component/Banner/Banner"
import Time from "./component/Time/Time"
class Index extends Component {

    // 引入页面就发起请求
    componentDidMount() {
        // 轮播图的请求
        this.props.requestBanner();
        // 商品列表请求
        this.props.requestgetGoods()


    }

    // 跳转到详情页
    changetoDetail(id){
        this.props.history.push("/goodsDetail/"+id)
    }
    render() {
        const { bannerlist, goodslist } = this.props
        // 遍历轮播图图片加前缀
        // bannerlist.forEach(item => {
        //     item.img = this.$img + item.img
        // })
        // // // 遍历商品图片加前缀
        // goodsList.forEach(item=>{
        //     item.img = this.$img + item.img
        // })
        return (
            <div className="index">
                <Nav></Nav>
                <Banner banners={bannerlist}></Banner>
                <Time></Time>
                <List goods={goodslist} toDetail={this.changetoDetail.bind(this)}></List>
               
            </div>
        )
    }
}

// 定义属性方法
const mapStateToProps = (state) => {
    return {
        bannerlist: banners(state),
        goodslist: goodsList(state)
    }

}

// 定义函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestBanner: () => {
            dispatch(requestBannerAction())
        },
        requestgetGoods: () => {
            dispatch(requestGoodsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)