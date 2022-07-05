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
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container className="p-0 m-0" style={{ maxWidth: "100%" }}>
        <Row className="m-0">
          <Col lg="5" className="p-0">
            <div className="background__home">
              <Container className="text-center py-6">
                <div className="justify-content-center mb-4">
                  <img
                    alt="..."
                    src={require("assets/img/brand/DIS_Logo_1 1.png")}
                    width="120px"
                  />
                </div>
                <div className="justify-content-center mb-4">
                  <img
                    alt="..."
                    src={require("assets/img/theme/main text.png")}
                    width="450px"
                  />
                </div>
                <Button
                  color="secondary"
                  style={{ color: "#FE7900" }}
                  type="button"
                >
                  Buy Ticket
                </Button>
              </Container>
            </div>
          </Col>
          <Col lg="7" className="p-0 background__image"></Col>
        </Row>
      </Container>

      <Container className="d-flex align-items-center justify-content-between pt-4">
        <div>Event & Promotions</div>
        <Button color="secondary" style={{ color: "#FE7900" }} type="button">
          Lainnya ...
        </Button>
      </Container>

      <Container className="pt-4">
        <Row>
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </Row>
      </Container>

      <Container className="pt-4">
        <div className="text-center">Telah Diliput oleh :</div>
        <Row className="align-items-center pt-3">
          <Col>
            <div className="justify-content-center mb-4">
              <img
                alt="..."
                src={require("assets/img/icons/common/Metro.svg")}
                width="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="justify-content-center mb-4">
              <img
                alt="..."
                src={require("assets/img/icons/common/RCTI.svg")}
                width="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="justify-content-center mb-4">
              <img
                alt="..."
                src={require("assets/img/icons/common/Kompas.svg")}
                width="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="justify-content-center mb-4">
              <img
                alt="..."
                src={require("assets/img/icons/common/Kumparan.svg")}
                width="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="justify-content-center mb-4">
              <img
                alt="..."
                src={require("assets/img/icons/common/Liputan6.svg")}
                width="100%"
              />
            </div>
          </Col>
          <Col>
            <div className="justify-content-center mb-4">
              <img
                alt="..."
                src={require("assets/img/icons/common/detik.svg")}
                width="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-4">
        <Card className="bg-carousel">
          <Container className="d-flex align-items-center justify-content-between py-4 px-6">
            <div style={{ color: "#ffffff" }}>Now Playing</div>
            <Button
              color="secondary"
              style={{ color: "#FE7900" }}
              type="button"
            >
              Lainnya ...
            </Button>
          </Container>
          <Container>
            <div className="carousel-box">
              <Slider {...settings}>
                <CardFilms />
                <CardFilms />
                <CardFilms />
                <CardFilms />
                <CardFilms />
                <CardFilms />
              </Slider>
            </div>
          </Container>
        </Card>
      </Container>

      <Container className="pt-4">
        <div className="text-center">Dapat dibeli di :</div>
        <Row className="align-items-center pt-3">
          <Col>
            <div className="mb-4" style={{ textAlign: "end" }}>
              <img
                alt="..."
                src={require("assets/img/brand/Loket.svg")}
                width="25%"
              />
            </div>
          </Col>
          <Col>
            <div className="mb-4" style={{ textAlign: "start" }}>
              <img
                alt="..."
                src={require("assets/img/brand/Gotix.svg")}
                width="25%"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-4">
        <Card className="background-3">
          <Row className="m-0 align-items-center">
            <Col lg="6">
              <Container className="pt-4" style={{ maxWidth: "80%" }}>
                <div className="carousel-box p-0">
                  <Slider {...settings1}>
                    <Card className="background_card2"></Card>
                    <Card className="background_card2"></Card>
                    <Card className="background_card2"></Card>
                  </Slider>
                </div>
              </Container>
            </Col>
            <Col lg="6">
              <div className="">
                <Container className="py-4">
                  <div className="mb-4" style={{ color: "#ffffff" }}>
                    Drive-In Experience
                  </div>
                  <div className="mb-4" style={{ color: "#ffffff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget ut sed a elit mollis diam tortor quis urna. Cursus ac
                    vulputate ligula faucibus quam in nisl. Sed nam pulvinar
                    risus pellentesque. Sed ut vulputate sagittis etiam
                    dignissim eu.
                  </div>
                  <Button
                    color="secondary"
                    style={{ color: "#FE7900" }}
                    type="button"
                  >
                    Buy Ticket
                  </Button>
                </Container>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container
        className="p-0 m-0 background_food"
        style={{ maxWidth: "100%" }}
      >
        <Row className="justify-content-center align-items-center py-6 m-0">
          <div className="text-center py-6">
            <div
              className="text-center"
              style={{ color: "#ffffff", fontSize: "100px" }}
            >
              FOOD & DRINK
            </div>
            <Button
              color="secondary"
              style={{ color: "#FE7900", marginTop: "20px" }}
              type="button"
            >
              Order Now
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

Home.layout = Admin;

export default Home;
