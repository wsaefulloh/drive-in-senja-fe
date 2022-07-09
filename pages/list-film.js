import React from "react";

// reactstrap components
import {
  Card,
  Container,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";

import CardFilms from "components/Cards/CardsFilm.js";

import "../assets/css/main/main.module.css";

function ListFilm() {
  return (
    <>
      <Container className="pt-4">
        <Col>
          <Row className="m-0 p-0">
            <h2>Now Playing at</h2>
            <h2 className="ml-2" style={{ color: "#FE7900" }}>
              Alam Sutera
            </h2>
          </Row>
        </Col>
      </Container>

      <Container className="pt-2">
        <Col>
          <Row className="m-0 p-0 align-items-center">
            <div className="pr-3 py-2">
              <input
                className="search w-100"
                type="text"
                placeholder="Customer"
              />
            </div>

            <div className="m-0 p-2">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex flex-row">
                      <h5 className="m-0">Location:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        Alam Sutera
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <span>All</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Alam Sutera</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Surabaya</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Tangerang</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Madiun</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Yogyakarta</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Solo</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>

            <div className="p-2 m-0">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex flex-row">
                      <h5 className="m-0">Genre:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        All
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <span>All</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Horror</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>

            <div className="p-2 m-0">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex flex-row">
                      <h5 className="m-0">Theme:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        All
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <span>All</span>
                    </DropdownItem>
                    <DropdownItem>
                      <span>Dunia Mencekam</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>
          </Row>
        </Col>
      </Container>

      <Container className="pt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          <CardFilms />
          <CardFilms />
          <CardFilms />
          <CardFilms />
          <CardFilms />
          <CardFilms />
        </div>
      </Container>
    </>
  );
}

ListFilm.layout = HomeLayout;

export default ListFilm;
