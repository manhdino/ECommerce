import React, { useEffect, useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "../AddNew.scss";
import { useLocation } from "react-router-dom";
function UpdateProduct({ inputs }) {
  let { state } = useLocation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [file, setFile] = useState("");
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const email = form.email.value;
    // const username = form.username.value;
    // const password = form.password.value;
    // const phone = form.phone.value;
    // const address = form.address.value;
    // const country = form.country.value;
    // console.log(email, username, password, phone, address, country);
  };
  useEffect(() => {
    setTitle(state?.title);
    setDesc(state?.description);
    setCategory(state?.category);
    setPrice(state?.price);
    setStock(state?.stock);
  }, [state]);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleStockChange = (e) => {
    setStock(e.target.value);
  };
  return (
    <div className="newContainer">
      <div className="top">
        <h1>Update Product</h1>
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
          <form onSubmit={handleUpdateProduct}>
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
            <div className="formInput">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="App MacBookPro"
              />
            </div>
            <div className="formInput">
              <label>Description</label>
              <input
                type="text"
                name="title"
                value={desc}
                onChange={handleDescChange}
                placeholder="Description"
              />
            </div>
            <div className="formInput">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                placeholder="Computers"
              />
            </div>
            <div className="formInput">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={handlePriceChange}
                placeholder="$100"
              />
            </div>
            <div className="formInput">
              <label>Stock</label>
              <input
                type="text"
                name="stock"
                value={stock}
                onChange={handleStockChange}
                placeholder="In Stock"
              />
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
