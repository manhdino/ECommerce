import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavItems from "./components/NavItems";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
