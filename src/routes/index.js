import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import CartPage from "../pages/CartPage/ProductsPage";
import ContactPage from "../pages/ContacgPage/ContactPage";
import BlogPage from "../pages/BlogPage/BlogPage";
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/cart',
        page: CartPage,
        isShowHeader: true,
    },
    {
        path: '/shop',
        page: ShopPage,
        isShowHeader: true,
    },

    {
        path: '/about',
        page: AboutPage,
        isShowHeader: true,
    },
    {
        path: '/contact',
        page: ContactPage,
        isShowHeader: true,
    },
    {
        path: '/blog',
        page: BlogPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false,
    }
];