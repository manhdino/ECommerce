import React from "react";
import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_inner}>
        <span className={styles.dot}></span>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
