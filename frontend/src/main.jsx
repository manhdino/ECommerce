import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/Shop/SingleProduct.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import SingleBlog from "./pages/Blog/SingleBlog.jsx";
import About from "./pages/AboutPage/About.jsx";
import Contact from "./pages/ContactPage/Contact.jsx";
import CartPage from "./pages/Shop/CartPage.jsx";
import CheckoutPage from "./pages/Shop/CheckoutPage.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import DatabaseProduct from "./pages/Admin/components/datatable/product/DatatableProduct.jsx";
import DatabaseUser from "./pages/Admin/components/datatable/user/DatatableUser.jsx";
import Table from "./pages/Admin/components/table/Table.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AdminLayout from "./pages/Admin/AdminLayout.jsx";
import AddNewUser from "./pages/Admin/screens/user/AddNewUser.jsx";
import DetailUser from "./pages/Admin/screens/user/DetailUser.jsx";
import UpdateProduct from "./pages/Admin/screens/product/UpdateProduct.jsx";
import AddNewProduct from "./pages/Admin/screens/product/AddNewProduct.jsx";
import { userInputs, productInputs } from "./pages/Admin/formSource.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/check-out",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
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
  {
    path: "/admin",
    element: (
      // <PrivateRoute isAdmin={true}>
      <AdminLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "users",
        element: <DatabaseUser />,
      },
      {
        path: "users/create",
        element: <AddNewUser inputs={userInputs} title="Add New User" />,
      },
      {
        path: "orders",
        element: <Table />,
      },
      {
        path: "users/:id",
        element: <DetailUser />,
      },
      {
        path: "products",
        element: <DatabaseProduct />,
      },
      {
        path: "products/create",
        element: (
          <AddNewProduct inputs={productInputs} title="Add New Product" />
        ),
      },
      {
        path: "products/update",
        element: <UpdateProduct inputs={productInputs} />,
      },
    ],
  },
]);
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
