import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserServices";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { toast, ToastContainer } from "react-toastify";
import { updateUser } from "../../slices/UserSlice";
function Profile() {
  const title = "Update Profile";
  const socialTitle = "Login With Social Media";
  const btnText = "Update Now";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const user = useSelector((state) => state.user);

  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });
  const { isSuccess, isError } = mutation;
  const handleUpdate = (event) => {
    event.preventDefault();
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      access_token: user?.access_token,
    });

    if (isSuccess) {
      toast.success("Update successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (isError) {
      toast.error("Update fail!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setPhoneNumber(user?.phone);
    setAddress(user?.address);
  }, [user]);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Update successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleGetDetailsUser(user?.id, user?.access_token);
    }
    if (isError) {
      toast.error("Update fail!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

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
      <ToastContainer />
    </div>
  );
}

export default Profile;
