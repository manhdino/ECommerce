import styles from "./Recommended.module.css";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className={styles.title}>Recommended</h2>
        <div className={styles.container}>
          <button className={styles.btns} value="">
            All Products
          </button>
          <button className={styles.btns} value="Nike">
            Nike
          </button>
          <button className={styles.btns} value="Adidas">
            Adidas
          </button>
          <button className={styles.btns} value="Puma">
            Puma
          </button>
          <button className={styles.btns} value="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
