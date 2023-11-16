import "./Sidebar.css";
import BestSellerProduct from "../Products/BestSeller/BestSellerProduct";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-category">
          <div class="sidebar-category-item">
            <h3 class="showcase-heading">Category</h3>
            <Category />
          </div>
          <div class="sidebar-category-item">
            <h3 class="showcase-heading">Price</h3>
            <Price />
          </div>
          <div class="sidebar-category-item">
            <h3 class="showcase-heading">Colors</h3>
            <Colors />
          </div>
        </div>
        <h3 class="showcase-heading">best sellers</h3>
        <BestSellerProduct />
        <BestSellerProduct />
        <BestSellerProduct />
        <BestSellerProduct />
      </div>
    </>
  );
};

export default Sidebar;
