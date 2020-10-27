import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DelUserBtn from "./DelUserBtn";
import EditUserbtn from "./EditUserbtn";
import Pagination from "./Pagination";
import { ToastContainer, toast } from "react-toastify";

const Table = (props) => {
  const store = useSelector((store) => store.userRoot);
  //
  useEffect(() => {
    if (store.deleteUserData && store.isDeleted) {
      toast.success("User data deleted successfully");
    }
  }, [store.deleteUserData]);
  //
  useEffect(() => {
    if (store.editUserData && store.isEdited) {
      toast.success("User data updated successfully");
    }
  }, [store.editUserData]);

  return (
    <>
      <table className="table table-dark mb-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((data, index) => (
            <tr key={index}>
              <th scope={"row"}>{data.id}</th>
              <td>{data.email}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>
                <EditUserbtn id={data.id} /> &nbsp;
                <DelUserBtn id={data.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Table;
