import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import Home from "./pages/home/index.jsx";
import Shop from "./pages/shop/Shop.jsx";
import SingleProduct from "./pages/shop/SingleProduct.jsx";
import Blog from "./pages/blog/Blog.jsx";
import SingleBlog from "./pages/blog/SingleBlog.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import CartPage from "./pages/shop/CartPage.jsx";
import CheckoutPage from "./pages/shop/CheckoutPage.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/check-out",
        element: <CheckoutPage />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
