import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../../datatablesource.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import * as UserService from "../../../../../services/UserServices.js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function DataGridDemo() {
  const user = useSelector((state) => state.user);
  // const [data, setData] = useState("");
  const [userId, setUserId] = useState(0);
  const queryClient = useQueryClient();
  const DataAllUsers = useQuery({
    queryFn: () => {
      return UserService.getAllUser(user?.access_token);
    },
    queryKey: ["getAllUser"],
  });
  const DataFilter = DataAllUsers?.data?.data.map(
    ({ isAdmin, updatedAt, createdAt, __v, ...rest }, index) => ({
      ...rest,
      id: index + 1,
    })
  );
  const mutation = useMutation({
    mutationFn: ({ id }) => {
      return UserService.deleteUser(id, user?.access_token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllUsers"]);
      toast.success("User deleted", {
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
  const handleDelete = (id) => {
    DataFilter.filter((item) => {
      if (item.id === id) {
        setUserId(item._id);
      }
    });
    mutation.mutate({ id: userId });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 240,
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
              }}
            >
              <div className="viewButton">View</div>
            </Link>
            <Link
              to={`update/${params.row._id}`}
              style={{ textDecoration: "none" }}
              state={{
                id: params.row._id,
                username: params.row.username,
                fullname: params.row.fullname,
                avatar: params.row.avatar,
                status: params.row.status,
                email: params.row.email,
                phone: params.row.phone,
                address: params.row.address,
                password: params.row.password,
              }}
            >
              <div className="updateButton">Update</div>
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
      <div className="datatableTitle">Database Users</div>
      {DataFilter ? (
        <DataGrid
          className="datagrid"
          rows={DataFilter}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
