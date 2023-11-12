import React, { useState } from 'react'
import logo from '../../images/logo.png';
import '../../css/NewHeader.css';
import { NavLink } from 'react-router-dom';
function NewHeader({ children }) {

    const [menu, setMenuOpen] = useState(false);
    const [subCategory, setSubCategory] = useState(false);
    const [subCategory2, setSubCategory2] = useState(false);
    const [subCategory3, setSubCategory3] = useState(false);
    const [sideBarLanguage, setSideBarLanguage] = useState(false);
    const [sideBarCurrency, setSideCurrency] = useState(false);
    const openMenu = (state) => {
        const className = 'mobile-navigation-menu has-scrollbar';
        if (state) {
            return className + ' active';
        } else {
            return className;
        }
    }


    return (
        <>
            <div class={menu ? "overlay active" : "overlay"}></div>
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
                                <b>Free Shipping </b>
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
                                {/* <a href='/' class="menu-title">Home</a> */}
                                <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/'>Home</NavLink>
                            </li>

                            <li class="menu-category">
                                {/* <a href="/" class="menu-title">Categories</a> */}
                                {/* <NavLink className='menu-title' to='/shop'>Categories</NavLink> */}
                                <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/shop'>Categories</NavLink>
                                <div class="dropdown-panel">

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                           <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/shop'>Dress Shoes</NavLink>
                                        </li>

                                        <li class="panel-list-item">
                                        <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/shop'>Oxford</NavLink>
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
                            <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/services'>About</NavLink>
                            </li>
                            <li class="menu-category">
                            <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/contact'>Contact</NavLink>
                            </li>
                            <li class="menu-category">
                            <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/blog'>Blog</NavLink>
                            </li>
                            <li class="menu-category">
                            <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/contact'>Stores</NavLink>
                            </li>
                            <li class="menu-category">
                            <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/services'>Hot Offers</NavLink>
                            </li>

                        </ul>

                    </div>

                </nav>

                <div class="mobile-bottom-navigation">

                    <button class="action-btn" onClick={() => { setMenuOpen(true) }}>
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

                <nav class={openMenu(menu)} >

                    <div class="menu-top">
                        <h2 class="menu-title">Menu</h2>

                        <button class="menu-close-btn" onClick={() => setMenuOpen(!menu)}>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul class="mobile-menu-category-list">

                        <li class="menu-category">
                            <a href="/" class="menu-title">Home</a>
                        </li>

                        <li class="menu-category">

                            <button class={subCategory ? "accordion-menu active" : "accordion-menu"}
                                onClick={() => {
                                    setSubCategory(!subCategory)
                                }}>
                                <p class="menu-title">Dress Shoes</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon" ></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class={subCategory ? "submenu-category-list active" : "submenu-category-list"} >

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

                            <button class={subCategory2 ? "accordion-menu active" : "accordion-menu"}
                                onClick={() => {
                                    setSubCategory2(!subCategory2)
                                }}>
                                <p class="menu-title">Sports Shoes</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon" ></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class={subCategory2 ? "submenu-category-list active" : "submenu-category-list"} >

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

                            <button class={subCategory3 ? "accordion-menu active" : "accordion-menu"}
                                onClick={() => {
                                    setSubCategory3(!subCategory3)
                                }}>
                                <p class="menu-title">Collection</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon" ></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>


                            <ul class={subCategory3 ? "submenu-category-list active" : "submenu-category-list"} >

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

                            <button class="accordion-menu">
                                {/* <p class="menu-title">About</p> */}
                                <NavLink className={({ isActive }) => (isActive ? 'menu-title' : 'menu-title')} to='/shop'
                                onClick={() => setMenuOpen(!menu)}
                                >About</NavLink>
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

                                <button class={sideBarLanguage ? "accordion-menu active" : "accordion-menu "} onClick={() => { setSideBarLanguage(!sideBarLanguage) }}>
                                    <p class="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class={sideBarLanguage ? "submenu-category-list active" : "submenu-category-list"}>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">English</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">France</a>
                                    </li>


                                </ul>

                            </li>

                            <li class="menu-category">
                                <button class={sideBarCurrency ? "accordion-menu active" : "accordion-menu"} onClick={() => {
                                    setSideCurrency(!sideBarCurrency);
                                }}>
                                    <p class="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class={sideBarCurrency ? "submenu-category-list active" : "submenu-category-list"}>
                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">USD $</a>
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

            </header >
            {children}
        </>
    )
}

export default NewHeader