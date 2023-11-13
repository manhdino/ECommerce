// import Button from "../components/Button";
import "./Recommended.css";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" value="">
            All Products
          </button>
          <button className="btns" value="Nike">
            Nike
          </button>
          <button className="btns" value="Adidas">
            Adidas
          </button>
          <button className="btns" value="Puma">
            Puma
          </button>
          <button className="btns" value="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
