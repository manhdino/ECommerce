import React from 'react'
import '../../css/NewsletterComponent.css';
function NewsletterComponent() {
    return (
        <section id="newsletter">
            <div class="newstext">
                <h4>Sign Up for new Updates</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address" />
                <button class="normal">Sign Up</button>
            </div>
        </section>
    )
}

export default NewsletterComponent