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

import Home from "./pages/Home/index.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/Shop/SingleProduct.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import SingleBlog from "./pages/Blog/SingleBlog.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import CartPage from "./pages/Shop/CartPage.jsx";
import CheckoutPage from "./pages/Shop/CheckoutPage.jsx";
import Signup from "./pages/SignUp/SignUp.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Error from "./components/Error/Error.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
