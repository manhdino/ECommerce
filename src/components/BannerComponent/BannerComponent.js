import React from 'react'
import imgBanner1 from '../../images/banner/banner-1.jpg';
import imgBanner2 from '../../images/banner/banner-2.jpg';
import imgBanner3 from '../../images/banner/banner-3.jpg';
import '../../css/BannerComponent.css';
function BannerComponent() {
    return (
        <div class="banner">

            <div class="banner-container">

                <div class="slider-container has-scrollbar">

                    <div class="slider-item">

                        <img src={imgBanner1} alt="women's latest fashion sale" class="banner-img" />

                        <div class="banner-content">

                            <p class="banner-subtitle">Trending item</p>

                            <h2 class="banner-title">Women's latest fashion sale</h2>

                            <p class="banner-text">
                                starting at $<b>20</b>.00
                            </p>

                            <a href="/" class="banner-btn">Shop now</a>

                        </div>

                    </div>

                    <div class="slider-item">

                        <img src={imgBanner2} alt="modern sunglasses" class="banner-img" />

                        <div class="banner-content">

                            <p class="banner-subtitle">Trending accessories</p>

                            <h2 class="banner-title">Modern sunglasses</h2>

                            <p class="banner-text">
                                starting at $<b>15</b>.00
                            </p>

                            <a href="/" class="banner-btn">Shop now</a>

                        </div>

                    </div>

                    <div class="slider-item">

                        <img src={imgBanner3} alt="new fashion summer sale" class="banner-img" />

                        <div class="banner-content">

                            <p class="banner-subtitle">Sale Offer</p>

                            <h2 class="banner-title">New fashion summer sale</h2>

                            <p class="banner-text">
                                starting at $<b>29</b>.99
                            </p>

                            <a href="/" class="banner-btn">Shop now</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default BannerComponent