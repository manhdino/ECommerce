import { Outlet, useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
// import { getUserProfile } from "../../services/index/users";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Admin from "./Admin";
const AdminLayout = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  //   const {
  //     data: profileData,
  //     isLoading: profileIsLoading,
  //     error: profileError,
  //   } = useQuery({
  //     queryFn: () => {
  //       return getUserProfile({ token: userState.userInfo.token });
  //     },
  //     queryKey: ["profile"],
  //     onSuccess: (data) => {
  //       if (!data?.admin) {
  //         navigate("/");
  //         toast.error("Your are not allowed to access admin panel");
  //       }
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //       navigate("/");
  //       toast.error("Your are not allowed to access admin panel");
  //     },
  //   });

  //   if (profileIsLoading) {
  //     return (
  //       <div className="w-full h-screen flex justify-center items-center">
  //         <h3 className="text-2xl text-slate-700">Loading...</h3>
  //       </div>
  //     );
  //   }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
