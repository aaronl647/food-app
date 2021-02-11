import React from "react";
import axios from "axios";

axios.get("https://api.yelp.com/v3/businesses/search", {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});
function MainPage() {
  return <div></div>;
}

export default MainPage;
