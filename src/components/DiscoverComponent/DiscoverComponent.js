import React from 'react'
import imgBlog1 from '../../images/blog-1.jpg';
import imgBlog2 from '../../images/blog-2.jpg';
import imgBlog3 from '../../images/blog-3.jpg';
import '../../css/DiscoverComponent.css';
import { NavLink } from 'react-router-dom';
export default function DiscoverComponent() {
    return (
        <section class="blog-wrap" id="blog" aria-label="blog" data-section>
            <div class="blog-container">

                <h2 class="h2-large section-title">More to Discover</h2>

                <ul class="flex-list-discover">

                    <li class="flex-item-discover">
                        <NavLink to='/contact' className="blog-card">

                            <figure class="card-banner img-holder has-before hover:shine" >
                                <img src={imgBlog1} loading="lazy" alt="Find a Store"
                                    class="img-cover" />
                            </figure>

                            <h3 class="h3">
                                <a href="/" class="card-title-discover">Find a Store</a>
                            </h3>

                            <a href="/" class="btn-link">
                                <span class="span">Our Location</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>

                        </NavLink>
                    </li>

                    <li class="flex-item-discover">
                        <NavLink to='/blog' className="blog-card">

                            <figure class="card-banner img-holder has-before hover:shine" >
                                <img src={imgBlog2} loading="lazy" alt="From Our Blog"
                                    class="img-cover" />
                            </figure>

                            <h3 class="h3">
                                <a href="/" class="card-title-discover">Want to know more?</a>
                            </h3>

                            <a href="/" class="btn-link">
                                <span class="span">Our Blog</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>

                        </NavLink>
                    </li>

                    <li class="flex-item-discover">
                        <NavLink to='/contact' className="blog-card">

                            <figure class="card-banner img-holder has-before hover:shine"  >
                                <img src={imgBlog3} loading="lazy" alt="Our Story"
                                    class="img-cover" />
                            </figure>

                            <h3 class="h3">
                                <a href="/" class="card-title-discover">Why should choose us?</a>
                            </h3>

                            <a href="/" class="btn-link">
                                <span class="span">About us</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>

                        </NavLink>
                    </li>

                </ul>

            </div>
        </section>

    )
}
