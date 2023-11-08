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
                    <i id="bar" class="fa-solid fa-bars" onClick={openMenu}></i>
                </div>


                <ul id="navbar" class={menuOpen ? "open center" : "close center"}>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/shop'>Shop</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/blog'>Blog</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/services'>Services</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/contact'>Contact</NavLink></li>
                    {/* <li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/shop'><ion-icon id="cart" name="search-sharp"></ion-icon></NavLink> </li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/login'><ion-icon id="cart" name="person-sharp"></ion-icon></NavLink> </li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/cart'><ion-icon id="cart" name="bag-handle-sharp"></ion-icon></NavLink> </li>
                    </li> */}
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/shop'><ion-icon id="cart" name="search-sharp"></ion-icon></NavLink> </li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} onClick={closeMenu} to='/login'><ion-icon id="cart" name="person-sharp"></ion-icon></NavLink> </li>


                    <i id="close" class="fa-solid fa-xmark" onClick={closeMenu}></i>
                </ul>

            </section >
            {children}
        </>
    )
}

export default HeaderComponent