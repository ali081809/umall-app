import React from 'react'
import { Carousel } from "antd-mobile"
import "./banner.css"
export default function Banner(props) {
    const { banners } = props;
   
    return (

        <div className="banner">
            <Carousel>
                {
                    banners.map(item => {
                        return (

                            <img key={item.id} src={item.img} alt="" />


                        )
                    })
                }
            </Carousel>
        </div>
    )
}
