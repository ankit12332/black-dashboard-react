import React, { useState } from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import axios from "axios";
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard() {
  const [bigChartData, setbigChartData] = useState("data1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <Button
                      color="primary"
                      size="sm"
                      className="ml-2"
                      onClick={() => {
                        toggleModal();
                      }}
                    >
                      What does this mean?
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Modal for AI Explanation */}
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>AI Explanation</ModalHeader>
          <ModalBody>
            {loading ? (
              <Spinner color="primary" />
            ) : (
              <p>{aiResponse || "Click the button to fetch AI explanation."}</p>
            )}
          </ModalBody>
        </Modal>

        {/* Floating Buttons */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <Button
            color="info"
            className="btn-round mb-2"
            onClick={() => {
              toggleModal();
            }}
          >
            <i className="tim-icons icon-chat-33" /> Help
          </Button>
          <Button
            color="success"
            className="btn-round"
            onClick={() => {
              // Add logic for video generator here
            }}
          >
            <i className="tim-icons icon-video-66" /> Generate Video
          </Button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
