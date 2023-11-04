import React from 'react'
import '../../css/HomePage.css';
import { NavLink } from 'react-router-dom';
function HomePage() {

    return (
        <>

            <section id="slider">
                <h2>SUPER VALUE DEALS</h2>
                <h4>On all products</h4>
                <p>Save more with coupons & up to 70% off!</p>
                <NavLink className='shop' to='/shop'>Shop Now</NavLink>
            </section>
        </>
    )
}

export default HomePage