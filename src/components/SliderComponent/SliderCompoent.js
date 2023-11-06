import React from 'react';
import Slider from "react-slick";
function SliderCompoent({ arrImages }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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