import React from 'react'
import FeaturesComponent from '../../components/FeaturesComponent/FeaturesComponent';
import ProductsComponent from '../../components/ProductsComponent/ProductsComponent';
import BannerComponent from '../../components/BannerComponent/BannerComponent';

function HomePage() {

    return (
        <>
            <BannerComponent />
            <ProductsComponent />
            <FeaturesComponent />
        </>
    )
}

export default HomePage