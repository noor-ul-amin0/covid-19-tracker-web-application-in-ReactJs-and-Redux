import React from "react";
import Banner from "../banner/Banner";
import Loader from "../loader/Loader";
import Heading1 from "../headings/Heading1";
import MainLayout from "../main-layout/MainLayout";
import Heading2 from "../headings/Heading2";
import Chart2 from "../charts/Chart2";
import Chart3 from "../charts/Chart3";
import Footer from "../footer/Footer";
import Chart1 from "../charts/Chart1";

function Wraper({ loading, error, info, title, notExistMsg, barChartLabel }) {
  return (
    <div className="display">
      <Banner />
      <Loader loading={loading} />
      <Heading1 title={title} />
      <Chart1 label={barChartLabel} info={info} />
      <MainLayout
        loading={loading}
        error={error}
        info={info}
        notExistMsg={notExistMsg}
      />
      <Heading2 />
      <div className="row justify-content-center mt-4">
        <Chart2 label="TOTAL CASES" info={info} />
        <Chart3 info={info} />
      </div>
      <Footer />
    </div>
  );
}

export default Wraper;
