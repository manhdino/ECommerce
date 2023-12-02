import React from "react";
import styles from "./Newsletter.module.css";
function NewsletterComponent() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newstext}>
        <h4>Sign Up for new Updates</h4>
        <p>
          Get E-mail updates about our latest shop and
          <span>special offers</span>
        </p>
      </div>
      <div className={styles.form}>
        <input type="text" placeholder="Your email address" />
        <button className={styles.normal}>Sign Up</button>
      </div>
    </section>
  );
}

export default NewsletterComponent;
