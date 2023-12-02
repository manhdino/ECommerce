import React from "react";
import imgTestimonial from "../../images/testimonial-1.jpg";
import imgCTABanner from "../../images/cta-banner.jpg";
import iconQuote from "../../images/quotes.svg";
import styles from "./Features.module.css";
function Features() {
  return (
    <div>
      <div className={styles.features}>
        <div className={styles.testimonial_box}>
          <div className={styles.testimonial}>
            <h2 className={styles.title}>Certificate</h2>

            <div className={styles.testimonial_card}>
              <img
                src={imgTestimonial}
                alt="alan doe"
                className={styles.testimonial_banner}
                width="80"
                height="80"
              />

              <p className={styles.testimonial_name}>Alan Doe</p>

              <p className={styles.testimonial_title}>CEO & Founder Invision</p>

              <img
                src={iconQuote}
                alt="quotation"
                className={styles.quotation_img}
                width="26"
              />

              <p className={styles.testimonial_desc}>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </div>

          <div className={styles.cta_container}>
            <img
              src={imgCTABanner}
              alt="summer collection"
              className={styles.cta_banner}
            />

            <a href="/" className={styles.cta_content}>
              <p className={styles.discount}>25% Discount</p>

              <h2 className={styles.cta_title}>Summer collection</h2>

              <p className={styles.cta_text}>Starting @ $10</p>

              <button className={styles.cta_btn}>Shop now</button>
            </a>
          </div>

          <div className={styles.service}>
            <h2 className={styles.title}>Our Services</h2>

            <div className={styles.service_container}>
              <a href="/" className={styles.service_item}>
                <div className={styles.service_icon}>
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div className={styles.service_content}>
                  <h3 className={styles.service_title}>Worldwide Delivery</h3>
                  <p className={styles.service_desc}>For Order Over $100</p>
                </div>
              </a>

              <a href="/" className={styles.service_item}>
                <div className={styles.service_icon}>
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>

                <div className={styles.service_content}>
                  <h3 className={styles.service_title}>Next Day delivery</h3>
                  <p className={styles.service_desc}>UK Orders Only</p>
                </div>
              </a>

              <a href="/" className={styles.service_item}>
                <div className={styles.service_icon}>
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <div className={styles.service_content}>
                  <h3 className={styles.service_title}>Best Online Support</h3>
                  <p className={styles.service_desc}>Hours: 8AM - 11PM</p>
                </div>
              </a>

              <a href="/" className={styles.service_item}>
                <div className={styles.service_icon}>
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>

                <div className={styles.service_content}>
                  <h3 className={styles.service_title}>Return Policy</h3>
                  <p className={styles.service_desc}>Easy & Free Return</p>
                </div>
              </a>

              <a href="/" className={styles.service_item}>
                <div className={styles.service_icon}>
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>

                <div className={styles.service_content}>
                  <h3 className={styles.service_title}>30% money back</h3>
                  <p className={styles.service_desc}>For Order Over $100</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
