import React from "react";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import AddUserbtn from "../components/AddUserBtn";

const UserDashboard = () => {
  const store = useSelector((store) => store.userRoot);

  return (
    <>
      <div className="container">
        <h1>user dashboard</h1>
        <AddUserbtn />
        <Table userData={store.userData} />
      </div>
    </>
  );
};

export default UserDashboard;
