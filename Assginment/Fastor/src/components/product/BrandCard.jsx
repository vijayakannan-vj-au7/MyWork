import React from "react";

//
const BrandCard = (props) => {
  //
  return (
    <>
      {props.brandData.map((brand) => (
        <div className="col mb-2 ">
          <div className="card card-out">
            <img
              src={brand.bimage}
              style={{ width: "60%", height: "50%" }}
              className="card-img-top img-thumbnail"
              alt="brand-img"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandCard;
