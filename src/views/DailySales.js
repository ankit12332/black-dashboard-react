import React from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const DailySales = () => {
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
    },
  };

  const pieChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        data: [500, 700, 800, 600, 900, 1200, 1000],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
        ],
      },
    ],
  };

  const barChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Daily Sales (in USD)",
        data: [500, 700, 800, 600, 900, 1200, 1000],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Daily Sales (in USD)",
        data: [500, 700, 800, 600, 900, 1200, 1000],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="content">
      <Row>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h4">Pie Chart</CardTitle>
            </CardHeader>
            <CardBody>
              <div style={{ height: "300px" }}>
                <Pie data={pieChartData} options={chartOptions} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h4">Bar Chart</CardTitle>
            </CardHeader>
            <CardBody>
              <div style={{ height: "300px" }}>
                <Bar data={barChartData} options={chartOptions} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h4">Line Chart</CardTitle>
            </CardHeader>
            <CardBody>
              <div style={{ height: "300px" }}>
                <Line data={lineChartData} options={chartOptions} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DailySales;
