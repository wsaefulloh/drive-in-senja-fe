import React from "react";

// reactstrap components
import { Button, Container, Row } from "reactstrap";

// layout for this page
import HomeLayout from "layouts/Homepage.js";

import "../assets/css/main/main.module.css";

function EventsPromotions() {
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

EventsPromotions.layout = HomeLayout;

export default EventsPromotions;
