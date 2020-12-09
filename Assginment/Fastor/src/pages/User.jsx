import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getHotelData } from "../redux/actions/homeAction";

//components
import Navbar from "../components/main/Navbar";
//import Footer from "../components/main/Footer";

//
const User = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.homeRoot);
  const History = useHistory();
  useEffect(() => {
    dispatch(getHotelData());
  }, []);
  return (
    <div>
      {localStorage.getItem("isLogged") === "true" ? (
        <div>
          <Navbar isLoged={true} />
          <div className="mainDisplay"></div>
        </div>
      ) : store.isError ? (
        History.push("/")
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
};

export default User;
