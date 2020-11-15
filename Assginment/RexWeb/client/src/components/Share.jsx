import React from "react";

const Share = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-2 align-self-center">
          <i className="fa fa-bars" />
        </div>
        <div className="col-3">
          <span className="sharetype">ITOT</span>
          <br />
          <span className="price">${props.sData.price}</span>
        </div>
      </div>
    </>
  );
};

export default Share;
