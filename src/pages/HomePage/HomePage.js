import React from 'react'
import '../../css/HomePage.css';
import SliderCompoent from '../../components/SliderComponent/SliderCompoent';
import ImgSlider1 from '../../images/slider_1.jpg';
import ImgSlider2 from '../../images/slider_2.jpg';
import ImgSlider3 from '../../images/slider_4.jpg';
function HomePage() {

    return (
        <>
            {/* <section id="slider">
                <h2>SUPER VALUE DEALS</h2>
                <h4>On all products</h4>
                <p>Save more with coupons & up to 70% off!</p>
                <NavLink className='shop' to='/shop'>Shop Now</NavLink>
            </section> */}
            <SliderCompoent arrImages={[ImgSlider1, ImgSlider2, ImgSlider3]} />
        </>
    )
}

export default HomePage