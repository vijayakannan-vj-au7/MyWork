import React from "react";

const Footer = () => {
  //getting the current date
  const date = new Date();
  //spliting the year from current date
  const year = date.getFullYear();
  return (
    <>
      <footer className="footer py-4 mt-5 bg-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-center">
              Copyright © vijayakannan {year}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
