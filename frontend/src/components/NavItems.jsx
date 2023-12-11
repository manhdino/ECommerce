import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../slices/UserSlice";
import * as UserServices from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import Loading from "../components/isLoading";
const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user);
  // const account = localStorage.getItem("account");
  // console.log("user nav", user);
  // console.log("account nav", account);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setName(user?.name);
  }, [user]);
  const handleLogout = async () => {
    await UserServices.logoutUser();
    dispatch(resetUser());
    navigate("/");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleAdmin = () => {
    navigate("/admin");
  };
  const handleOrder = () => {
    navigate("/cart-page");
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* ------ header top: first div ----- */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>

      {/* header top ends*/}

      {/* ---header botton starts */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo  */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/" className="hover:link-warning">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>

              {/* users when user available */}
              {user?.name ? (
                <>
                  <div>
                    {user?.photoURL ? (
                      <>
                        <img src={user?.photoURL} className="nav-profile" />
                      </>
                    ) : (
                      <img
                        src="/src/assets/images/author/01.jpg"
                        className="nav-profile"
                      />
                    )}
                  </div>
                  <NavDropdown>
                    <Loading isLoading={loading}>
                      <NavDropdown.Item>
                        Hi! {name?.length ? name : user?.name}
                      </NavDropdown.Item>
                    </Loading>
                    {/* <NavDropdown.Item>
                      Hi! {name?.length ? name : user?.name}
                    </NavDropdown.Item> */}
                    <NavDropdown.Item onClick={handleProfile}>
                      Profile
                    </NavDropdown.Item>

                    {user?.isAdmin && (
                      <NavDropdown.Item onClick={handleAdmin}>
                        Admin
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Item onClick={handleOrder}>
                      Order
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    <span>Create Account</span>
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              )}

              {/* menu toggle btn */}
              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header botton ends */}
    </header>
  );
};

export default NavItems;
