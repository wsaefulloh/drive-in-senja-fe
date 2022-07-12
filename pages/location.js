import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardEvent from "components/Cards/CardsEvent.js";

import CardsLocation from "components/Cards/CardsLocation.js";

import Slider from "react-slick";

import "../assets/css/main/main.module.css";

function Locations() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <>
      <Container className="py-4">
        <Card className="bg-carousel m-0">
          <Container className="pt-4">
            <div className="carousel-box">
              <Slider {...settings} className="slider-playnow">
                <CardsLocation />
                <CardsLocation />
                <CardsLocation />
                <CardsLocation />
                <CardsLocation />
                <CardsLocation />
              </Slider>
            </div>
          </Container>
        </Card>
      </Container>
    </>
  );
}

Locations.layout = HomeLayout;

export default Locations;
