import React from "react";
import Table from "../components/Table";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import AddUserbtn from "../components/AddUserBtn";

const UserDashboard = () => {
  const store = useSelector((store) => store.userRoot);
  useEffect(() => {
    console.log(store.addUserData);
    if (store.addUserData) {
      toast.success("User data added successfully");
    }
  }, [store.addUserData]);

  return (
    <>
      <div className="container">
        <h1>user dashboard</h1>
        <AddUserbtn />
        <Table userData={store.userData} />
      </div>
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

export default UserDashboard;
