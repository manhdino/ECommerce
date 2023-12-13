import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
const AdminLayout = () => {
  const user = useSelector((state) => state.user);

  console.log("user in AdminLayout", user);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <ScrollToTop />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
