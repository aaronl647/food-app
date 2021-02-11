import axios from "axios";

export const fetchRestaurants = (searchValues) => {
  return (dispatch) => {
    dispatch({ type: "LOAD_RESTAURANTS" });
    axios.get(`https://api.yelp/v3`);
  };
};
