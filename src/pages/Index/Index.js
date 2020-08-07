import React, { Component } from 'react'
import Nav from "./component/Nav/Nav"
import List from "./component/List/List"
import Banner from "./component/Banner/Banner"
export default class Index extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Banner></Banner>
                <List></List>
            </div>
        )
    }
}
