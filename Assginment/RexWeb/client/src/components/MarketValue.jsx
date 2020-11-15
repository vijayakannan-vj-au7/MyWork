import React from "react";

const MarketValue = (props) => {
  const value = {
    width: props.sData.portvalue + "%",
  };

  return (
    <>
      <div style={{ width: "17vw" }} className="border border-gray m-1 p-1">
        <div className="row text-left mt-2">
          <div className="col-7 small">Market Value</div>
          <div className="col-3 small">
            <span>${props.sData.price * props.sData.quantity}</span>
          </div>
        </div>
        <div className="row text-left">
          <div className="col-7 small">% of portfolio values</div>
          <div className="col-3 small">
            <span>{props.sData.portvalue}%</span>
          </div>
        </div>
        <div className="row text-left">
          <div className="col-12">
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={value}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketValue;
