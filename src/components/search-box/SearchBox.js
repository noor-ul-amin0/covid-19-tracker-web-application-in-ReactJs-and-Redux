import React from "react";
import "./SearchBox.css";
import Model from "../model/Model";

function SearchBox() {
  const [countryName, setCountryName] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    const specialChars = `!"#$%&'()*+,-./:;<=>?@[\`]^_{|~1234567890`;
    e.preventDefault();
    if (countryName.length === 0) {
      setMessage(
        "Country name cannot be empty, Please enter a valid country name"
      );
      setShow(true);
    } else {
      for (let char = 0; char < countryName.length; char++) {
        if (specialChars.includes(countryName[char])) {
          setMessage(
            "Country name should not contain special characters/number"
          );
          setShow(true);
          return;
        }
      }
      window.location = `/${countryName}`;
    }
  };

  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      {show && (
        <Model show={show} handleClose={handleClose} message={message} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-inline my-2 my-lg-0">
            <ul>
              <input
                className="form-control mr-sm-2 ml-2 text-center"
                type="search"
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Search Country"
                aria-label="Search"
              />
              <i
                className="fa fa-search"
                aria-hidden="true"
                onClick={handleSubmit}
              ></i>
            </ul>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SearchBox;
