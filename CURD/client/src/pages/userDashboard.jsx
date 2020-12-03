import React from "react";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import AddUserbtn from "../components/AddUserBtn";

const UserDashboard = () => {
  //
  const store = useSelector((store) => store.userRoot);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">USER DASHBOARD</h3>
        <div className="float-right">
          <AddUserbtn />
        </div>
        <Table userData={store.userData} />
      </div>
    </>
  );
};

export default UserDashboard;
