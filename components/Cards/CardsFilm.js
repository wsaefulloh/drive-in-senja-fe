import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardFilms() {
  return (
    <>
      <Col>
        <Card className="background_film">
          <CardBody className="gradient__card__events d-flex">
            <div className="w-100">
              <CardTitle className="mb-3" tag="h3" style={{ color: "#ffffff" }}>
                The Nun
              </CardTitle>
              <div>Horror/Thriller</div>
              <div className="mb-3">Jumat 22 Mei 2022</div>

              <div className="d-flex justify-content-center align-items-center">
                <Button
                  style={{
                    color: "#FE7900",
                    width: "100%",
                    backgroundColor: "#ffffff",
                  }}
                  type="button"
                  className="w-100 p-1"
                >
                  Details
                </Button>
                <Button
                  style={{
                    color: "#ffffff",
                    width: "100%",
                    backgroundColor: "#FE7900",
                  }}
                  type="button"
                  className="w-100 p-1"
                >
                  Beli
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default CardFilms;
