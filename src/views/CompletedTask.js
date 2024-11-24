import React from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const CompletedTasks = () => {
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
          text: "Tasks",
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
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [80, 20], // Example task completion ratio
        backgroundColor: ["#4BC0C0", "#FF6384"],
      },
    ],
  };

  const barChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [10, 15, 8, 12, 18],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Completed Tasks",
        data: [50, 60, 45, 70],
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

export default CompletedTasks;
