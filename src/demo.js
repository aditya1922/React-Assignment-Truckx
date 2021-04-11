import React, { useEffect, useState } from "react";
import { link } from "react-router-dom";
import MaterialTable from "material-table";
import axios from "axios";

export default function MaterialTableDemo() {
  useEffect(() => {
    Users();
  }, []);
  const [data, setData] = useState([]);
  async function Users() {
    const url = "https://reqres.in/api/users";
    const response = await fetch(url);
    const result = await response.json();
    // setdata(response.data.data);
    //console.log(result.data);
    setData(result.data);
    //const data = await response.json();
    //this.setState({ person: data.results[0], loading: false });
  }

  const [state, setState] = React.useState({
    columns: [
      { title: "Id", field: "id" },
      { title: "Email", field: "email" },
      { title: "First Name", field: "first_name" },
      { title: "Last Name", field: "last_name" },
      { title: "Avatar", field: "avatar" }
    ]
  });
  return (
    <MaterialTable
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: "#00FF00"
        },
        title: {
          backgroundColor: "#00FF00"
        }
      }}
      title="My Customers"
      columns={state.columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
      showPaginationBottom={false}
    />
  );
}
