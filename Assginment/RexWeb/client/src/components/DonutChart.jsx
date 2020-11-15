import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = (props) => {
  const arrData = [];

  props.sData.map((data) => {
    arrData.push(data.portvalue);
    return null;
  });

  const arrLen = arrData.length;

  var mf = 0;
  var etf = 0;

  arrData.map((data, index) => {
    if (arrLen / 2 > index) {
      mf = mf + data;
    } else {
      etf = etf + data;
    }
    return null;
  });

  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: ["Mutual Funds", "ETFs"],
            datasets: [
              {
                label: "number",
                data: [mf, etf],
                backgroundColor: ["aqua", "orange"],
                borderWidth: 2,
              },
            ],
          }}
          options={
            ({ maintainAspectRatio: false },
            {
              legend: {
                position: "right",
              },
            })
          }
        />
      </div>
    </>
  );
};

export default DonutChart;
