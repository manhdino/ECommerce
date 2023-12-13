import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "../AddNew.scss";
function AddNewProduct({ inputs, title }) {
  console.log("input product", inputs);
  const [file, setFile] = useState("");
  const handleAddNewProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const country = form.country.value;
    console.log(email, username, password, phone, address, country);
  };
  return (
    <div className="newContainer">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={handleAddNewProduct}>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            {inputs?.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                />
              </div>
            ))}
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewProduct;
