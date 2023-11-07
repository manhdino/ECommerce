import React, { useState } from 'react'
import logo from '../../images/logo.png'
import '../../css/HeaderComponent.css';
import { NavLink } from 'react-router-dom';
function HeaderComponent({ children }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }
    return (
        <>
            <section id="header">

                <a href="/"><img src={logo} class="logo" alt="" /></a>
                <div id="mobile">
                    <NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/cart'><i class="fa-solid fa-cart-shopping"></i></NavLink>
                    <i id="bar" class="fa-solid fa-bars" onClick={openMenu}></i>
                </div>


                <ul id="navbar" class={menuOpen ? "open center" : "close center"}>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/shop'>Shop</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/blog'>Blog</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/services'>Services</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/contact'>Contact</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/cart'><i id="cart" class="fa-solid fa-cart-shopping"></i></NavLink> </li>
                    <i id="close" class="fa-solid fa-xmark" onClick={closeMenu}></i>
                </ul>

            </section>
            {children}
        </>
    )
}

export default HeaderComponent