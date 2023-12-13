import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserServices";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { toast, ToastContainer } from "react-toastify";
import { updateUser } from "../../slices/UserSlice";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import BorderColorIcon from "@mui/icons-material/BorderColor";
function Profile() {
  const title = "Update Profile";
  const btnText = "Update Now";
  const [file, setFile] = useState("");
  const [avatar, setAvatar] = useState("");
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullName] = useState("");
  const user = useSelector((state) => state.user);

  const queryClient = useQueryClient();
  useQuery({
    queryFn: () => {
      return UserService.getDetailsUser(user?.id, user?.access_token);
    },
    queryKey: ["profile"],
  });
  const mutation = useMutation({
    mutationFn: (data) => {
      const { id, access_token, ...rests } = data;
      UserService.updateUser(id, rests, access_token);
    },
    onSuccess: () => {
      dispatch(updateUser(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile is updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const handleUpdate = async (event) => {
    event.preventDefault();
    setData({
      email: email,
      fullname: fullname,
      username: username,
      phone: phone,
      address: address,
      avatar: avatar,
    });
    mutation.mutate({
      id: user?.id,
      avatar,
      email,
      username,
      fullname,
      phone,
      address,
      access_token: user?.access_token,
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    setAvatar(user.avatar);
    setUserName(user.username);
    setEmail(user.email);
    setPhoneNumber(user.phone);
    setAddress(user.address);
    setFullName(user.fullname);
  }, [user]);

  const handleOnChangeUsername = (e) => {
    setUserName(e.target.value);
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

  const handleOnChangeFullName = (e) => {
    setFullName(e.target.value);
  };
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
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            {avatar ? (
              <img
                src={file ? URL.createObjectURL(file) : avatar}
                alt="Avatar"
                className="avatar-profile"
              />
            ) : (
              <img
                src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png"
                className="avatar-profile"
                alt="Avatar"
              />
            )}

            <input
              id="file"
              type="file"
              onChange={(e) => handleFileUpload(e)}
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              {" "}
              <BorderColorIcon sx={{ fontSize: 18 }} className="edit-profile" />
            </label>
            <form className="account-form" onSubmit={handleUpdate}>
              <div className="form-group">
                <label className="label-profile">Username:</label>
                <input
                  type="text"
                  name="name"
                  value={username}
                  required
                  onChange={handleOnChangeUsername}
                />
              </div>
              <div className="form-group">
                <label className="label-profile">FullName:</label>
                <input
                  type="text"
                  name="name"
                  value={fullname}
                  required
                  onChange={handleOnChangeFullName}
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
