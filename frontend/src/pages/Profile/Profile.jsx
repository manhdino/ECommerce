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
  const socialTitle = "Login With Social Media";
  const btnText = "Update Now";
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const user = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const { data: profileData } = useQuery({
    queryFn: () => {
      return UserService.getDetailsUser(user?.id, user?.access_token);
    },
    queryKey: ["profile"],
  });
  console.log("data profile", profileData);
  const mutation = useMutation({
    mutationFn: (data) => {
      console.log(data);
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
    console.log(
      user?.id,
      email,
      name,
      phone,
      address,
      address,
      user?.access_token
    );
    setData({ email: email, name: name, phone: phone, address: address });
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      access_token: user?.access_token,
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setPhoneNumber(user?.phone);
    setAddress(user?.address);
  }, [user]);

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
              // src="/src/assets/images/author/01.jpg"
              src={
                file
                  ? URL.createObjectURL(file)
                  : // : user?.img
                    "/src/assets/images/author/01.jpg"
              }
              className="avatar-profile"
              alt="Avatar"
            />
            <input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
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
