// import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button onClickHandler={handleClick} className="btns" value="">
            All Products
          </button>
          <button onClickHandler={handleClick} className="btns" value="Nike">
            Nike
          </button>
          <button onClickHandler={handleClick} className="btns" value="Adidas">
            Adidas
          </button>
          <button onClickHandler={handleClick} className="btns" value="Puma">
            Puma
          </button>
          <button onClickHandler={handleClick} className="btns" value="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
