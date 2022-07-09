import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components
import CardPartnership from "components/Cards/CardsPartnership.js";

import "../assets/css/main/main.module.css";

function BookingPartner() {
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

      <Container style={{ marginTop: "15px" }}>
        <Row>
          <CardPartnership />
          <CardPartnership />
          <CardPartnership />
          <CardPartnership />
        </Row>
      </Container>
    </>
  );
}

BookingPartner.layout = HomeLayout;

export default BookingPartner;
