import React from "react";

import Share from "./Share";
import Company from "./Company";
import BasicInfo from "./BasicInfo";
import MarketValue from "./MarketValue";
import ReturnValue from "./ReturnValue";
import CardButton from "./CardButton";
import DonutChart from "./DonutChart";

const MasterCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="mastercard mt-5">
              <div className="text-left">
                <div className="row pl-3 p-1 border">
                  <div className="col-xs-1 ml-2">
                    <Share ssData={props.msData} />
                  </div>
                  <div className="col-xs-1 m-1">
                    <Company csData={props.msData} />
                  </div>
                  <div className="col-xs-2 m-">
                    <BasicInfo bsData={props.msData} />
                  </div>
                  <div className="col-xs-2 m-">
                    <MarketValue mvsData={props.msData} />
                  </div>
                  <div className="col-xs-2 m-1">
                    <ReturnValue rvsData={props.msData} />
                  </div>
                  <div className="col-xs-1">
                    <CardButton cbsData={props.msData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <span className="small">Portfolio</span>
            <DonutChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterCard;
