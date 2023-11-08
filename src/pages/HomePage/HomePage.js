import React from 'react'
import CollectionComponent from '../../components/CollectionComponent/CollectionComponent';
import FeaturesComponent from '../../components/FeaturesComponent/FeaturesComponent';
import DiscoverComponent from '../../components/DiscoverComponent/DiscoverComponent';
import HeroComponent from '../../components/HeroComponent/HeroComponent';

function HomePage() {

    return (
        <>
            <HeroComponent />
            <CollectionComponent />
            <FeaturesComponent />
            <DiscoverComponent />
        </>
    )
}

export default HomePage