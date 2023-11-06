import React from 'react'
import SliderCompoent from '../../components/SliderComponent/SliderCompoent';
import ImgSlider1 from '../../images/slider_1.jpg';
import ImgSlider2 from '../../images/slider_2.jpg';
import ImgSlider3 from '../../images/slider_4.jpg';
import CollectionComponent from '../../components/CollectionComponent/CollectionComponent';
import FeaturesComponent from '../../components/Features/FeaturesComponent';

function HomePage() {

    return (
        <>
            <SliderCompoent arrImages={[ImgSlider1, ImgSlider2, ImgSlider3]} />
            <CollectionComponent />
            <FeaturesComponent />
        </>
    )
}

export default HomePage