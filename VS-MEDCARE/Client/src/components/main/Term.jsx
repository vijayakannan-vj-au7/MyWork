import React from "react";
import { Link } from "react-router-dom";

const Term = () => {
  return (
    <>
      <div className="col-lg-4 text-lg-right">
        <Link className="mr-3 text">Privacy Policy</Link>
        <Link className="text">Terms and Conditions</Link>
      </div>
    </>
  );
};

export default Term;
