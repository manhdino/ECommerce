import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../../images/account/log.svg";
import register from "../../images/account/register.svg";
function LoginPage() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="wrap">
      <div className={signUp ? "container sign-up-mode" : "container"}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="/" className="sign-in-form">
              <h1 className="title-sign-in">Sign in</h1>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username..." />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password..." />
              </div>
              <input type="submit" value="Login" className="btn" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>

            <form action="/" className="sign-up-form">
              <h2 className="title-sign-in">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  setSignUp(!signUp);
                }}
              >
                Sign up
              </button>
            </div>
            <img src={logo} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  setSignUp(!signUp);
                }}
              >
                Sign in
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
