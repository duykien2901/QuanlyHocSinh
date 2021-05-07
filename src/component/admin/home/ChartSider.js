import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Teacher", "Student"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        
      ],
      data: [20, 100],
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Average Rainfall per month",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "left",
  },
}
export default function ChartSider() {
  return (
    <div>
      <Doughnut
        data={data}
        options={options}
        
      />
    </div>
  );
}
