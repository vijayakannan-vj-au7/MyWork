import React from "react";

const ReturnValue = (props) => {
  const pos = {
    color: "green",
  };
  const nev = {
    color: "red",
  };
  return (
    <>
      <div style={{ width: "17vw" }} className="border border-gray m-1 p-1">
        <div className="row text-left">
          <div className="col-8 small">Unrealized P&L</div>
          <div className="col-2 pr-5 small">
            <span>${props.sData.unrealizedpl}</span>
          </div>
        </div>
        <div className="row text-left">
          <div className="col-7 small">% Return</div>
          {0 > props.sData.returnvalue ? (
            <i className="fas fa-arrow-down" />
          ) : (
            <i className="fas fa-arrow-up" />
          )}
          <div className="col-2 pr-5 small">
            <span>{props.sData.returnvalue}%</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input
              type="range"
              value={props.sData.returnvalue}
              style={0 < props.sData.returnvalue ? pos : nev}
              className="custom-range"
              id="range"
              min="-100"
              max="100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnValue;
