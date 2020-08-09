import React from "react";

function Heading1({ title }) {
  return (
    <div className="sub-heading">
      <h2 style={{ color: "#900c3f", fontFamily: "Roboto !important" }}>
        {title}
      </h2>
    </div>
  );
}

export default Heading1;
