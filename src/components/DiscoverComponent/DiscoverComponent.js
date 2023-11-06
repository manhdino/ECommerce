import React from 'react'
import imgBlog1 from '../../images/blog-1.jpg';
import imgBlog2 from '../../images/blog-2.jpg';
import imgBlog3 from '../../images/blog-3.jpg';
import '../../css/DiscoverComponent.css';
import { NavLink } from 'react-router-dom';
export default function DiscoverComponent() {
    return (
        <section class="section blog" id="blog" aria-label="blog" data-section>
            <div class="container">

                <h2 class="h2-large section-title">More to Discover</h2>

                <ul class="flex-list">

                    <li class="flex-item">
                        <NavLink to='/contact' className="blog-card">

                            <figure class="card-banner img-holder has-before hover:shine">
                                <img src={imgBlog1} width="500" height="400" loading="lazy" alt="Find a Store"
                                    class="img-cover" />
                            </figure>

                            <h3 class="h3">
                                <a href="/" class="card-title">Find a Store</a>
                            </h3>

                            <a href="/" class="btn-link">
                                <span class="span">Our Location</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>

                        </NavLink>
                    </li>

                    <li class="flex-item">
                        <NavLink to='/blog' className="blog-card">

                            <figure class="card-banner img-holder has-before hover:shine"
                            >
                                <img src={imgBlog2} width="500" height="400" loading="lazy" alt="Find a Store"
                                    class="img-cover" />
                            </figure>

                            <h3 class="h3">
                                <a href="/" class="card-title">Want to know more?</a>
                            </h3>

                            <a href="/" class="btn-link">
                                <span class="span">Our Blog</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>

                        </NavLink>
                    </li>

                    <li class="flex-item">
                        <NavLink to='/contact' className="blog-card">

                            <figure class="card-banner img-holder has-before hover:shine">
                                <img src={imgBlog3} width="500" height="400" loading="lazy" alt="Find a Store"
                                    class="img-cover" />
                            </figure>

                            <h3 class="h3">
                                <a href="/" class="card-title">Why should choose us?</a>
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
