import React from "react";

//
const Copy = () => {
  //getting the current date
  const date = new Date();
  //spliting the year from current date
  const year = date.getFullYear();
  return (
    <>
      <div className="col-lg-12 text-lg-center">
        Copyright © vj.vijayakannan {year}
      </div>
    </>
  );
};

export default Copy;
