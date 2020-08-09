import React from "react";
import { Bar } from "react-chartjs-2";
export const Chart1 = ({ label, info }) => {
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-sm-10">
        <Bar
          data={{
            labels: [
              "ACTIVE CASES",
              "NEW CASES",
              "NEW DEATHS",
              "TOTAL CASES",
              "TOTAL DEATHS",
              "TOTAL RECOVERED",
            ],
            datasets: [
              {
                label,
                data: [
                  info ? info.total_active_cases : 0,
                  info ? info.total_new_cases_today : 0,
                  info ? info.total_new_deaths_today : 0,
                  info ? info.total_cases : 0,
                  info ? info.total_deaths : 0,
                  info ? info.total_recovered : 0,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 200, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                ],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "CORONA CASES",
              fontSize: 25,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 20000000,
                    min: 0,
                    stepSize: 1000000,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};
export default Chart1;
