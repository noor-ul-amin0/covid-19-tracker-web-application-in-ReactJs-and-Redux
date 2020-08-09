import React from "react";

function Loader({ loading }) {
  return loading ? (
    <div className="text-center">
      <div
        className="spinner-grow"
        style={{ width: "8rem", height: "8rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Loader;
