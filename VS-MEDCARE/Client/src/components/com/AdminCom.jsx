import React from "react";
import { useSelector } from "react-redux";
import PasswordUpdateBtn from "../admin/PasswordUpdate";
import AdminViewAppo from "../admin/AdminViewAppo";

const AdminCom = (props) => {
  const store = useSelector((store) => store.homeRoot);
  return (
    <>
      <div className="container mt-1justify-content-center">
        <div className="row p-5">
          <div className="col-sm-3">
            <img
              className="img-fluid img-thumbnail"
              src={store.admin.avatar}
              alt="avatar"
            />
          </div>
          <div className="col-sm-9 mt-sm-1">
            <h6 className="text-white">Name :{store.admin.name}</h6>
            <h6 className="text-white">Department :{store.admin.department}</h6>
            <h6 className="text-white">Email :{store.admin.email} </h6>
            <h6 className="text-white">Contact :{store.admin.contact}</h6>
            <div className="row">
              <div className="col m-2 p-2">
                <PasswordUpdateBtn />
                <AdminViewAppo docData={store.doctor} appoData={store.appo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCom;
