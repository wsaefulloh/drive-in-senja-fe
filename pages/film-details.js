import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// layout for this page
import HomeLayout from "layouts/Homepage.js";

import "../assets/css/main/main.module.css";

function FilmDetails() {
  return (
    <>
      <Container
        className="p-0 m-0 background_detail"
        style={{ maxWidth: "100%" }}
      >
        <div className="gradient__card__events">
          <Container>
            <Row className="m-0 align-items-center py-5">
              <Col lg="4" className="text-center">
                <div
                  className="title_cover"
                  // style={
                  //   {
                  //     backgroundImage:
                  //       "url(" +
                  //       "https://drive.google.com/uc?export=view&id=id_nya" +
                  //       ")",
                  //     height: "400px",
                  //     width: "270px",
                  //     backgroundPosition: "center",
                  //     backgroundSize: "cover",
                  //   }
                  // }
                >
                  {/* <img
                    alt="..."
                    src={require("assets/img/theme/image 6.svg")}
                    height="100%"
                  /> */}
                </div>
              </Col>
              <Col>
                <h1 style={{ color: "#ffffff" }}>The Nun</h1>
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
                  <p style={{ color: "#ffffff" }}>01 Hours 36 Minutes</p>
                </div>
                <h2 className="mt-3" style={{ color: "#ffffff" }}>
                  Horror / Thiller
                </h2>
                <div className="mt-3" style={{ color: "#ffffff" }}>
                  Misteri dari kematian seorang biarawati muda membawa seorang
                  pastur untuk investigasi. Sayangnya, terlalu banyak malapetaka
                  yang mengintai dibalik rahasia tersebut.
                </div>
                <h2 className="mt-3" style={{ color: "#FE7900" }}>
                  Alam Sutera Theater
                </h2>
                <h3 className="mt-3" style={{ color: "#ffffff" }}>
                  Jumat, 22 Mei 2022 18:00 WIB
                </h3>
                <Button
                  style={{ color: "#ffffff", backgroundColor: "#FE7900" }}
                  type="button"
                  className="mt-3"
                >
                  Beli Tiket
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <Container className="d-flex align-items-center justify-content-between pt-4">
        <Col>
          <h2 style={{ color: "#FE7900" }}>Video & Photo</h2>
        </Col>
      </Container>

      <Container className="pt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
        </div>
      </Container>
    </>
  );
}

FilmDetails.layout = HomeLayout;

export default FilmDetails;
