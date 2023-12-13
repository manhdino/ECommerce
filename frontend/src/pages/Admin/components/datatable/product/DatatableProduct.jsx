import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../../datatablesource.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function DataGridDemo() {
  const [data, setData] = useState(productRows);

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
              to="/admin/products/update"
              style={{ textDecoration: "none" }}
              state={{
                name: params.row.name,
                title: params.row.title,
                description: params.row.description,
                category: params.row.category,
                price: params.row.price,
                stock: params.row.stock,
              }}
            >
              <div className="viewButton">Update</div>
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
        columns={productColumns.concat(actionColumn)}
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
