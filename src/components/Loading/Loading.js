import React from "react";
import styles from "./Loading.module.css";
function Loading() {
  return (
    <div class={styles.loading}>
      <div class={styles.loading_inner}>
        <span class={styles.dot}></span>
        <div class={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
