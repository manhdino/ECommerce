import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import CartPage from "../pages/CartPage/CartPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeader: true,
  },
  {
    path: "/shop",
    page: ShopPage,
    isShowHeader: true,
  },
  {
    path: "/contact",
    page: ContactPage,
    isShowHeader: true,
  },
  {
    path: "/about",
    page: AboutPage,
    isShowHeader: true,
  },
  {
    path: "/detail",
    page: DetailProduct,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
];
