import axios from "axios";

//hotel data
export const hotelDataHelper = (data) => {
  return {
    type: "SET_HOTEL_DATA",
    payload: data,
  };
};

//Get Hotel Data
export const getHotelData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "https://staging.fastor.in:8090/v1/m/restaurant?city_id=118",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      console.log(data);
      dispatch(hotelDataHelper(data));
    } catch (err) {
      console.log("Error in user home data Action", err.message);
    }
  };
};
