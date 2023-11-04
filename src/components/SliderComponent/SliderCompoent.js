import React from 'react';
import Slider from "react-slick";
function SliderCompoent({ arrImages }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            {
                arrImages.map((image) => {
                    return (
                        <img src={image} alt="slider" />
                    )
                })
            }
        </Slider>
    )
}

export default SliderCompoent