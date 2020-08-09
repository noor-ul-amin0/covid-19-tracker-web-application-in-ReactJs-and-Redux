import React from "react";
import Card from "../card/Card";
import Model from "../model/Model";

const MainLayout = ({ loading, error, info, notExistMsg }) => {
  const [show, setShow] = React.useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="row justify-content-center mt-5">
      {error && (
        <Model
          title="Error"
          show={show}
          handleClose={handleClose}
          message={error}
        />
      )}
      {loading && ""}
      {notExistMsg && (
        <Model show={show} handleClose={handleClose} message={notExistMsg} />
      )}
      <div className="col-xs-1 ml-3 mt-3">
        <Card
          title="ACTIVE CASES"
          data={
            info
              ? info.total_active_cases
              : notExistMsg || error
              ? ""
              : "please wait calculating"
          }
        />
      </div>
      <div className="col-xs-1 ml-3 mt-3">
        <Card
          title="NEW CASES"
          data={
            info
              ? info.total_new_cases_today
              : notExistMsg || error
              ? ""
              : "please wait calculating"
          }
        />
      </div>
      <div className="col-xs-1 ml-3 mt-3">
        <Card
          title="NEW DEATHS"
          data={
            info
              ? info.total_new_deaths_today
              : notExistMsg || error
              ? ""
              : "please wait calculating"
          }
        />
      </div>
      <div className="col-xs-1 ml-3 mt-3">
        <Card
          title="TOTAL CASES"
          data={
            info
              ? info.total_cases
              : notExistMsg || error
              ? ""
              : "please wait calculating"
          }
        />
      </div>
      <div className="col-xs-1 ml-3 mt-3">
        <Card
          title="TOTAL DEATHS"
          data={
            info
              ? info.total_deaths
              : notExistMsg || error
              ? ""
              : "please wait calculating"
          }
        />
      </div>
      <div className="col-xs-1 ml-3 mt-3">
        <Card
          title="TOTAL RECOVERED"
          data={
            info
              ? info.total_recovered
              : notExistMsg || error
              ? ""
              : "please wait calculating"
          }
        />
      </div>
    </div>
  );
};

export default MainLayout;
