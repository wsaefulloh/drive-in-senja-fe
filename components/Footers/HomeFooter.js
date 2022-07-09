import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function HomeFooter() {
  return (
    <>
      <footer className="footer__custom">
        <Container className="py-4">
          <Row className="pt-4">
            <Col lg="3" className="mr-5">
              <div>
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="mt-3 mb-4 pr-3" style={{ color: "#ffffff" }}>
                <span>
                  Drive-In Senja is the first and largest modern Drive-In
                  Theater in Indonesia, brought by Katarsis Live. Katarsis Live
                  is a multi-experiential entertainment company specializing in
                  the creation of intellectual property attractions,
                  destinations and transmedia productions in Indonesia.
                </span>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h2 style={{ color: "#ffffff" }}>Navigations</h2>
                  <div className="mt-3 mb-4" style={{ color: "#ffffff" }}>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Home
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Now Playing
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Event & Promotions
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Private Booking
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Location
                    </div>
                  </div>
                </Col>
                <Col>
                  <h2 style={{ color: "#ffffff" }}>Recent Post</h2>
                  <div className="mt-3 mb-4" style={{ color: "#ffffff" }}>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Home
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Now Playing
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Event & Promotions
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Private Booking
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Location
                    </div>
                  </div>
                </Col>
                <Col>
                  <h2 style={{ color: "#ffffff" }}>Contact Us</h2>
                  <div className="mt-3 mb-4" style={{ color: "#ffffff" }}>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Jalan Sutera Raya, Tangerang
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      halo@driveinsenja.id
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      +62 881-0256-50912
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Instagram
                    </div>
                    <div className="mt-2" style={{ color: "#ffffff" }}>
                      Twitter
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default HomeFooter;
