import "./Sidebar.css";
import BestSellerProduct from "./BestSeller/BestSellerProduct";
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-category">
          <div class="sidebar-top">
            <h2 class="sidebar-title">Category</h2>
            <button class="sidebar-close-btn">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul class="sidebar-menu-category-list">
            <li class="sidebar-menu-category">
              <button class="sidebar-accordion-menu" data-accordion-btn>
                <div class="menu-title-flex">
                  <p class="menu-title">Clothes</p>
                </div>
              </button>
            </li>

            <li class="sidebar-menu-category">
              <button class="sidebar-accordion-menu" data-accordion-btn>
                <div class="menu-title-flex">
                  <p class="menu-title">Footwear</p>
                </div>
              </button>
            </li>

            <li class="sidebar-menu-category">
              <button class="sidebar-accordion-menu" data-accordion-btn>
                <div class="menu-title-flex">
                  <p class="menu-title">Jewelry</p>
                </div>
              </button>
            </li>

            <li class="sidebar-menu-category">
              <button class="sidebar-accordion-menu" data-accordion-btn>
                <div class="menu-title-flex">
                  <p class="menu-title">Perfume</p>
                </div>
              </button>
            </li>

            <li class="sidebar-menu-category">
              <button class="sidebar-accordion-menu" data-accordion-btn>
                <div class="menu-title-flex">
                  <p class="menu-title">Cosmetics</p>
                </div>
              </button>
            </li>

            <li class="sidebar-menu-category">
              <button class="sidebar-accordion-menu" data-accordion-btn>
                <div class="menu-title-flex">
                  <p class="menu-title">Glasses</p>
                </div>
              </button>
            </li>
          </ul>
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
