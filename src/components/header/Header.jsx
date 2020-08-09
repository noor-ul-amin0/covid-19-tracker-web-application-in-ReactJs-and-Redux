import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBox from "../search-box/SearchBox";
const Header = () => {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link text-white" to="/">
            <img
              src="covid19 .jpg"
              width="40"
              height="40"
              alt=""
              className="d-inline-block align-top"
              loading="lazy"
            />
            <div
              style={{
                marginLeft: "50px",
                top: "20px",
                position: "absolute",
                fontSize: "22px",
              }}
            >
              <strong> COVID 19 TRACKER</strong>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <SearchBox />
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Header;

/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto">
  <Link className="nav-link" to="/pakistan">
    PAKISTAN
  </Link>
  <Link className="nav-link" to="/india">
    INDIA
  </Link>
  <Link className="nav-link" to="/china">
    CHINA
  </Link>
  <Link className="nav-link" to="/america">
    AMERICA
  </Link>
  <Link className="nav-link" to="/russia">
    RUSSIA
  </Link>
  <Link className="nav-link" to="/afghanistan">
    AFGHANISTAN
  </Link>
  <Link className="nav-link" to="/egypt">
    EGYPT
  </Link>
  <Link className="nav-link" to="/southafrica">
    SOUTH AFRICA
  </Link>
</ul>
<div>
</div>
</div> */
