import React, { Component } from 'react'

function Lazyloading(fn){
    class Zujian extends Component {
        constructor(){
            super()
            this.state={
                C:null
            }
        }
        componentDidMount(){
            fn().then(module=>{
               this.setState({
                C:module.default
               })
            })
        }
        render() {
            const {C}=this.state
            return (
                <div>
                    {
                        C?<C {...this.props}></C>:null
                    }
                </div>
            )
        }
    }
    return Zujian
}

export default Lazyloading