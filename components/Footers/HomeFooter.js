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

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function AdminFooter() {
  return (
    <>
      <footer
        className="footer__custom"
        style={{
          padding: "1rem",
        }}
      >
        <Container fluid>
          <Row className="align-items-start justify-content-lg-between py-5">
            <Col lg="3">
              <div>
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="mt-3 mb-4 pr-5" style={{ color: "#ffffff" }}>
                <span>
                  Drive-In Senja is the first and largest modern Drive-In
                  Theater in Indonesia, brought by Katarsis Live. Katarsis Live
                  is a multi-experiential entertainment company specializing in
                  the creation of intellectual property attractions,
                  destinations and transmedia productions in Indonesia.
                </span>
              </div>
            </Col>
            <Col lg="3">
              <div style={{ color: "#ffffff" }}>Navigations</div>
              <div className="mt-2 mb-4" style={{ color: "#ffffff" }}>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Home
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Now Playing
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Event & Promotions
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Private Booking
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Location
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div style={{ color: "#ffffff" }}>Recent Post</div>
              <div className="mt-2 mb-4" style={{ color: "#ffffff" }}>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Home
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Now Playing
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Event & Promotions
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Private Booking
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Location
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div style={{ color: "#ffffff" }}>Contact Us</div>
              <div className="mt-2 mb-4" style={{ color: "#ffffff" }}>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Jalan Sutera Raya, Tangerang
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  halo@driveinsenja.id
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  +62 881-0256-50912
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Instagram
                </div>
                <div className="mt-1" style={{ color: "#ffffff" }}>
                  Twitter
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AdminFooter;
