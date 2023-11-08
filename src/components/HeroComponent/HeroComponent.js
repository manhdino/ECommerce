import React from 'react'
import '../../css/HeroComponent.css';
import imgHeroBanner from '../../images/hero-banner.png'
function HeroComponent() {
    return (
        <section class="hero-section" style={{ backgroundImage: `url(${imgHeroBanner})` }}>
            <div class="hero-container">

                <h2 class="h1 hero-title">
                    New Summer <strong>Shoes Collection</strong>
                </h2>

                <p class="hero-text">
                    Every well-dressed man should be well-heeled and even more so in summer
                </p>

                <button class="btn btn-primary">
                    <span>Shop Now</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </button>

            </div>
        </section>
    )
}

export default HeroComponent