import React from 'react'
import logo from '../../images/logo.png'
import '../../css/HeaderComponent.css';
import { NavLink } from 'react-router-dom';
function HeaderComponent({ children }) {
    return (
        <>
            <section id="header">
                <a href="/"><img src={logo} class="logo" alt="" /></a>
                <div>
                    <ul id="navbar" class="center">
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/shop'>Shop</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/blog'>Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/contact'>Contact</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active nav' : 'nav')} to='/cart'><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
                    </ul>
                </div>
            </section>
            {children}
        </>
    )
}

export default HeaderComponent