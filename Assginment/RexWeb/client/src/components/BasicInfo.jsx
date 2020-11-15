import React from "react";

const BasicInfo = (props) => {
  return (
    <>
      <div style={{ width: "15vw" }} className="border border-gray m-1 p-1">
        <div className="row small">
          <div className="col-6">
            <i className="fa fa-box"></i>Quantity
          </div>
          <div className="col-2">
            <span>{props.sData.quantity}</span>
          </div>
        </div>
        <div className="row small">
          <div className="col-6">
            <i className="fas fa-at" />
            Avg-Cost
          </div>
          <div className="col-2">
            <span>${props.sData.avgcost}</span>
          </div>
        </div>
        <div className="row small">
          <div className="col-6">
            <i className="fas fa-money-check-alt"></i>
            Invested
          </div>
          <div className="col-2">
            <span>${props.sData.investamt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
