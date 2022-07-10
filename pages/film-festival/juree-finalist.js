import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardsFinalist from "components/Cards/CardsFinalist.js";

import CardsJudges from "components/Cards/CardsJudges.js";

import CardFilms from "components/Cards/CardsFilm.js";

import Slider from "react-slick";

import "../../assets/css/main/main.module.css";

function JureeFinalist() {
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

  const settingAutoPlay = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <>
      <Container className="p-0 m-0" style={{ maxWidth: "100%" }}>
        <Row className="m-0">
          <Col lg="5" className="p-0">
            <Container className="background__home text-center py-6">
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
                  className="coverHome_textDIS"
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
          </Col>
          <Col lg="7" className="p-0 background__image"></Col>
        </Row>
      </Container>

      <Container>
        <Col>
          <Row className="align-items-center justify-content-between pt-4">
            <h2 className="p-0 m-0">Juree Finalist</h2>
          </Row>
          <Row className="align-items-center justify-content-between pt-2 pb-4">
            <div className="p-0 m-0">20 Finalist</div>
          </Row>
        </Col>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
          <CardsFinalist />
        </div>
      </Container>

      <Container className="py-4">
        <h2 className="text-center">Supporting Partners</h2>
        <Slider {...settingAutoPlay} className="pt-3">
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Metro.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/RCTI.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Kompas.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Kumparan.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/Liputan6.svg")}
                width="100%"
              />
            </Row>
          </Col>
          <Col>
            <Row
              className="justify-content-center mb-4 align-items-center"
              style={{ height: "50px" }}
            >
              <img
                alt="..."
                src={require("assets/img/icons/common/detik.svg")}
                width="100%"
              />
            </Row>
          </Col>
        </Slider>
      </Container>
    </>
  );
}

JureeFinalist.layout = HomeLayout;

export default JureeFinalist;
