import { Link } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";

const DataTable = (props) => {
  const handleDelete = (id, e) => {
    //delete item
    console.log(id + "has been deleted!");
    props.setProducts((products) =>
      products.filter((deleted) => deleted.id !== id)
    );
    console.log(props.products);
    if (e) e.stopPropagation();
  };

  const actionColumns = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center text-center justify-center p-0 h-full">
          <div className="flex items-center text-center justify-center p-0">
            <Link to={`/${props.slug}/${params.row.id}`}>
              <button
                className="flex items-center text-center justify-center"
                onClick={() => handleDelete(params.row.id)}
              >
                <img
                  className="w-5 h-5"
                  src="../src/assets/Admin/trash.svg"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="bg-white w-full max-w-full">
      <DataGrid
        className="p-5 flex items-center text-center justify-center w-full"
        rows={props.products}
        columns={[...props.columns, actionColumns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
