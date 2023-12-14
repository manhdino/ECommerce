import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import * as UserService from "../../services/UserServices";
import { toast, ToastContainer } from "react-toastify";
const AdminLayout = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // console.log(localStorage.getItem("access_token"));
  // const userLocalStorage = localStorage.getItem("access_token");

  // const AdminDetails = useQuery({
  //   queryFn: () => {
  //     return UserService.getDetailsUser(user?.id, user?.access_token);
  //   },
  //   queryKey: ["profile"],
  //   onSuccess: (data) => {
  //     console.log("data on success", data);
  //     if (!data?.admin) {
  //       navigate("/");
  //       toast.error("Your are not allowed to access admin panel");
  //     }
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //     navigate("/");
  //     toast.error("Your are not allowed to access admin panel");
  //   },
  // });
  // console.log("data on success", AdminDetails);
  // console.log("user in AdminLayout", user);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <ScrollToTop />
        <Navbar />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLayout;
