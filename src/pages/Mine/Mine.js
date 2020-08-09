import React, { Component } from 'react'
import Heard from "./component/Heard/Heard"
import My from "./component/My/My"
import Ordel from "./component/Ordel/Ordel"
export default class Mine extends Component {
    render() {
        return (
            <div>
                <Heard></Heard>
                <My></My>
                <Ordel></Ordel>
            </div>
        )
    }
}
