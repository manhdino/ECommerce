import React from 'react'
import '../../css/ProductsComponent.css';
import clothes_3 from '../../images/products/clothes-3.jpg'
import clothes_4 from '../../images/products/clothes-4.jpg'
import jacket_3 from '../../images/products/jacket-3.jpg'
import jacket_4 from '../../images/products/jacket-4.jpg'
import jacket_5 from '../../images/products/jacket-5.jpg'
import jacket_6 from '../../images/products/jacket-6.jpg'
import shirt_1 from '../../images/products/shirt-1.jpg'
import shirt_2 from '../../images/products/shirt-2.jpg'
function ProductsComponent() {
    return (

        <div class="product-container">
            <div class="container">
                <div class="product-box">

                    <div class="product-main">

                        <h2 class="title">New Products</h2>

                        <div class="product-grid">

                            <div class="showcase">

                                <div class="showcase-banner">

                                    <img src={jacket_3} alt="Mens Winter Leathers Jackets"
                                        width="300" class="product-img default" />
                                    <img src={jacket_4} alt="Mens Winter Leathers Jackets"
                                        width="300" class="product-img hover" />

                                    <p class="showcase-badge">15%</p>

                                    <div class="showcase-actions">

                                        <button class="btn-action">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="repeat-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="bag-add-outline"></ion-icon>
                                        </button>

                                    </div>

                                </div>

                                <div class="showcase-content">

                                    <a href="/" class="showcase-category">jacket</a>

                                    <a href="/">
                                        <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
                                    </a>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <p class="price">$48.00</p>
                                        <del>$75.00</del>
                                    </div>

                                </div>

                            </div>

                            <div class="showcase">

                                <div class="showcase-banner">
                                    <img src={shirt_1} alt="Pure Garment Dyed Cotton Shirt"
                                        class="product-img default" width="300" />
                                    <img src={shirt_2} alt="Pure Garment Dyed Cotton Shirt"
                                        class="product-img hover" width="300" />

                                    <p class="showcase-badge angle black">sale</p>

                                    <div class="showcase-actions">
                                        <button class="btn-action">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="repeat-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="bag-add-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>

                                <div class="showcase-content">
                                    <a href="/" class="showcase-category">shirt</a>

                                    <h3>
                                        <a href="/" class="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                                    </h3>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <p class="price">$45.00</p>
                                        <del>$56.00</del>
                                    </div>

                                </div>

                            </div>

                            <div class="showcase">

                                <div class="showcase-banner">
                                    <img src={jacket_5}
                                        alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img default" width="300" />
                                    <img src={jacket_6}
                                        alt="MEN Yarn Fleece Full-Zip Jacket" class="product-img hover" width="300" />

                                    <div class="showcase-actions">
                                        <button class="btn-action">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="repeat-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="bag-add-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>

                                <div class="showcase-content">
                                    <a href="/" class="showcase-category">Jacket</a>

                                    <h3>
                                        <a href="/" class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                                    </h3>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <p class="price">$58.00</p>
                                        <del>$65.00</del>
                                    </div>

                                </div>

                            </div>

                            <div class="showcase">

                                <div class="showcase-banner">
                                    <img src={clothes_3} alt="Black Floral Wrap Midi Skirt"
                                        class="product-img default" width="300" />
                                    <img src={clothes_4} alt="Black Floral Wrap Midi Skirt"
                                        class="product-img hover" width="300" />

                                    <p class="showcase-badge angle pink">new</p>

                                    <div class="showcase-actions">
                                        <button class="btn-action">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="repeat-outline"></ion-icon>
                                        </button>

                                        <button class="btn-action">
                                            <ion-icon name="bag-add-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>

                                <div class="showcase-content">
                                    <a href="/" class="showcase-category">skirt</a>

                                    <h3>
                                        <a href="/" class="showcase-title">Black Floral Wrap Midi Skirt</a>
                                    </h3>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <p class="price">$25.00</p>
                                        <del>$35.00</del>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductsComponent