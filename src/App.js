import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Loading from "./components/Loading/Loading";
import { useEffect, useState } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  Home,
  About,
  Account,
  Contact,
  Category,
  Cart,
  Error,
} from "./views/index";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";

import SignUpPage from "./views/account/SignUpPage";
import SignInPage from "./views/account/SignInPage";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const authData = {
    isLoggedIn: false,
  };

  // Access the client

  // Queries

  // Mutations
  // const mutation = useMutation({
  //   mutationFn: fetchAPI,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });
  // Simulate a 1-second delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          {/* Protected routes */}
          <Route element={<ProtectedRoute authData={authData} />}>
            <Route path="account" element={<Account />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>

          {/* Public routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="sign-in" element={<SignInPage />}></Route>
            <Route path="sign-up" element={<SignUpPage />}></Route>
            <Route path="product/:id" element={<ProductDetail />}></Route>
            <Route path="category/:categoryKey" element={<Category />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      )}
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
