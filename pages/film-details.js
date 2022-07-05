/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Homepage.js";
// core components
import CardEvent from "components/Cards/CardsEvent.js";

import CardFilms from "components/Cards/CardsFilm.js";

import Slider from "react-slick";

import "../assets/css/main/main.module.css";

function Home() {
  return (
    <>
      <Container
        className="p-0 m-0 background_detail"
        style={{ maxWidth: "100%" }}
      >
        <div className="gradient__card__events">
          <Container>
            <Row className="m-0">
              <Col lg="4" className="text-center p-0">
                <div className="py-6">
                  <img
                    alt="..."
                    src={require("assets/img/theme/image 6.svg")}
                  />
                </div>
              </Col>
              <Col lg="8" className="p-0 align-items-center d-flex">
                <div className="py-4">
                  <div style={{ color: "#ffffff", fontSize: "50px" }}>
                    The Nun
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div
                      className="py-1 px-2 mr-2"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#FE7900",
                        borderRadius: "5px",
                      }}
                    >
                      R
                    </div>
                    <div style={{ color: "#ffffff" }}>01 Hours 36 Minutes</div>
                  </div>
                  <div
                    className="mt-3"
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  >
                    <b>Horror / Thiller</b>
                  </div>
                  <div
                    className="mt-3"
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  >
                    Misteri dari kematian seorang biarawati muda membawa seorang
                    pastur untuk investigasi. Sayangnya, terlalu banyak
                    malapetaka yang mengintai dibalik rahasia tersebut.
                  </div>
                  <div
                    className="mt-3"
                    style={{ color: "#FE7900", fontSize: "20px" }}
                  >
                    Alam Sutera Theater
                  </div>
                  <div
                    className="mt-3"
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  >
                    Jumat, 22 Mei 2022 18:00 WIB
                  </div>
                  <Button
                    style={{ color: "#ffffff", backgroundColor: "#FE7900" }}
                    type="button"
                    className="mt-3"
                  >
                    Beli Tiket
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <Container className="d-flex align-items-center justify-content-between pt-4">
        <div style={{ color: "#FE7900" }}>Video & Photo</div>
      </Container>

      <Container className="pt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          <Col>
            <div className="pb-4">
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="pb-4">
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="pb-4">
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="pb-4">
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="pb-4">
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
}

Home.layout = Admin;

export default Home;
