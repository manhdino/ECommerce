import React from "react";

function Input({ name, id, value }) {
  return (
    <div className="radio-item">
      <input type="radio" name={name} id={id} />
      <label for={id}>{value}</label>
    </div>
  );
}

export default Input;
