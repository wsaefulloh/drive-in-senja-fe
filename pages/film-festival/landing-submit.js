import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardPartnership from "components/Cards/CardsPartnership.js";

import Router from "next/router";

import Slider from "react-slick";

import "../../assets/css/main/main.module.css";

function LandingSubmit() {
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

      <Container className="pt-4">
        <Row className="pb-4 justify-content-center align-items-center">
          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              borderRadius: "10px",
            }}
            type="button"
          >
            Film Submission
          </Button>
          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              borderRadius: "10px",
            }}
            type="button"
            onClick={() => {
              Router.push("/film-festival/workshop-programs");
            }}
          >
            Workshop & Program
          </Button>
        </Row>
      </Container>

      <div style={{ backgroundColor: "#FE7900" }} className="p-0 mb-4">
        <Container className="py-4">
          <Col>
            <h2 className="text-center" style={{ color: "#ffffff" }}>
              Langkah Pendaftaran
            </h2>
            <div className="align-items-center pt-3 row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah1.svg")}
                    width="50%"
                  />
                  <div className="mt-2 langkah_number">1</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "15px" }}
                  >
                    Klik submit untuk submit karya kamu
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah2.svg")}
                    width="50%"
                  />
                  <div className="mt-2 langkah_number">2</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "15px" }}
                  >
                    Isi formulir Drive-In Senja FIlm Festival dengan data yang
                    sebenar-benarnya, berikan alamat email dan nomor telepon
                    yang aktif apabila kami menghubungimu di kemudian hari
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah3.svg")}
                    width="50%"
                  />
                  <div className="mt-2 langkah_number">3</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "15px" }}
                  >
                    Berikan persetujuan kamu atas syarat dan ketentuan yang
                    berlaku dengan mencentang (√) “Iya” di bagian bawah formulir
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="border_langkah mb-4 p-3"
                  style={{ textAlign: "center", height: "380px" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/langkah4.svg")}
                    width="50%"
                  />
                  <div className="mt-2 langkah_number">4</div>
                  <div
                    className="my-2"
                    style={{ color: "#ffffff", fontSize: "15px" }}
                  >
                    Klik submit
                  </div>
                </div>
              </Col>
            </div>
            <div className="text-center">
              <Button
                color="secondary"
                style={{ color: "#FE7900" }}
                type="button"
              >
                Submit
              </Button>
            </div>
          </Col>
        </Container>
      </div>

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

LandingSubmit.layout = HomeLayout;

export default LandingSubmit;
