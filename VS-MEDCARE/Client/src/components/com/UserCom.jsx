import React from "react";
import { useSelector } from "react-redux";
import AppoCancel from "../user/appo/AppoCancel";
import AppoBook from "../user/appo/AppoBook";
import ContactUpdateBtn from "../user/user/ContactUpdate";
import DeleteAccount from "../user/user/DeleteAccount";
import PasswordUpdateBtn from "../user/user/PasswordUpdate";
import Appoview from "../user/Appoview";

const UserCom = () => {
  const store = useSelector((store) => store.homeRoot);
  //console.log(store);
  //console.log(props.dept);
  return (
    <>
      <div className="container mt-1 justify-content-center">
        <div className="row">
          <div className="col-sm-3">
            <img
              className="img-fluid img-thumbnail"
              src={store.user.avatar}
              alt="avatar"
            />
          </div>
          <div className="col-sm-9 mt-sm-1">
            <h6 className="text-white">Name : {store.user.name}</h6>
            <h6 className="text-white">Email : {store.user.email}</h6>
            <h6 className="text-white">Contact : {store.user.contact}</h6>
            <div className="row">
              <div className="col m-2 p-2">
                <ContactUpdateBtn />
                <PasswordUpdateBtn />
                <DeleteAccount />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m-2 p-2 ">
            <Appoview appoData={store.appo} docData={store.doctor} />
            <AppoBook docData={store.doctor} depData={store.dept} />
            <AppoCancel />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCom;
