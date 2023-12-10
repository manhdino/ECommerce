import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavItems from "./components/NavItems";
import { useLayoutEffect, useEffect } from "react";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import { updateUser, resetUser } from "./slices/UserSlice";
import * as UserService from "./services/UserServices";
import { useDispatch } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    console.log("storageData in APP", storageData); //access_token
    console.log("decoded in useEffect in APP", decoded);
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData); //call get details API
    }
  });

  const { pathName } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [pathName]);
  //Get access_token from local storage and decode to indentify id user
  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(
      updateUser({
        ...res?.data,
        access_token: token,
      })
    );
  };
  return (
    <>
      <NavItems />
      <ScrollToTop />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
