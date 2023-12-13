import React from "react";
import Table from "../../components/table/Table";
import Chart from "../../components/chart/Chart";
import "./DetailUser.scss";
import { useLocation } from "react-router-dom";
function DetailUser() {
  let { state } = useLocation();
  console.log("state.user", state);
  return (
    <div className="singleContainer">
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src={state?.img} alt="Avatar" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">{state?.username}</h1>
              <div className="detailItem">
                <span className="itemKey">Fullname:</span>
                <span className="itemValue">{state?.fullname}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{state?.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{state?.phone}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">{state?.address}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">{state?.country}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <Table />
      </div>
    </div>
  );
}

export default DetailUser;
