import React from 'react'
import '../../css/NewsletterComponent.css';
function NewsletterComponent() {
    return (
        <section id="newsletter" class="section-p1">
            <div class="newstext">
                <h4>Sign Up For NewSletters</h4>
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