import React from "react";
import "./Card.css";
const Card = ({ title, data }) => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBk8MP5x4Hw_h7WD9MoBbmH9173rv5UoR0vQ&usqp=CAU"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h4
          className="card-title"
          style={{ color: "blue", fontWeight: "bold" }}
        >
          {data}
        </h4>
        <h4 className="card-text" style={{ fontWeight: "bold" }}>
          {title}
        </h4>
      </div>
    </div>
  );
};
export default Card;
