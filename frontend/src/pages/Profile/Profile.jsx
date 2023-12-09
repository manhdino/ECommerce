import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function Profile() {
  const title = "Update Profile";
  const socialTitle = "Login With Social Media";
  const btnText = "Update Now";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(name, email, password, phone, address);
  };
  const user = useSelector((state) => state.user);
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setPhoneNumber(user?.phone);
    setAddress(user?.address);
  }, [user]);
  console.log("user data in profile", user);
  const handleOnChangeUsername = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleOnChangeAdress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <img
              src="/src/assets/images/author/01.jpg"
              className="avatar-profile"
            />
            <form className="account-form" onSubmit={handleUpdate}>
              <div className="form-group">
                <label className="label-profile">Username:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={handleOnChangeUsername}
                />
              </div>
              <div className="form-group">
                <label className="label-profile">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChangeEmail}
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-profile">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleOnChangePhone}
                  required
                />
              </div>
              <div className="form-group">
                <label className="label-profile">Address:</label>
                <input
                  type="text"
                  name="addresss"
                  value={address}
                  onChange={handleOnChangeAdress}
                  required
                />
              </div>

              <div className="form-group text-center">
                <button className="d-block lab-btn" onClick={handleUpdate}>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
