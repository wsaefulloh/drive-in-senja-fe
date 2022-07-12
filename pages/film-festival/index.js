import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardPartnership from "components/Cards/CardsPartnership.js";

import Router from "next/router";

import "../../assets/css/main/main.module.css";

function FilmFestival() {
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
        <Row>
          <Col lg="6" className="pb-4">
            <Row className="justify-content-center align-items-center">
              <img
                alt="..."
                src={require("assets/img/theme/foto tagline.png")}
                width="95%"
                style={{ borderRadius: "5px" }}
              />
            </Row>
          </Col>
          <Col>
            <div className="pb-4 px-4">
              <h1>About</h1>
              <div className="pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                rhoncus sagittis quam, non efficitur turpis molestie id. Proin
                sed suscipit leo. Duis vestibulum fringilla ligula, vitae
                laoreet lacus pharetra quis. Maecenas viverra, orci in efficitur
                varius, mauris urna venenatis dolor, a varius neque ante eu
                nisl. Duis diam neque, gravida eget libero in, sollicitudin
                condimentum libero. Nunc in mattis velit. Sed eu metus laoreet,
                tincidunt mi eu, consectetur nibh. Aenean ut pulvinar metus, ac
                ullamcorper ipsum. Integer egestas auctor magna, nec tincidunt
                diam tincidunt eget. Sed interdum sagittis dolor eget porttitor.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
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
    </>
  );
}

FilmFestival.layout = HomeLayout;

export default FilmFestival;
