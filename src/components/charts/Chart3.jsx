import React from "react";
import { Pie } from "react-chartjs-2";

const Chart3 = ({ info }) => {
  return (
    <div className="col-sm mt-3">
      <Pie
        data={{
          labels: ["TOTAL CASES", "TOTAL DEATHS", "TOTAL RECOVERED"],
          datasets: [
            {
              label: ["TOTAL CASES", "TOTAL DEATHS", "TOTAL RECOVERED"],
              data: [
                info ? info.total_cases : 0,
                info ? info.total_deaths : 0,
                info ? info.total_recovered : 0,
              ],
              backgroundColor: [
                "rgba(75, 192, 200, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
            },
          ],
        }}
        options={{
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Chart3;
