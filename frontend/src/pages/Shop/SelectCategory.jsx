import React from "react";

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="computer">Computer</option>
      <option value="smart-home">Smart Home</option>
      <option value="automotive">Automotive</option>
      <option value="baby">Baby</option>
      <option value="beauty">Beauty</option>
      <option value="personal-care">Personal Care</option>
      <option value="butcher-shop">Butcher Shop</option>
    </select>
  );
};

export default SelectCategory;
