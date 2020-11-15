import React from "react";

const Company = (props) => {
  return (
    <>
      <div style={{ width: "5vw" }} className="border border-gray m-1 p-1">
        <div className="row mt-1">
          <div className="col">
            <span className="cname">iShares</span>
            <br />
            <span className="sharetype font-weight-bold text-dark">
              {props.sData.scrip}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
