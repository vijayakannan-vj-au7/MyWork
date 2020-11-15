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
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-9">
            {props.sData.map((data) => (
              <div className="row pl-2 p-1 mt-1 ml-3 border shadow">
                <Share sData={data} />
                <Company sData={data} />
                <BasicInfo sData={data} />
                <MarketValue sData={data} />
                <ReturnValue sData={data} />
                <CardButton sData={data} />
              </div>
            ))}
          </div>
          <div className="col-3">
            <span className="small">Portfolio</span>
            <DonutChart sData={props.sData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterCard;
