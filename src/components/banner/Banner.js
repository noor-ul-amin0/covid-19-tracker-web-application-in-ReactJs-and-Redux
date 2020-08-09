import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="main">
      <div className="main__banner">
        <img src="covid-19.jpg" className="image" alt="COVID-19" />
      </div>
      <div className="heading">
        <h3>
          BLACK LIVES MATTER <span>COVID 19 TRACKER</span>
        </h3>
      </div>
    </div>
  );
}

export default Banner;
