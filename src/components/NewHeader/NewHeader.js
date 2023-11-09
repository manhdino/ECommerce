import React from 'react'
import logo from '../../images/logo.svg';
import '../../css/NewHeader.css';
function NewHeader({ children }) {
    return (
        <>
            <div class="overlay"></div>
            <header>

                <div class="header-top">

                    <div class="header-container">

                        <ul class="header-social-container">

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                        <div class="header-alert-news">
                            <p>
                                <b>Free Shipping</b>
                                This Week Order Over - $55
                            </p>
                        </div>

                        <div class="header-top-actions">

                            <select name="currency">

                                <option value="usd">USD $</option>
                                <option value="eur">EUR &euro;</option>

                            </select>

                            <select name="language">

                                <option value="en-US">English</option>
                                <option value="fr">France</option>

                            </select>

                        </div>

                    </div>

                </div>

                <div class="header-main">

                    <div class="header-container">

                        <a href="/" class="header-logo">
                            <img src={logo} alt="Anon's logo" width="120" height="36" />
                        </a>

                        <div class="header-search-container">

                            <input type="search" name="search" class="search-field"
                                placeholder="Enter your product name..." />

                            <button class="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>

                        </div>

                        <div class="header-user-actions">

                            <button class="action-btn">
                                <ion-icon name="person-outline"></ion-icon>
                            </button>

                            <button class="action-btn">
                                <ion-icon name="heart-outline"></ion-icon>
                                <span class="count">0</span>
                            </button>

                            <button class="action-btn">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                                <span class="count">0</span>
                            </button>

                        </div>

                    </div>

                </div>

                <nav class="desktop-navigation-menu">

                    <div class="header-container">

                        <ul class="desktop-menu-category-list">

                            <li class="menu-category">
                                <a href="/" class="menu-title">Home</a>
                            </li>

                            <li class="menu-category">
                                <a href="/" class="menu-title">Categories</a>

                                <div class="dropdown-panel">

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="/">Dress Shoes</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Oxford</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Loafer</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Boots</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Sneaker</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Sandals</a>
                                        </li>



                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="/">Sport Shoes</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Running</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Golf</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Tennis</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Boating</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Casual</a>
                                        </li>



                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="/">Accessories</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Belts</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Bags-Wallet</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Dress Socks</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Care Products</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Gift Card</a>
                                        </li>



                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="/">Collection</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Premium Line</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Wedding Shoes</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">The New Gen</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Timeless</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="/">Gross Collection</a>
                                        </li>
                                    </ul>


                                </div>
                            </li>

                            <li class="menu-category">
                                <a href="/" class="menu-title">Stores</a>
                            </li>
                            <li class="menu-category">
                                <a href="/" class="menu-title">Services</a>
                            </li>
                            <li class="menu-category">
                                <a href="/" class="menu-title">About</a>
                            </li>
                            <li class="menu-category">
                                <a href="/" class="menu-title">Blog</a>
                            </li>
                            <li class="menu-category">
                                <a href="/" class="menu-title">Hot Offers</a>
                            </li>

                        </ul>

                    </div>

                </nav>

                <div class="mobile-bottom-navigation">

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="home-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>

                </div>

                <nav class="mobile-navigation-menu  has-scrollbar">

                    <div class="menu-top">
                        <h2 class="menu-title">Menu</h2>

                        <button class="menu-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul class="mobile-menu-category-list">

                        <li class="menu-category">
                            <a href="/" class="menu-title">Home</a>
                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Dress Shoes</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Oxford</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Loafer</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Sneakers</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Sandals</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Sport Shoes</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Running</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Golf</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Tennis</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Boating</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Collection</p>
                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Premium Line</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Wedding Shoes</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">The New Gen</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Timeless</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">About</p>
                            </button>
                        </li>

                        <li class="menu-category">
                            <a href="/" class="menu-title">Blog</a>
                        </li>

                        <li class="menu-category">
                            <a href="/" class="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                    <div class="menu-bottom">

                        <ul class="menu-category-list">

                            <li class="menu-category">

                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">English</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">Espa&ntilde;ol</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">Fren&ccedil;h</a>
                                    </li>

                                </ul>

                            </li>

                            <li class="menu-category">
                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>
                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">USD &dollar;</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">EUR &euro;</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <ul class="menu-social-container">

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </header>
            {children}
        </>
    )
}

export default NewHeader