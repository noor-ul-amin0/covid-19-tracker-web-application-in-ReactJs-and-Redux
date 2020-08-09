import React from "react";
import { Bar } from "react-chartjs-2";

const Chart2 = ({ label, info }) => {
  return (
    <div className="col-sm ">
      <Bar
        data={{
          labels: ["TOTAL CASES", "TOTAL DEATHS", "TOTAL RECOVERED"],
          datasets: [
            {
              label,
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
  );
};

export default Chart2;
