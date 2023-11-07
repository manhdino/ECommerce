import React from 'react'

import '../../css/CollectionComponent.css';
import img_collection_1 from '../../images/shoe3.jpg';
import img_collection_2 from '../../images/shoe2.jpg';
import img_collection_3 from '../../images/shoe6.jpg';
import img_collection_4 from '../../images/shoe1-2.jpg';
import { NavLink } from 'react-router-dom';
function CollectionComponent() {
    return (
        <section class="collection-wrap">
            <div class="collection-container">
                <h2 class="section-title">Popular Sales</h2>
                <ul class="collection-list">

                    <li>
                        <NavLink to='/shop' className="collection-card has-before hover:shine">

                            <h2 class="card-title-collection">Nike Air Force</h2>

                            <p class="card-text-collection">Starting at $17.99</p>

                            <NavLink to='/shop' className="btn-link">
                                <span class="span">Shop Now</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </NavLink>


                            <div class="has-bg-image" style={{
                                backgroundImage: `url(${img_collection_1})`
                            }}></div>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/shop' className="collection-card has-before hover:shine">

                            <h2 class="card-title-collection">Sneakers</h2>
                            <p class="card-text-collection">Starting at $87.99</p>

                            <NavLink to='/shop' className="btn-link">
                                <span class="span">Shop Now</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </NavLink>

                            <div class="has-bg-image" style={{
                                backgroundImage: `url(${img_collection_2})`
                            }}></div>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/shop' className="collection-card has-before hover:shine">

                            <h2 class="card-title-collection">Sports</h2>

                            <p class="card-text-collection">Starting at $87.99</p>

                            <NavLink to='/shop' className="btn-link">
                                <span class="span">Shop Now</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </NavLink>

                            <div class="has-bg-image" style={{
                                backgroundImage: `url(${img_collection_3})`
                            }}></div>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop' className="collection-card has-before hover:shine">

                            <h2 class="card-title-collection">Adidas</h2>

                            <p class="card-text-collection">Starting at $87.99</p>

                            <NavLink to='/shop' className="btn-link">
                                <span class="span">Shop Now</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </NavLink>

                            <div class="has-bg-image" style={{
                                backgroundImage: `url(${img_collection_4})`
                            }}></div>

                        </NavLink>
                    </li>



                </ul>

            </div>
        </section>
    )
}

export default CollectionComponent