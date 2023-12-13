import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function DataGridDemo() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="details"
              style={{ textDecoration: "none" }}
              state={{
                username: params.row.username,
                fullname: params.row.fullname,
                avatar: params.row.avatar,
                status: params.row.status,
                email: params.row.email,
                phone: params.row.phone,
                address: params.row.address,
                city: params.row.city,
              }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="create" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        // pageSize={9}
        // rowsPerPageOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
