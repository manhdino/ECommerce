import React, { useState } from "react";
import styles from "./Auth.module.css";
import logo from "../../images/account/log.svg";
import { NavLink } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value.target.value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value.target.value);
  };

  // const mutation = useMutation({
  //   mutationFn: (data) => {
  //     return axios.post(`http://localhost:3000/api/user/sign-in`, data);
  //   },
  // });
  // console.log(mutation);
  const fetchAPI = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts2351234`
    );
    return res.data;
  };
  const { isError, isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAPI,
    retry: 5,
    retryDelay: 1000,
  });

  if (isLoading) {
    console.log("Loading...");
  }
  if (isError) {
    console.log("Error!");
  }
  if (data) {
    console.log("data", data);
  }

  const handleSignIn = () => {
    console.log(email, password);
    // mutation.mutate({
    //   email,
    //   password,
    // });
  };

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container}`}>
        <div className={styles.forms_container}>
          <div className={styles.signin_signup}>
            <div className={styles.sign_in_form}>
              <h1 className={styles.title_sign_in}>Sign in</h1>
              <div className={styles.input_field}>
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  placeholder="Email..."
                  value={email}
                  onChange={handleOnchangeEmail}
                />
              </div>
              <div className={styles.input_field}>
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password..."
                  value={password}
                  onChange={handleOnchangePassword}
                />
              </div>
              <button className={styles.btn} onClick={handleSignIn}>
                Login
              </button>
              <p className={styles.social_text}>
                Or Sign in with social platforms
              </p>
              <div className={styles.social_media}>
                <i className={`fab fa-facebook-f ${styles.social_icon}`}></i>
                <i className={`fab  fa-twitter ${styles.social_icon}`}></i>
                <i className={`fab fa-google ${styles.social_icon}`}></i>
                <i className={`fab fa-linkedin-in ${styles.social_icon}`}></i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.panels_container}>
          <div className={`${styles.panel} ${styles.left_panel}`}>
            <div className={styles.content}>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <NavLink
                to="/sign-up"
                className={`${styles.btn} ${styles.transparent}`}
                id={styles.panel_btn}
              >
                Sign up
              </NavLink>
            </div>
            <img src={logo} className={styles.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
