import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function TotalShipment() {
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const pieChartData = {
    labels: ["USA", "Europe", "Asia", "Others"],
    datasets: [
      {
        label: "Shipment Distribution",
        data: [300, 500, 200, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Shipments",
        data: [40, 50, 60, 70, 80, 90],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Shipments per Day",
        data: [50, 75, 60, 80, 100, 90, 70],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div className="content">
      <Row>
        <Col lg="4">
          <Card>
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
          <Card>
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
          <Card>
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
}

export default TotalShipment;
