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
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
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
      <Container className="pt-4">
        <Row className="m-0 p-0">
          <div>Now Playing at</div>
          <div className="ml-2" style={{ color: "#FE7900" }}>
            Alam Sutera
          </div>
        </Row>
      </Container>
      <Container className="pt-4">
        <Row className="m-0 p-0">
          <div className="pr-3">
            <input
              className="search w-100"
              type="text"
              placeholder="Customer"
            />
          </div>

          <div className="m-0 p-2">
            <Card className="m-0 d-flex flex-row align-items-center">
              <UncontrolledDropdown nav>
                <DropdownToggle
                  className="nav-link pl-0 d-flex flex-row align-items-center"
                  style={{ cursor: "pointer" }}
                  color=""
                  tag="a"
                >
                  <Container className="d-flex flex-row">
                    <h5 className="m-0">Location:</h5>
                    <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                      Alam Sutera
                    </h5>
                  </Container>
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/Vector.svg")}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <span>All</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Alam Sutera</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Surabaya</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Tangerang</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Madiun</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Yogyakarta</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Solo</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Card>
          </div>

          <div className="p-2 m-0">
            <Card className="m-0 d-flex flex-row align-items-center">
              <UncontrolledDropdown nav>
                <DropdownToggle
                  className="nav-link pl-0 d-flex flex-row align-items-center"
                  style={{ cursor: "pointer" }}
                  color=""
                  tag="a"
                >
                  <Container className="d-flex flex-row">
                    <h5 className="m-0">Genre:</h5>
                    <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                      All
                    </h5>
                  </Container>
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/Vector.svg")}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <span>All</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Horror</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Card>
          </div>
          <div className="p-2 m-0">
            <Card className="m-0 d-flex flex-row align-items-center">
              <UncontrolledDropdown nav>
                <DropdownToggle
                  className="nav-link pl-0 d-flex flex-row align-items-center"
                  style={{ cursor: "pointer" }}
                  color=""
                  tag="a"
                >
                  <Container className="d-flex flex-row">
                    <h5 className="m-0">Theme:</h5>
                    <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                      All
                    </h5>
                  </Container>
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/Vector.svg")}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <span>All</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>Dunia Mencekam</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Card>
          </div>
        </Row>
      </Container>
      <Container className="pt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          <CardFilms />
          <CardFilms />
          <CardFilms />
          <CardFilms />
          <CardFilms />
          <CardFilms />
        </div>
      </Container>
    </>
  );
}

Home.layout = Admin;

export default Home;
