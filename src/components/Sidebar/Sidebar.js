import "./Sidebar.css";
import BestSellerProduct from "../Products/BestSeller/BestSellerProduct";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-category">
          <div className="sidebar-category-item">
            <h3 className="showcase-heading">Category</h3>
            <Category />
          </div>
          <div className="sidebar-category-item">
            <h3 className="showcase-heading">Price</h3>
            <Price />
          </div>
          <div className="sidebar-category-item">
            <h3 className="showcase-heading">Colors</h3>
            <Colors />
          </div>
        </div>
        <h3 className="showcase-heading">best sellers</h3>
        <BestSellerProduct />
        <BestSellerProduct />
        <BestSellerProduct />
        <BestSellerProduct />
      </div>
    </>
  );
};

export default Sidebar;
