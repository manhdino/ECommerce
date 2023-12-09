import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/AuthSlice";
import { useLoginMutation } from "../slices/UserApiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as UserServices from "../services/UserServices";
import { useMutationHooks } from "../hooks/useMutationHook";

const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";

const socialList = [
  {
    link: "#",
    iconName: "icofont-github",
    className: "github",
  },
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
];

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // const { signUpWithGmail, login } = useContext(AuthContext);
  // const { signUpWithGmail, login } = useContext(false);

  // console.log(signUpWithGmail);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const from = location.state?.from?.pathname || "/";
  // const [login, { isLoading }] = useLoginMutation();
  const mutation = useMutationHooks((data) => UserServices.loginUser(data));
  console.log(mutation);
  const { data, isPending, isSuccess } = mutation;
  console.log("data", data);
  console.log("isPending", isPending);
  console.log("isSuccess", isSuccess);

  useEffect(() => {
    if (isSuccess) {
      if (data.status === "ERR") {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (location?.state) {
          navigate(location?.state);
        } else {
          navigate("/");
        }
      }
    }

    // localStorage.setItem('access_token', JSON.stringify(data?.access_token))
    // localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
    // if (data?.access_token) {
    //   const decoded = jwt_decode(data?.access_token)
    //   if (decoded?.id) {
    //     handleGetDetailsUser(decoded?.id, data?.access_token)
    //   }
    // }
    console.log("Login successful");
  }, [isSuccess, data, location, navigate]);

  // login with google
  const handleRegister = () => {
    // signUpWithGmail()
    //   .then((result) => {
    //     const user = result.user;
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => console.log(error));
    console.log("Login with google gmail");
  };

  // login with email password
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    mutation.mutate({
      email,
      password,
    });
    // const res = await login({ email, password }).unwrap();
    // console.log(res.status);

    // if (res.status === "ERR") {
    //   toast.error(res.message, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
    // if (res.status === "OK") {
    //   dispatch(setCredentials({ ...res }));
    //   navigate("/");
    // }
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>

              <div className="form-group text-center">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don&apos;t Have any Account? <Link to="/sign-up">Sign Up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* social icons */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button onClick={handleRegister} className="github">
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
