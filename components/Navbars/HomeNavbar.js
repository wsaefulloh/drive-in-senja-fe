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
  UncontrolledTooltip,
  Button,
} from "reactstrap";

import "../../assets/css/main/main.module.css";

function AdminNavbar() {
  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-main navbar-light shadow-sm"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <Link href="/">
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
                  <Link href="/admin/dashboard">
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
                <Link href="/admin/dashboard">
                  <NavLink href="#pablo" className="py-1">
                    <span className="nav-link-inner--text navbar__text">
                      Home
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem className="m-0">
                <Link href="/auth/pricing">
                  <NavLink href="#pablo" className="py-1">
                    <span className="nav-link-inner--text navbar__text">
                      Now Playing
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem className="m-0">
                <Link href="/auth/login">
                  <NavLink href="#pablo" className="py-1">
                    <span className="nav-link-inner--text navbar__text">
                      Promotion
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem className="m-0">
                <Link href="/auth/register">
                  <NavLink href="#pablo" className="py-1">
                    <span className="nav-link-inner--text navbar__text">
                      Booking & Partnership
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem className="m-0">
                <Link href="/auth/lock">
                  <NavLink href="#pablo" className="py-1">
                    <span className="nav-link-inner--text navbar__text">
                      Food & Drink
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem className="m-0">
                <Link href="/auth/register">
                  <NavLink href="#pablo" className="py-1">
                    <span className="nav-link-inner--text navbar__text">
                      Film Festival
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem className="m-0">
                <Link href="/auth/register">
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
    </>
  );
}

export default AdminNavbar;
