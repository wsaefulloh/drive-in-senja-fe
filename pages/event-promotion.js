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
        className="p-0 m-0 background_event_promotion"
        style={{ maxWidth: "100%" }}
      >
        <Row className="justify-content-center align-items-center py-6 m-0">
          <div className="text-center py-6">
            <div
              className="text-center"
              style={{ color: "#ffffff", fontSize: "100px" }}
            >
              BUY 1 GET 1
            </div>
            <Button
              color="secondary"
              style={{ color: "#FE7900", marginTop: "20px" }}
              type="button"
            >
              Buy Now
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

Home.layout = Admin;

export default Home;
