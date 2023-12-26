import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React from "react";
import * as UserService from "../../../../services/UserServices";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import "../AddNew.scss";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
function UpdateUser() {
  let { state } = useLocation();
  const [file, setFile] = useState("");
  const [avatar, setAvatar] = useState(state.avatar);
  const [email, setEmail] = useState(state.email);
  const [password, setPassword] = useState(state.password);
  const [username, setUsername] = useState(state.username);
  const [phone, setPhone] = useState(state.phone);
  const [address, setAddress] = useState(state.address);
  const [fullname, setFullname] = useState(state.fullname);
  const user = useSelector((state) => state.user);

  const queryClient = useQueryClient();

  const handleAddNewUser = (event) => {
    event.preventDefault();
    mutation.mutate({
      id: state?.id,
      avatar,
      email,
      username,
      fullname,
      phone,
      address,
      access_token: user?.access_token,
    });
  };
  const mutation = useMutation({
    mutationFn: (data) => {
      const { id, access_token, ...rests } = data;
      return UserService.updateUser(id, rests, access_token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile is updated", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    const base64 = await convertToBase64(file);
    setAvatar(base64);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangeFullName = (e) => {
    setFullname(e.target.value);
  };
  const handleOnChangeUserName = (e) => {
    setUsername(e.target.value);
  };
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div className="newContainer">
      <div className="top">
        <h1>Update User</h1>
      </div>
      <div className="bottom">
        <div className="left">
          {avatar ? (
            <img
              src={file ? URL.createObjectURL(file) : avatar}
              alt=""
              className="avatar-profile"
            />
          ) : (
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              className="avatar-profile"
              alt="user-default"
            />
          )}
        </div>
        <div className="right">
          {state ? (
            <form onSubmit={handleAddNewUser}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    handleFileUpload(e);
                  }}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="john_doe"
                  name="username"
                  value={username}
                  onChange={handleOnChangeUserName}
                />
              </div>
              <div className="formInput">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="fullname"
                  value={fullname}
                  onChange={handleOnChangeFullName}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="john_doe@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleOnChangeEmail}
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 234 567 89"
                  name="phone"
                  value={phone}
                  onChange={handleOnChangePhone}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  autoComplete="off"
                  onChange={handleOnChangePassword}
                />
              </div>
              <div className="formInput w-full">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="134 Truong Dinh,HBT,HN"
                  name="address"
                  value={address}
                  onChange={handleOnChangeAddress}
                />
              </div>

              <button type="submit">Send</button>
            </form>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdateUser;
