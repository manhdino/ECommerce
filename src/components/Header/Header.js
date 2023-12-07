import React, { useState } from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header({ children }) {
  const [menu, setMenuOpen] = useState(false);
  const [subCategory, setSubCategory] = useState(false);
  const [subCategory2, setSubCategory2] = useState(false);
  const [subCategory3, setSubCategory3] = useState(false);
  const [sideBarLanguage, setSideBarLanguage] = useState(false);
  const [sideBarCurrency, setSideCurrency] = useState(false);

  return (
    <>
      <div
        className={
          menu ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`
        }
      ></div>
      <header>
        {/* Header - top */}
        <div className={styles.header_top}>
          <div className={styles.container}>
            <ul className={styles.social_container}>
              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>

            <div className={styles.alert_news}>
              <p>
                <b>Free Shipping </b>
                This Week Order Over - $55
              </p>
            </div>

            <div className={styles.actions}>
              <select name="currency">
                <option value="usd">USD $</option>
                <option value="eur">EUR &euro;</option>
              </select>

              <select name="language">
                <option value="en-US">English</option>
                <option value="fr">France</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.container}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="Anon's logo" width="120" height="36" />
            </a>

            <div className={styles.search_container}>
              <input
                type="search"
                name="search"
                className={styles.search_field}
                placeholder="Enter your product name..."
              />

              <button className={styles.search_btn}>
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>

            <div className={styles.user_actions}>
              <button className={styles.action_btn}>
                <NavLink to="/sign-in">
                  <ion-icon name="person-outline"></ion-icon>
                </NavLink>
              </button>

              <button className={styles.action_btn}>
                <ion-icon name="heart-outline"></ion-icon>
                <span className={styles.count}>0</span>
              </button>

              <button className={styles.action_btn}>
                <NavLink to="/cart">
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  <span className={styles.count}>0</span>
                </NavLink>
              </button>
            </div>
          </div>
        </div>

        <nav className={styles.desktop_navigation_menu}>
          <div className={styles.container}>
            <ul className={styles.desktop_menu_category_list}>
              <li className={styles.menu_category}>
                <NavLink className={styles.menu_title} to="/">
                  Home
                </NavLink>
              </li>

              <li className={styles.menu_category}>
                <NavLink className={styles.menu_title} to="/category/1">
                  Categories
                </NavLink>
              </li>
              <li className={styles.menu_category}>
                <NavLink className={styles.menu_title} to="/about">
                  About
                </NavLink>
              </li>
              <li className={styles.menu_category}>
                <NavLink className={styles.menu_title} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className={styles.menu_category}>
                <NavLink className={styles.menu_title} to="/cart">
                  Shopping Cart
                </NavLink>
              </li>
              <li className={styles.menu_category}>
                <NavLink className={styles.menu_title} to="/about">
                  Hot Offers
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className={styles.mobile_bottom_navigation}>
          <button
            className={styles.action_btn}
            onClick={() => {
              setMenuOpen(!menu);
            }}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <NavLink to="/cart" className={styles.action_btn}>
            <ion-icon name="bag-handle-outline"></ion-icon>

            <span className={styles.count}>0</span>
          </NavLink>

          <NavLink to="/" className={styles.action_btn}>
            <ion-icon name="home-outline"></ion-icon>
          </NavLink>

          <button className={styles.action_btn}>
            <ion-icon name="heart-outline"></ion-icon>

            <span className={styles.count}>0</span>
          </button>

          <button className={styles.action_btn}>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        <nav
          className={
            menu
              ? `${styles.mobile_navigation_menu} ${styles.has_scrollbar} ${styles.active}`
              : `${styles.mobile_navigation_menu} ${styles.has_scrollbar} `
          }
        >
          <div className={styles.menu_top}>
            <h2 className={styles.menu_title}>Menu</h2>

            <button
              className={styles.menu_close_btn}
              onClick={() => setMenuOpen(!menu)}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className={styles.mobile_menu_category_list}>
            <li className={styles.menu_category}>
              <button className={styles.accordion_menu}>
                <NavLink
                  to="/"
                  className={styles.menu_title}
                  onClick={() => setMenuOpen(!menu)}
                >
                  Home
                </NavLink>
              </button>
            </li>

            <li className={styles.menu_category}>
              <button
                className={styles.accordion_menu}
                onClick={() => {
                  setSubCategory(!subCategory);
                }}
              >
                <p className={styles.menu_title}>Dress Shoes</p>
              </button>

              <ul
                className={
                  subCategory
                    ? `${styles.submenu_category_list} ${styles.active}`
                    : `${styles.submenu_category_list}`
                }
              >
                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Oxford
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Loafer
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Sneakers
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Sandals
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.menu_category}>
              <button
                className={styles.accordion_menu}
                onClick={() => {
                  setSubCategory2(!subCategory2);
                }}
              >
                <p className={styles.menu_title}>Sports Shoes</p>
              </button>

              <ul
                className={
                  subCategory2
                    ? `${styles.submenu_category_list} ${styles.active}`
                    : `${styles.submenu_category_list}`
                }
              >
                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Running
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Golf
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Tennis
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Boating
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.menu_category}>
              <button
                className={styles.accordion_menu}
                onClick={() => {
                  setSubCategory3(!subCategory3);
                }}
              >
                <p className={styles.menu_title}>Collection</p>
              </button>

              <ul
                className={
                  subCategory3
                    ? `${styles.submenu_category_list} ${styles.active}`
                    : `${styles.submenu_category_list}`
                }
              >
                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Premium Line
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Wedding Shoes
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    The New Gen
                  </a>
                </li>

                <li className={styles.submenu_category}>
                  <a href="/" className={styles.submenu_title}>
                    Timeless
                  </a>
                </li>
              </ul>
            </li>

            <li className={styles.menu_category}>
              <button className={styles.accordion_menu}>
                <NavLink
                  to="/about"
                  className={styles.menu_title}
                  onClick={() => setMenuOpen(!menu)}
                >
                  About
                </NavLink>
              </button>
            </li>

            <li className={styles.menu_category}>
              <button className={styles.accordion_menu}>
                <NavLink
                  to="/shop"
                  className={styles.menu_title}
                  onClick={() => setMenuOpen(!menu)}
                >
                  Shop
                </NavLink>
              </button>
            </li>

            <li className={styles.menu_category}>
              <button className={styles.accordion_menu}>
                <NavLink
                  to="/contact"
                  className={styles.menu_title}
                  onClick={() => setMenuOpen(!menu)}
                >
                  Hot Offers
                </NavLink>
              </button>
            </li>
          </ul>

          <div className={styles.menu_bottom}>
            <ul className={styles.menu_category_list}>
              <li className={styles.menu_category}>
                <button
                  className={
                    sideBarLanguage
                      ? `${styles.accordion_menu} ${styles.active}`
                      : `${styles.accordion_menu}`
                  }
                  onClick={() => {
                    setSideBarLanguage(!sideBarLanguage);
                  }}
                >
                  <p className={styles.menu_title}>Language</p>

                  <ion-icon
                    name="caret-back-outline"
                    className={styles.caret_back}
                  ></ion-icon>
                </button>

                <ul
                  className={
                    sideBarLanguage
                      ? `${styles.submenu_category_list} ${styles.active}`
                      : `${styles.submenu_category_list}`
                  }
                >
                  <li className={styles.submenu_category}>
                    <a href="/" className={styles.submenu_title}>
                      English
                    </a>
                  </li>

                  <li className={styles.submenu_category}>
                    <a href="/" className={styles.submenu_title}>
                      France
                    </a>
                  </li>
                </ul>
              </li>

              <li className={styles.menu_category}>
                <button
                  className={
                    sideBarCurrency
                      ? `${styles.accordion_menu} ${styles.active}`
                      : `${styles.accordion_menu}`
                  }
                  onClick={() => {
                    setSideCurrency(!sideBarCurrency);
                  }}
                >
                  <p className={styles.menu_title}>Currency</p>
                  <ion-icon
                    name="caret-back-outline"
                    className={styles.caret_back}
                  ></ion-icon>
                </button>

                <ul
                  className={
                    sideBarCurrency
                      ? `${styles.submenu_category_list} ${styles.active}`
                      : `${styles.submenu_category_list}`
                  }
                >
                  <li className={styles.submenu_category}>
                    <a href="/" className={styles.submenu_title}>
                      USD $
                    </a>
                  </li>

                  <li className={styles.submenu_category}>
                    <a href="/" className={styles.submenu_title}>
                      EUR &euro;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className={styles.menu_social_container}>
              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/" className={styles.social_link}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}

export default Header;
