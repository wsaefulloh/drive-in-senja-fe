import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardEvent from "components/Cards/CardsEvent.js";

import CardFilms from "components/Cards/CardsFilm.js";

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";

import "../assets/css/main/main.module.css";

function Home() {
  const [eventsPromotions, setEventsPromotions] = useState([]);
  const [film, setFilm] = useState([]);

  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: film.length < 4 ? film.length : 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: true,
          slidesToShow: film.length < 2 ? film.length : 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  const getEventsPromotions = async () => {
    const data = await fetchWrapper.get(`api/events-promotions`);
    if (data) {
      setEventsPromotions(data.data);
    }
  };

  const getFilm = async () => {
    const data = await fetchWrapper.get(`api/film-list`);
    if (data) {
      setFilm(data.data);
    }
  };

  useEffect(() => {
    getEventsPromotions();
    getFilm();
  }, []);

  useEffect(() => {
    console.log(eventsPromotions);
    console.log(film);
  }, [film]);

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
                BELI TIKET
              </Button>
            </Container>
          </Col>
          <Col lg="7" className="p-0 background__image"></Col>
        </Row>
      </Container>

      <Container id="events">
        <Col>
          <Row className="align-items-center justify-content-between py-4">
            <h2 className="p-0 m-0">Event & Promotions</h2>
            <Button
              color="secondary"
              style={{ color: "#FE7900" }}
              type="button"
            >
              Lainnya ...
            </Button>
          </Row>
        </Col>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          {eventsPromotions.map((val) => {
            return <CardEvent img={val.poster_image} title={val.title} />;
          })}
        </div>
      </Container>

      <Container className="pt-4">
        <h2 className="text-center">Telah Diliput oleh :</h2>
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

      <Container className="pt-4">
        <Card className="bg-carousel">
          <Container className="d-flex align-items-center justify-content-between py-4 px-5">
            <h2 style={{ color: "#ffffff" }}>Now Playing</h2>
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
              <Slider {...settings} className="slider-playnow">
                {film.map((val) => {
                  return (
                    <CardFilms
                      img={val.poster_image}
                      title={val.title}
                      date={val.date_playing}
                      genre={val.genre}
                      id={val.id_film}
                      url={val.url_ticket}
                    />
                  );
                })}
              </Slider>
            </div>
          </Container>
        </Card>
      </Container>

      <Container className="pt-4">
        <Col>
          <h2 className="text-center">Dapat dibeli di :</h2>
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
        </Col>
      </Container>

      <Container className="pt-4 mb-4">
        <Card className="background-3">
          <Row className="m-0 align-items-center">
            <Col lg="6">
              <Container className="pt-4" style={{ maxWidth: "80%" }}>
                <div className="carousel-box p-0">
                  <Slider {...settings1} className="slider-experience">
                    <Col>
                      <Row className="justify-content-center mb-4 align-items-center">
                        <img
                          alt="..."
                          src={require("assets/img/theme/foto tagline.png")}
                          width="100%"
                          style={{ borderRadius: "5px" }}
                        />
                      </Row>
                    </Col>
                    <Col>
                      <Row className="justify-content-center mb-4 align-items-center">
                        <img
                          alt="..."
                          src={require("assets/img/theme/foto tagline.png")}
                          width="100%"
                          style={{ borderRadius: "5px" }}
                        />
                      </Row>
                    </Col>
                    <Col>
                      <Row className="justify-content-center mb-4 align-items-center">
                        <img
                          alt="..."
                          src={require("assets/img/theme/foto tagline.png")}
                          width="100%"
                          style={{ borderRadius: "5px" }}
                        />
                      </Row>
                    </Col>
                  </Slider>
                </div>
              </Container>
            </Col>
            <Col>
              <Container className="py-4 px-5">
                <h1 className="mb-4" style={{ color: "#ffffff" }}>
                  Drive-In Experience
                </h1>
                <div className="mb-4" style={{ color: "#ffffff" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  ut sed a elit mollis diam tortor quis urna. Cursus ac
                  vulputate ligula faucibus quam in nisl. Sed nam pulvinar risus
                  pellentesque. Sed ut vulputate sagittis etiam dignissim eu.
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
          </Row>
        </Card>
      </Container>

      <Container
        id="food-drink"
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
              style={{
                color: "#000000",
                marginTop: "20px",
                backgroundColor: "#FE7900",
                border: "0",
              }}
              type="button"
            >
              Pesan Sekarang
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
