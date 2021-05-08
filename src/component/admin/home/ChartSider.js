import { Row, Col, Typography, Progress } from "antd";
import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Teacher", "Student"],
  datasets: [
    {
      backgroundColor: ["#B21F00", "#C9DE00"],
      hoverBackgroundColor: ["#501800", "#4B5000"],
      offset: 0,
      data: [30, 100],
    },
  ],
};

const options = {
  title: {
    display: true,

    fontSize: 26,
    color: "#000",
    padding: 2,
  },
  legend: {
    display: true,
    position: "left",
    fontSize: "15px",
    align: "start",
  },
};
export default function ChartSider() {
  return (
    <Row justify="center" align="middle">
      <Col style={{}} className="chart">
        <div className="title-chart">
          <Typography.Text>Account</Typography.Text>
        </div>
        <Doughnut data={data} options={options} />
      </Col>
      <Col style={{}} className="chart">
        <div className="title-chart">
          <Typography.Text>Device</Typography.Text>
          <Typography.Text className="comment">Remain</Typography.Text>
        </div>
        <div className="title-device">
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            width="150px"
            percent={50}
          />
        </div>
      </Col>
    </Row>
  );
}
