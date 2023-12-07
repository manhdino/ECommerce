import React, { useState } from "react";
import styles from "./Auth.module.css";
import register from "../../images/account/register.svg";
import { NavLink } from "react-router-dom";
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value.target.value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value.target.value);
  };
  const handleOnchangeUsername = (value) => {
    setUsername(value.target.value);
  };
  const handleOnSumnit = (e) => {
    console.log(email, password);
    e.preventDefault();
  };

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} ${styles.sign_up_mode}`}>
        <div className={styles.forms_container}>
          <div className={styles.signin_signup}>
            <form onSubmit={handleOnSumnit} className={styles.sign_up_form}>
              <h1 className={styles.title_sign_in}>Sign up</h1>
              <div className={styles.input_field}>
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleOnchangeUsername}
                />
              </div>
              <div className={styles.input_field}>
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleOnchangeEmail}
                />
              </div>
              <div className={styles.input_field}>
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnchangePassword}
                />
              </div>
              <input
                type="submit"
                className={styles.btn}
                value="Sign up"
                onClick={() => {
                  console.log(username, password, email);
                }}
              />
              <p className={styles.social_text}>
                Or Sign up with social platforms
              </p>
              <div className={styles.social_media}>
                <i className={`fab fa-facebook-f ${styles.social_icon}`}></i>
                <i className={`fab  fa-twitter ${styles.social_icon}`}></i>
                <i className={`fab fa-google ${styles.social_icon}`}></i>
                <i className={`fab fa-linkedin-in ${styles.social_icon}`}></i>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`${styles.panels_container} ${styles.sign_up_container}`}
        >
          <div className={`${styles.panel} ${styles.right_panel}`}>
            <div className={styles.content}>
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <NavLink
                to="/sign-in"
                className={`${styles.btn} ${styles.transparent}`}
                id={styles.panel_btn}
              >
                Sign in
              </NavLink>
            </div>
            <img src={register} className={styles.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
