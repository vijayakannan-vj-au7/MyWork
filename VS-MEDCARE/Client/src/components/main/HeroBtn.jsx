import React from "react";
import LoginBtn from "../main/LoginBtn";
import SignupBtn from "../main/SignupBtn";

const HeroBtn = () => {
  const log = localStorage.getItem("isLogged") === "true";
  return (
    <>
      {log ? null : (
        <>
          <SignupBtn />
          <LoginBtn />
        </>
      )}
    </>
  );
};

export default HeroBtn;
