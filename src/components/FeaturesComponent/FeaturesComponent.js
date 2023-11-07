import React from 'react'
import img_shipping from '../../images/shipping.png';
import img_return from '../../images/return.png';
import img_gift from '../../images/gift.png';
import img_contact from '../../images/contact.png';
import '../../css/FeaturesComponent.css';
function FeaturesComponent() {
    return (
        <div class='features-container'>
            <div class="features">
                <div class="feature">
                    <img src={img_shipping} alt="" class="featureIcon" />
                    <span class="featureTitle">FREE SHIPPING</span>
                    <span class="featureDesc">Free worldwide shipping on all orders.</span>
                </div>
                <div class="feature">
                    <img class="featureIcon" src={img_return} alt="" />
                    <span class="featureTitle">30 DAYS RETURN</span>
                    <span class="featureDesc">No question return and easy refund in 14 days.</span>
                </div>
                <div class="feature">
                    <img class="featureIcon" src={img_gift} alt="" />
                    <span class="featureTitle">GIFT CARDS</span>
                    <span class="featureDesc">Buy gift cards and use coupon codes easily.</span>
                </div>
                <div class="feature">
                    <img class="featureIcon" src={img_contact} alt="" />
                    <span class="featureTitle">CONTACT US!</span>
                    <span class="featureDesc">Keep in touch via email and support system.</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturesComponent