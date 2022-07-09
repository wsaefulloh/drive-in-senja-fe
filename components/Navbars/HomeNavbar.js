import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import "../../assets/css/main/main.module.css";

function HomeNavbar() {
  return (
    <>
      <div className="sticky-top">
        <Navbar
          className="navbar-horizontal navbar-main navbar-light shadow-sm bg-white"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <Link href="#">
              <span>
                <NavbarBrand href="#pablo">
                  <img
                    alt="..."
                    src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  />
                </NavbarBrand>
              </span>
            </Link>
            <button
              aria-controls="navbar-collapse"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-collapse"
              data-toggle="collapse"
              id="navbar-collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              className="navbar-custom-collapse justify-content-end"
              navbar
              toggler="#navbar-collapse"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link href="#">
                      <img
                        alt="..."
                        src={require("assets/img/brand/DIS_Logo_1 1.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-collapse"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-collapse"
                      data-toggle="collapse"
                      id="navbar-collapse"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Home
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Now Playing
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Promotion
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Booking & Partnership
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Food & Drink
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Film Festival
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="m-0">
                  <Link href="#">
                    <NavLink href="#pablo" className="py-1">
                      <span className="nav-link-inner--text navbar__text">
                        Location
                      </span>
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default HomeNavbar;
